import { options } from "../utils";

const BlockDetails = ({ block, onClose }) => {
  return (
    <div className="block-details bg-gray-100 p-5">
      <h2 className="font-bold text-lg text-indigo-500"> History </h2>

      <section className="mt-5 rounded-sm py-2 px-3 shadow-sm bg-white border-[1px] border-gray-200">
        <h2 className="font-bold text-md mb-2">Title: {block.name}</h2>
        {block?.data?.length > 0 &&
          block.data.map(({ message, created_on, type }, index) => (
            <div className="border-b-[1px] py-1">
              <p key={index} className="text-gray-700 text-sm">
                <span className="text-black">Type:</span> {type}
              </p>
              <p key={index} className="text-gray-700 text-sm">
                <span className="text-black">Reason:</span> {message}
              </p>
              <p className="text-xs text-gray-500">
                {" "}
                {created_on.toLocaleDateString("en-US", options)}
              </p>
            </div>
          ))}
        <button
          className="mt-5 bg-blue-800 hover:bg-blue-900 rounded-md text-white px-5 py-1"
          onClick={onClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default BlockDetails;
