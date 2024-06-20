import { expect } from '@jest/globals';
import { getCompletedTasksCount } from "@/components/TodoList";

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


describe('Todo List', () => {
  it('Gets a list of completed tasks', () => {
    const count = getCompletedTasksCount(tasks);
    expect(count).toEqual(1);
  });
});
