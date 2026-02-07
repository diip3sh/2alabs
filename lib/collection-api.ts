// Use local API proxy routes (same-origin) to avoid cross-domain cookie issues
const API_BASE_URL = "";

export interface CollectionRequest {
  name: string;
}

export interface CollectionResponse {
  id: string;
  user_id: string;
  name: string;
  created_at: string;
}

export async function createCollection(
  request: CollectionRequest
): Promise<CollectionResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/collections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(request),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage =
      data.message || data.error || "Failed to create collection";
    throw new Error(errorMessage);
  }

  return data;
}

export async function getAllCollections(): Promise<CollectionResponse[]> {
  const response = await fetch(`${API_BASE_URL}/api/v1/collections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage =
      data.message || data.error || "Failed to fetch collections";
    throw new Error(errorMessage);
  }

  return data;
}

export async function updateCollection(
  id: string,
  request: CollectionRequest
): Promise<CollectionResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/collections/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(request),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage =
      data.message || data.error || "Failed to update collection";
    throw new Error(errorMessage);
  }

  return data;
}

export async function deleteCollection(
  id: string
): Promise<{ status: string }> {
  const response = await fetch(`${API_BASE_URL}/api/v1/collections/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage =
      data.message || data.error || "Failed to delete collection";
    throw new Error(errorMessage);
  }

  return data;
}
