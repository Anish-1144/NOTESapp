import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handedelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0"> 
     <input
        className='bg-black text-white rounded-2xl p-2 mt-5 w-96'
        type="search"
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-y-3'>
     

      <div className='flex flex-col gap-5 mt-5'>
        {filterData.length > 0 && filterData.map(
          (paste) => {
            return (
              <div className='border bg-black p-4 rounded-lg' key={paste?._id}>
                <div className="border border-[rgba(128,121,121,0.3)] w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem] text-3xl font-bold text-white"
                >{paste.title}</div>
               <div className='text-gray-100 font-light justify-start'>
                 {paste.content.split(" ").slice(0, 2).join(" ")}.......
                  </div>
                <div className="flex gap-4 mt-3 justify-end">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    <a href={`/?pasteId=${paste?._id}`}>edit</a>
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    <a href={`/pastes/${paste?._id}`}>view</a>

                  </button>
                  <button onClick={() => handedelete(paste?._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                    delete
                  </button>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                    share
                  </button>
                  <button onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to Clipboard");
                  }} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-300">
                    copy
                  </button>
                </div>
                <div className="text-gray-600 mt-2">
                  {paste.createdAt}
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
      </div>
  )
}

export default Paste;
