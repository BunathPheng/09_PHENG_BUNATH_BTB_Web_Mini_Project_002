
import { Add } from 'iconsax-react';
import React from 'react'

export default function NewTaskButton() {
    return (
        <div className="fixed gap-4 mt-4 bottom-0 right-10 flex">
          {/* New Task Button */}
          <div  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
            <Add color="#FFFFFF" variant="outline" size={25}/>
            <span className="font-medium">New Task</span>
          </div>
          {/* Floating Action Button */}
          <div className="relative">  
            <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-200 hover:shadow-xl transition">
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 left-1"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full absolute bottom-1 left-1"></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full absolute bottom-1 right-1"></div>
            </div>
          </div>
        </div>
      );
}
