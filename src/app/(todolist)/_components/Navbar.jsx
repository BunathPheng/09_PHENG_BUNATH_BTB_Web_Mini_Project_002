
import React from 'react'
import Profile from './Profile'
import { getUser } from '../../../../service/login-service'
export default async function NavbarBar() {
    const  profile = await getUser();
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
                <Profile profile={profile?.payload?.profile} userName={profile?.payload?.username} email={profile?.payload?.email}/>  
            </div>
        </>
    )
}
