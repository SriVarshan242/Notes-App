import React, { useState } from 'react';
import ProfileInfo from '../Cards/ProfileInfo';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const navigate =useNavigate
  const onLogout =() =>{
    navigate("/login");
  };
  const handleSearch=()=>{

  };
  const onClearsearch=()=>{
    setSearchQuery("");
  }
  return (
    <div className="bg-blue-600 text-white p-4 flex items-center">
      <h2 class="text-2xl font-bold text-gray-900">Notes</h2>
        <SearchBar 
        value={searchQuery}
        onChange={({target})=> {setSearchQuery(target.value);}}
        handleSearch={handleSearch}
        onClearsearch={onClearsearch}
  />
        <ProfileInfo onLogout={onLogout}/>
    </div>
  );
}

export default NavBar;
