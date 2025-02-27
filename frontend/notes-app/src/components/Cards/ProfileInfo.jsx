import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center space-x-3 ml-auto">
          <div className="w-10 h-10 bg-gray-200 text-black flex items-center justify-center rounded-full text-sm font-bold">
        {getInitials("Sri Varshan")}
      </div>

      
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">Sri Varshan</p>
        <button 
          className="text-xs text-black-600 hover:text-red-800 font-medium"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
