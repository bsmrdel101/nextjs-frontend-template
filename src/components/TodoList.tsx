import { useState } from "react";

type Task = {
  id: number
  name: string
  completed: boolean
};

export const getCompletedTasksCount = (tasks: Task[]) => {
  return tasks.reduce((acc, cur) => acc + (cur.completed ? 1 : 0), 0);
};


export default function TodoList() {
  const tasksData: Task[] = [
    {
      id: 1,
      name: 'Break the dishes',
      completed: true,
    },
    {
      id: 2,
      name: 'Burn the lawn',
      completed: false,
    },
    {
      id: 3,
      name: 'Scream into the sky',
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const toggleTask = (id: number) => {
    const newTasks = tasks.map((task: Task) => {
      if (task.id === id) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };


  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {tasks.map((task: Task) => {
          return (
            <>
              {task.completed ?
                <button data-cy="completed" key={task.id} onClick={() => toggleTask(task.id)} style={{ backgroundColor: 'var(--grey-dark-3)', padding: '1rem', borderRadius: '0.5rem', color: 'var(--green-0)' }}>
                  <h3>{ task.name }</h3>
                </button>
                :
                <button data-cy="not-completed" key={task.id} onClick={() => toggleTask(task.id)} style={{ backgroundColor: 'var(--grey-dark-3)', padding: '1rem', borderRadius: '0.5rem' }}>
                  <h3>{ task.name }</h3>
                </button>
              }
            </>
          );
        })}
      </div>
    </div>
  );
}
