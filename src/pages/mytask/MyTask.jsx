import React, { useEffect, useState } from "react";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {tasks.map((task) => (
            <tbody key={task.id}>
              <tr>
                <th>{task.id}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>done</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyTask;
