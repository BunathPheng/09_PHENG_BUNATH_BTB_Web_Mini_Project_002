import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500">Workspace</span>
                    <span>&gt;</span>
                    <a href="#" className="text-blue-600 hover:underline">
                        HRD Design
                    </a>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="text-gray-500 hover:text-gray-700">🔔</button>
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <p className="text-gray-800 font-medium">Monster</p>
                            <p className="text-sm text-blue-600">blackmonster@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
