import React, { Fragment, useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [task, setTask] = useState<ITask[]>([]);
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    console.log("Lista de tareas", task);
  };
  const addTask = (name: string) => {
    const newTasks: ITask[] = [...task, { name, done: false }];
    setTask(newTasks);
  };
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                />
                <button className="btn btn-primary btn-block mt-2">save</button>
              </form>
            </div>
          </div>

          {task.map((t: ITask, i: number) => {
            return <h1 key={i}>{t.name}</h1>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
