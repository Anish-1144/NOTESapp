import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../Redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const usedispatch = useDispatch();

    function createPaste() {
      const paste ={
        title: title,
        content:value,
        _id : pasteId || Date.now().toString(36),
        createdAt:new Date().toISOString(),
      }

      if (pasteId) 
        {
          usedispatch(updateToPastes(paste));
      } 
      else {
        usedispatch(addToPastes(paste));
      }  

        setTitle("");
        setValue("");
        searchParams({});



    }




  return (
    <div className="flex flex-col gap-4 p-4 max-w-xl mx-auto">
      <input
        className="p-2 border border-gray-300 rounded-2xl mt-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button 
      onClick={createPaste}
      className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600 transition duration-300">
        {pasteId ? 'Update' : 'Create'}
      </button>
      <div>
        <textarea
          value={value}
          placeholder="Enter your stuff"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          className="w-full p-2 mt-4 border border-gray-300 rounded-xl resize-none bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Home;
