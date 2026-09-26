const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

const API_KEY =
  import.meta.env.VITE_AGENTGRID_API_KEY;

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (API_KEY) {
    headers["Authorization"] = `Bearer ${API_KEY}`;
  }

  if (options.headers) {
    Object.assign(headers, options.headers);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      errorText || `API request failed: ${response.status}`
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}