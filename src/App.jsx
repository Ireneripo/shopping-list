import React from "react";

function App() {
  const [itemList, setItemList] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: crypto.randomUUID(),
      text: event.target.item.value.trim()
    }
    const newItemList = [...itemList, newItem];

    setItemList(newItemList);

    event.target.reset();
  }

  function handleRemoveItem(itemToRemove) {
    const newItemList = itemList.filter(item => item.id !== itemToRemove);

    setItemList(newItemList);
  }

  return (
    <>
      <h1 className="text-center text-4xl mt-8 mb-16 font-bold">
        Project 4: Shopping List
      </h1>
      <div className="bg-amber-100 max-w-xl m-auto shadow-2xl p-10 border-2 border-dashed">
        <h2 className="text-center text-3xl font-bold">Items To Buy</h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center my-8"
        >
          <label htmlFor="item-input"></label>
          <input
              id="item-input"
              className="bg-white border-2 border-b-gray-600 rounded-md p-2 m-2"
              type="text"
              name="item"
              placeholder="Add a new item"
              required
          />

          <button
            type="submit"
            className="py-2.5 px-5 m-2 bg-blue-500 text-white rounded-md shadow-sm shadow-gray-600 cursor-pointer"
          >
            Add
          </button>
        </form>
        {<ul className="space-y-3">
          {itemList.map((item) => (
              <li
                  key={item.id}
                  className="flex justify-between max-w-72 mx-auto"
              >
                <span>{item.text}</span>
                <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 font-extrabold text-lg cursor-pointer"
                >
                  X
                </button>
              </li>
          ))}
        </ul>}
      </div>
    </>
  );
}

export default App;
