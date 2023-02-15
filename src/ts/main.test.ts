import { addTodo, changeTodo, removeAllTodos } from "./functions";
import { IAddResponse } from "./models/IAddResult";
import { Todo } from "./models/Todo";
// import { displayError } from "./main";

describe('addTodo', () => {
  let todos: Todo[];

  beforeEach(() => {
    todos = [];
  });

  test('should add a new todo to the array when the text is at least three characters long', () => {
    let todoText = 'Olala';

    let response: IAddResponse = addTodo(todoText, todos);

    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe(todoText);
    expect(todos[0].done).toBe(false);
    expect(response.success).toBe(true);
    expect(response.error).toBe('');
  });

  test('should not add a new todo to the array when the text is less than three characters long', () => {
    let todoText = 'Yo';

    let response: IAddResponse = addTodo(todoText, todos);

    expect(todos.length).toBe(0);
    expect(response.success).toBe(false);
    expect(response.error).toBe('Du måste ange minst tre bokstäver');
  });
});

test("should be the oppiset of whatever it is now",() =>{

  let todo = new Todo('Buy groceries', false);

  changeTodo(todo);

  expect(todo.done).toBe(true);

  changeTodo(todo);

  expect(todo.done).toBe(false);
})

test('should remove all todos from the array', () => {
  let todos = [
    new Todo('test1', false),
    new Todo('test2', true),
    new Todo('test3', false),
  ];
  
  removeAllTodos(todos);
  
  expect(todos.length).toBe(0);
})

// describe('createHtml', () => {
//   let todos: Todo[];

//   beforeEach(() => {
//     todos = [
//       new Todo('Buy milk', true),
//       new Todo('Walk the dog', false),
//     ];
//     document.body.innerHTML = `
//       <ul id="todos"></ul>
//     `;
//     jest.spyOn(localStorage, 'setItem');
//   });

//   afterEach(() => {
//     jest.restoreAllMocks();
//   });

//   test('should update the todos list in the DOM with the given todos', () => {
//     createHtml(todos);

//     let todosContainer = document.getElementById('todos');
//     expect(todosContainer?.querySelectorAll('li')).toHaveLength(2);
//     expect(todosContainer?.querySelector('li:first-child')?.textContent).toBe('Buy milk');
//     expect(todosContainer?.querySelector('li:last-child')?.textContent).toBe('Walk the dog');
//     expect(todosContainer?.querySelector('li:first-child')?.classList.contains('todo__text--done')).toBe(true);
//     expect(todosContainer?.querySelector('li:last-child')?.classList.contains('todo__text--done')).toBe(false);
//   });

//   test('should update local storage with the given todos', () => {
//     createHtml(todos);

//     expect(localStorage.setItem).toHaveBeenCalledWith('todos', JSON.stringify(todos));
//   });
// });

// describe('displayError', () => {
//   beforeEach(() => {
//     document.body.innerHTML = `
//       <div id="error"></div>
//     `;
//   });

//   test('should display the error message in the error container when show is true', () => {
//     let errorMessage = 'Du måste ange minst tre bokstäver';

//     displayError(errorMessage, true);

//     let errorContainer = document.getElementById('error');
//     expect(errorContainer?.innerHTML).toBe(errorMessage);
//     expect(errorContainer?.classList.contains('show')).toBe(true);
//   });

//   test('should hide the error container when show is false', () => {
//     let errorMessage = 'Du måste ange minst tre bokstäver';

//     displayError(errorMessage, false);

//     let errorContainer = document.getElementById('error');
//     expect(errorContainer?.innerHTML).toBe(errorMessage);
//     expect(errorContainer?.classList.contains('show')).toBe(false);
//   });
// });
