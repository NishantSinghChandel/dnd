import { useState } from "react";
import TaskColumn from "./components/TaskColumn";
import Filter from "./components/Filter";
import Modal from "./components/Modal";
import BlockDetails from "./components/BlockDetails";
import "./App.css";
import { flowSequence } from "./utils";
import { data } from "./data/taskList";

function App() {
  const [taskList, setTaskList] = useState([...data]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [blockDetails, setBlockDetails] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [isForwardFlow, setIsForwardFlow] = useState(false);

  const handleDrop = (e, type) => {
    const blockId = e.dataTransfer.getData("id");
    const oldType = e.dataTransfer.getData("type");
    if (isForwardFlow && flowSequence[type] < flowSequence[oldType]) {
      alert("Only Forward flow is allowed. Please ask your admin");
      return;
    }
    const id = blockId;
    e.preventDefault();
    setSelectedBlock({ id, type });
    setIsModalOpen(true);
  };

  const handleFilter = (name) => {
    setFilterText(name);
  };

  const handleSave = (data) => {
    setTaskList((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === selectedBlock.id
          ? {
              ...block,
              type: selectedBlock.type,
              data: [
                ...block.data,
                {
                  type: selectedBlock.type,
                  message: data,
                  created_on: new Date(),
                },
              ],
            }
          : block
      )
    );
    setIsModalOpen(false);
  };

  const handleBlockClick = (block) => {
    setBlockDetails(block);
  };

  const closeBlockDetails = () => {
    setBlockDetails(null);
  };

  const filteredTaskList = taskList.filter((block) =>
    block?.name?.toLowerCase()?.includes(filterText?.toLowerCase())
  );

  const handleSettings = () => {
    setIsForwardFlow(!isForwardFlow);
  };

  return (
    <div className="App">
      <h1 className="font-bold text-indigo-500 text-center mt-4 text-xl">
        {" "}
        Task Dashboard
      </h1>
      <Filter onFilter={handleFilter} />
      <section className="px-3">
        <h2>Settings:</h2>
        <button
          className={`px-2 rounded-md text-xs py-1 ${
            isForwardFlow ? "bg-black text-white" : "bg-gray-200"
          }`}
          type="text"
          onClick={handleSettings}
        >
          Only Forward flow
        </button>
      </section>
      <main id="drop" className="p-1 h-[70vh] w-full flex gap-3">
        <TaskColumn
          id={1}
          name="Todo"
          type="Todo"
          handleDrop={(e, type) => handleDrop(e, type)}
          taskList={filteredTaskList}
          onBlockClick={handleBlockClick}
        />
        <TaskColumn
          id={2}
          name="In Progress"
          type="In Progress"
          handleDrop={(e, type) => handleDrop(e, type)}
          taskList={filteredTaskList}
          onBlockClick={handleBlockClick}
        />
        <TaskColumn
          id={3}
          name="Done"
          type="Done"
          handleDrop={(e, type) => handleDrop(e, type)}
          taskList={filteredTaskList}
          onBlockClick={handleBlockClick}
        />
      </main>
      {isModalOpen && (
        <Modal onSave={handleSave} onClose={() => setIsModalOpen(false)} />
      )}

      {blockDetails && (
        <BlockDetails block={blockDetails} onClose={closeBlockDetails} />
      )}
    </div>
  );
}

export default App;
