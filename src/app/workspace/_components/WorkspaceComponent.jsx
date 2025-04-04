import { UpdateCard } from '@/app/(todolist)/_components/UpdateCard'
import Link from 'next/link'
import React from 'react'

export default function WorkspaceComponent({ data }) {
  return (
    <>
      {
        data.map((item) => (
          <div key={item?.workspaceId} className="relative w-full">
            <Link
              href={`/todo/${item?.workspaceId}`}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 "
            >
              <div className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full" />
                <span>{item?.workspaceName}</span>
              </div>
            </Link>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <UpdateCard workspaceId={item?.workspaceId} />
            </div>
          </div>
        ))
      }
    </>

  )
}
