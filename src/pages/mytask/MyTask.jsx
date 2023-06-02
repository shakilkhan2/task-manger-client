import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);
  

  useEffect(() => {
    fetch("https://task-management-server-gamma.vercel.app/task")
    
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (_id) => {
    
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      fetch(`https://task-management-server-gamma.vercel.app/task/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Task Deleted.");
          }
          const restTask = tasks.filter((task) => task._id !== _id);
          setTasks(restTask);
        });
    }
  };

  const handleUpdate = (_id) => {
    
    fetch(`https://task-management-server-gamma.vercel.app/task/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Complete" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const updatedTasks = tasks.map((task) => {
            if (task._id === _id) {
              return { ...task, status: "Complete" };
            }
            return task;
          });
          setTasks(updatedTasks);
        }
      })
      .catch((error) => {
        console.error("Error updating task status:", error);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {tasks.length > 0 ? (
          <table className="table">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {tasks.map((task) => (
              <tbody key={task.id}>
                <tr>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.category}</td>
                  <td>
                    {task.status === "Complete" ? (
                      <span className="font-bold text-green-700">
                        Completed
                      </span>
                    ) : (
                      <button onClick={() => handleUpdate(task._id)}>
                        Mark as complete
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <p className="text-center mt-40 text-slate-400 font-bold">
            Currently there are no tasks
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTask;
