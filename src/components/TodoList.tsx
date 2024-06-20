export const getCompletedTasksCount = (tasks: Task[]) => {
  return tasks.reduce((acc, cur) => acc + (cur.completed ? 1 : 0), 0);
};


export default function TodoList() {
  const tasks: Task[] = [
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


  return (
    <div className="todo-list" style={{ margin: 'auto', textAlign: 'center' }}>
      <h1>Todo List</h1>
      <div className="todo-list__tasks" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {tasks.map((task: Task) => {
          return (
            <div key={task.id} className="todo-list__task-item" style={{ backgroundColor: 'var(--grey-dark-3)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3>{ task.name }</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
