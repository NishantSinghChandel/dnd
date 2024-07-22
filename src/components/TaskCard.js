import { priorityColor } from "../utils";

function TaskCard({
  data: { id, name, description, type, priority, data },
  onBlockClick,
}) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("type", type);
    e.dataTransfer.setData("currentBlock", { type, name });
    //     e.preventDefault();
  };

  return (
    <article
      id={id}
      className={`relative p-5 py-1 my-4 cursor-pointer border-[1px] text-left border-indigo-200 rounded-md shadow-sm my-2 bg-gray-200 hover:shadow-md `}
      draggable="true"
      onDragStart={handleDragStart}
      onClick={() =>
        onBlockClick({ id, name, description, priority, type, data })
      }
    >
      <span className="bg-gray-100 text-xs rounded-full px-2 font-bold border-[1px] border-gray-300 absolute -top-3 right-5 text-gray-500">
        ID: {id}{" "}
      </span>
      <p className="text-indigo-600 text-lg mb-2 font-bold">{name} </p>
      <p className="text-xs text-gray-800">{description} </p>
      <button
        style={{ background: priorityColor[priority] }}
        className="mt-5 text-white font-bold rounded-full text-xs py-1 px-3 border-0 m-1"
      >
        {priority}
      </button>
    </article>
  );
}

export default TaskCard;
