import React from "react";
import MyTask from "./pages/mytask/MyTask";

const App = () => {
  return (
    <div>
      <p className="text-amber-700 font-bold text-5xl text-center">
        Welcome to Task Manager
      </p>
      <div className="text-center mt-8">
        <button className="btn btn-outline btn-warning text-black font-bold">
          Add a task
        </button>
      </div>
      <MyTask />
      {
        <p className="text-center mt-40 text-slate-400 font-bold">
          Currently there is no task
        </p>
      }
    </div>
  );
};

export default App;
