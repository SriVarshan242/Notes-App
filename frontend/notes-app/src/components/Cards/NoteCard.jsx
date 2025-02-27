import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border w-[300px] transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h6 className="text-lg font-semibold">{title}</h6>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <MdOutlinePushPin 
          className={`text-xl cursor-pointer ${isPinned ? "text-blue-500" : "text-gray-400"}`} 
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="text-gray-800 mt-2">{content?.slice(0, 100)}</p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-blue-500 font-medium">{tags}</span>
        <div className="flex gap-3">
          <MdCreate className="cursor-pointer text-gray-400 hover:text-blue-500" onClick={onEdit} />
          <MdDelete className="cursor-pointer text-gray-400 hover:text-red-500" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
