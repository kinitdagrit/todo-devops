"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([
    "Finish assignment",
    "Study Next.js",
    "Setup Git repository",
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <main className="todo-container">
      <h1>TODO APPLICATION</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((item, index) => (
          <div className="task" key={index}>
            <label>
              <input type="checkbox" />
              {item}
            </label>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}