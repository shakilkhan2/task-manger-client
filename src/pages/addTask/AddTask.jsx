import React, { useState } from "react";
import { toast } from "react-hot-toast";

const AddTask = () => {
  const [loading, setLoading] = useState(true);

  const handleAddTask = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;

    const newTask = {
      title: title,
      description: description,
      category: category,
    };
    // console.log(newTask);

    fetch("https://task-management-server-gamma.vercel.app/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("A new task added.");
          window.location.href = "/";
          loading(false);
        }
      });

    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleAddTask}
        className="bg-white border rounded-lg border-amber-500 w-[50%] mx-auto py-12 my-8 shadow-2xl"
      >
        <h1 className="text-center text-3xl text-amber-500 font-bold">
          Add New Task
        </h1>
        <hr className="w-[70%] mx-auto mt-2 mb-8 border-amber-500" />

        <div className="text-center">
          <br />
          <input
            className="border border-amber-500 py-2 w-[80%] px-2 rounded-md"
            type="text"
            name="title"
            placeholder="Task Title"
            required
            id=""
          />

          <textarea
            className="border border-amber-500 py-2 w-[80%] rounded-md mt-4 px-2"
            name="description"
            id=""
            required
            placeholder="Task Description"
            cols="30"
            rows="5"
          ></textarea>
          <select
            className="mx-auto pl-2 py-3 w-[80%] my-6 border rounded-lg border-amber-500"
            name="category"
            id=""
            required
          >
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
          </select>
        </div>

        <div className="text-center">
          <button className="btn btn-outline btn-warning  font-bold">
            Add a task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
