import { BellDot } from 'lucide-react'
import React from 'react'

export default  function Profile({ email , profile , userName }) {
    return (
        <div className="flex items-center space-x-3">
            <BellDot />
            <div className="flex items-center space-x-2">
                <img
                    src={profile}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="text-gray-800 font-medium">{userName}</p>
                    <p className="text-sm text-blue-600">{email}</p>
                </div>
            </div>
        </div>
    )
}
