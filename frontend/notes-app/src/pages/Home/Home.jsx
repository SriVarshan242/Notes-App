import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-6">
          <NoteCard 
            title="Meeting on 7th April" 
            date="3rd Apr 2024" 
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button 
        className="bg-blue-500 w-14 h-14 flex justify-center items-center rounded-full hover:bg-blue-600 transition duration-300 shadow-md fixed bottom-6 right-6"
        onClick={() => {
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          });
        }}
      >
        <MdAdd className="text-white text-3xl" />
      </button>

      <Modal 
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Add or Edit Notes"
        className="w-full sm:w-[40%] bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes 
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={()=>{
          setOpenAddEditModal({isShown: false,
            type: "add",
            data: null,})
        }}/>
      </Modal>
    </>
  );
};

export default Home;
