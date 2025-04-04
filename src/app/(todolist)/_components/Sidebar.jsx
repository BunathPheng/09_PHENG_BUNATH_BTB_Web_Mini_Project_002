import React from 'react'
import { ModalInputName } from './ModalInputName'
import { workspaceGet } from '../../../../service/workspace-service'
import WorkspaceComponent from '@/app/workspace/_components/WorkspaceComponent';

export default async function Sidebar() {
  const workspaces = await workspaceGet();
  return (
    <>
      <aside className="flex sticky no-scrollbar top-0  flex-col w-66 h-screen px-5 overflow-hidden  bg-gray-50   rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-800 dark:text-white">
                Workspace
              </h2>
              <ModalInputName/>
            </div>
            <nav className="mt-4 -mx-3 space-y-3 h-60 overflow-auto no-scrollbar">
             <WorkspaceComponent data={workspaces?.payload}/>
            </nav>
          </div>
        </div>
      </aside>

    </>
  )
}
