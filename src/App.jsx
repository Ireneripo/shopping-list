import React from "react";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-8 mb-16 font-bold">
        Project 4: Shopping List
      </h1>
      <div className="bg-amber-100 max-w-xl h-80 m-auto shadow-2xl p-10 border-2 border-dashed">
        <h2 className="text-center text-3xl font-bold">Items To Buy</h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center mt-8"
        >
          <input
            className="bg-white border-2 border-b-gray-600 rounded-md p-2 m-2"
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button
            type="submit"
            className="py-2.5 px-5 m-2 bg-blue-500 text-white rounded-md shadow-sm shadow-gray-600"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
