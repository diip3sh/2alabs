"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  type CollectionRequest,
  type CollectionResponse,
  createCollection,
  deleteCollection,
  getAllCollections,
  updateCollection,
} from "@/lib/collection-api";

export function useCollections() {
  return useQuery<CollectionResponse[]>({
    queryKey: ["collections"],
    queryFn: getAllCollections,
  });
}

export function useCreateCollection() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CollectionRequest) => createCollection(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["collections"] });
    },
  });
}

export function useUpdateCollection() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, name }: { id: string; name: string }) =>
      updateCollection(id, { name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["collections"] });
    },
  });
}

export function useDeleteCollection() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCollection(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["collections"] });
    },
  });
}
