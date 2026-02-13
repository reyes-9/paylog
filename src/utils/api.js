const BASE_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(endpoint, options = {}) {
  const config = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  let data = null;

  try {
    data = await response.json();
  } catch (err) {
    // response has no JSON body
  }

  if (!response.ok) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}

export const api = {
  get: (endpoint) => apiRequest(endpoint),

  post: (endpoint, body) =>
    apiRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: (endpoint, body) =>
    apiRequest(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  delete: (endpoint) =>
    apiRequest(endpoint, {
      method: "DELETE",
    }),
};
