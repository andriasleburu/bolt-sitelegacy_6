"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Review new data for Great Barrier Reef', completed: false },
    { id: 2, description: 'Respond to alert: Machu Picchu landslide risk', completed: false },
    { id: 3, description: 'Complete quarterly report for Taj Mahal', completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`task-${task.id}`} 
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${task.completed ? 'line-through text-muted-foreground' : ''}`}
              >
                {task.description}
              </label>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TaskList;