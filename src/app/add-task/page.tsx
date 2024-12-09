"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function AddTaskPage() {
  const [taskTitle, setTaskTitle] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your task creation logic here
    router.push("/tasks");
  };

  return (
    <div className="min-h-screen flex flex-col diagonal-stripes">
      <Header />
      <main className="flex-1 container flex items-center justify-center py-8">
        <Card className="w-[600px]">
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Enter task title"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border rounded"
                onClick={() => router.push("/tasks")}
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Add Task
              </button>
            </CardFooter>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
