import TaskCard from "./TaskCard";
function TaskColumn({ name, type, taskList, handleDrop, onBlockClick }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const filteredTask = taskList.filter((data) => data.type === type);
  return (
    <section
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, type)}
      className="border-[2px] rounded-md w-full  p-2 my-3"
    >
      <h2 className="font-bold text-gray-500 text-md  uppercase text-left flex justify-between items-center">
        <span>{name}</span>
        <span>{filteredTask.length}</span>
      </h2>
      {filteredTask.map((data, index) => (
        <TaskCard
          key={data.id + index}
          data={data}
          onBlockClick={onBlockClick}
        />
      ))}
    </section>
  );
}

export default TaskColumn;
