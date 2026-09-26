from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context

from app.core.config import settings
from app.models.database import Base

# Import all SQLAlchemy ORM models so they are registered
# with Base.metadata before Alembic performs autogeneration.
from app.models.execution_checkpoint import ExecutionCheckpoint
from app.models.execution_event import ExecutionEvent
from app.models.api_key import APIKey
from app.models.workflow_schedule import WorkflowSchedule
from app.models.security_audit_event import SecurityAuditEvent

# Alembic Config object
config = context.config

# Configure Python logging from alembic.ini
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Use AgentGrid's existing application database configuration.
if not settings.database_url:
    raise RuntimeError(
        "DATABASE_URL is not configured."
    )

config.set_main_option(
    "sqlalchemy.url",
    settings.database_url.replace("%", "%%"),
)

# SQLAlchemy metadata used by Alembic autogenerate.
target_metadata = Base.metadata
def include_object(object, name, type_, reflected, compare_to):
    if type_ == "table" and reflected and name in {"agents", "tools"}:
        return False
    return True


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""

    url = settings.database_url

    context.configure(
        url=url,
        target_metadata=target_metadata,
        include_object=include_object,
        literal_binds=True,
        dialect_opts={
            "paramstyle": "named",
        },
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""

    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            include_object=include_object,
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()