import { makeAutoObservable } from "mobx";

class Store {
  todos = [
    { id: 0, task: "Learn Css", complete: false },
    { id: 1, task: "Learn Js", complete: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  changeState(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
  }

  get notCompletelyToDoCount() {
    return this.todos.filter((todo) => !todo.complete).length;
  }

  get countAllToDo() {
    return this.todos.length;
  }
}

export default new Store();
