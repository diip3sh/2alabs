"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  useCollections,
  useCreateCollection,
  useDeleteCollection,
  useUpdateCollection,
} from "@/hooks/use-collection";

export default function HomePage() {
  const router = useRouter();
  const [collectionName, setCollectionName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const { data: collections, isLoading, error } = useCollections();
  const createCollectionMutation = useCreateCollection();
  const updateCollectionMutation = useUpdateCollection();
  const deleteCollectionMutation = useDeleteCollection();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleCreateCollection = () => {
    if (!collectionName.trim()) {
      toast.error("Please enter a collection name");
      return;
    }

    createCollectionMutation.mutate(
      { name: collectionName },
      {
        onSuccess: () => {
          toast.success("Collection created successfully");
          setCollectionName("");
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to create collection");
        },
      }
    );
  };

  const handleUpdateCollection = (id: string) => {
    if (!editingName.trim()) {
      toast.error("Please enter a collection name");
      return;
    }

    updateCollectionMutation.mutate(
      { id, name: editingName },
      {
        onSuccess: () => {
          toast.success("Collection updated successfully");
          setEditingId(null);
          setEditingName("");
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to update collection");
        },
      }
    );
  };

  const handleDeleteCollection = (id: string) => {
    deleteCollectionMutation.mutate(id, {
      onSuccess: () => {
        toast.success("Collection deleted successfully");
      },
      onError: (error: Error) => {
        toast.error(error.message || "Failed to delete collection");
      },
    });
  };

  const startEditing = (id: string, name: string) => {
    setEditingId(id);
    setEditingName(name);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingName("");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-background px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Create Collection Card */}
          <Card>
            <CardHeader>
              <CardTitle>Create Collection</CardTitle>
              <CardDescription>Add a new collection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                disabled={createCollectionMutation.isPending}
                onChange={(e) => setCollectionName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateCollection();
                  }
                }}
                placeholder="Collection name"
                value={collectionName}
              />
              <Button
                className="w-full"
                disabled={createCollectionMutation.isPending}
                onClick={handleCreateCollection}
              >
                {createCollectionMutation.isPending
                  ? "Creating..."
                  : "Create Collection"}
              </Button>
            </CardContent>
          </Card>

          {/* Collections List Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Your Collections</CardTitle>
              <CardDescription>Manage your collections</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-muted-foreground text-sm">
                  Loading collections...
                </p>
              ) : error ? (
                <p className="text-destructive text-sm">
                  Error loading collections: {error.message}
                </p>
              ) : collections && collections.length > 0 ? (
                <div className="space-y-3">
                  {collections.map((collection) => (
                    <div
                      className="flex items-center justify-between rounded-lg border p-3"
                      key={collection.id}
                    >
                      {editingId === collection.id ? (
                        <div className="flex flex-1 items-center gap-2">
                          <Input
                            className="flex-1"
                            onChange={(e) => setEditingName(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleUpdateCollection(collection.id);
                              } else if (e.key === "Escape") {
                                cancelEditing();
                              }
                            }}
                            value={editingName}
                          />
                          <Button
                            disabled={updateCollectionMutation.isPending}
                            onClick={() =>
                              handleUpdateCollection(collection.id)
                            }
                            size="sm"
                          >
                            {updateCollectionMutation.isPending
                              ? "..."
                              : "Save"}
                          </Button>
                          <Button
                            onClick={cancelEditing}
                            size="sm"
                            variant="outline"
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <>
                          <div>
                            <p className="font-medium">{collection.name}</p>
                            <p className="text-muted-foreground text-xs">
                              Created:{" "}
                              {new Date(
                                collection.created_at
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() =>
                                startEditing(collection.id, collection.name)
                              }
                              size="sm"
                              variant="outline"
                            >
                              Edit
                            </Button>
                            <Button
                              disabled={deleteCollectionMutation.isPending}
                              onClick={() =>
                                handleDeleteCollection(collection.id)
                              }
                              size="sm"
                              variant="destructive"
                            >
                              Delete
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  No collections yet. Create one to get started!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
