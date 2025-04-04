
import CardComponent from '@/components/card'
import React from 'react'
import { getDataTasksService } from '../../../../../service/tasks-service';
import { workspaceGetById } from '../../../../../service/workspace-service';
import NavbarBar from '../../_components/Navbar';

export default async function page({params}) {
  const workspaceId = (await params).Id;
  const getDataTasks = await getDataTasksService({workspaceId});
  const  workspaceData = await workspaceGetById({workspaceId});
console.log(getDataTasks)
   
  // Filter tasks by status
  const notStarted = getDataTasks?.payload?.filter(task => task.status === 'NOT_STARTED');
  const inProgress = getDataTasks?.payload?.filter(task => task.status === 'IN_PROGRESS');
  const finished = getDataTasks?.payload?.filter(task => task.status === 'FINISHED');

  return (
    <>
      <NavbarBar workspaceName={workspaceData?.payload?.workspaceName}/>
      <h1 className='font-bold mt-6'>{workspaceData?.payload?.workspaceName}</h1>
      <main className='grid grid-cols-3 gap-4 h-screen overflow-auto no-scrollbar'>
        <div className="flex flex-col overflow-auto no-scrollbar"> 
          <h1 className='mt-4'>Not Started</h1>
          {notStarted?.map((task) => (
            <CardComponent
              key={task?.taskId}
              workspaceId={workspaceId}
              tasksId={task?.taskId}
              taskTitle={task?.taskTitle} 
              taskDetails={task?.taskDetails}
              status={task?.status}
              tag={task?.tag}
              endDate={task?.endDate} 
            />
          ))}
        </div>
        
        <div className="flex flex-col overflow-auto no-scrollbar"> 
          <h1 className='text-purple-400 mt-4'>In Progress</h1>
          {inProgress?.map((task) => (
            <CardComponent
            key={task?.taskId}
            workspaceId={workspaceId}
            tasksId={task?.taskId}
            taskTitle={task?.taskTitle} 
            taskDetails={task?.taskDetails}
            status={task?.status}
            tag={task?.tag}
            endDate={task?.endDate} 
            />
          ))}
        </div>
        
        <div className="flex flex-col overflow-auto no-scrollbar"> 
          <h1 className='text-green-400 mt-4'>Finished</h1>
          {finished?.map((task) => (
            <CardComponent
            key={task?.taskId}
            workspaceId={workspaceId}
            tasksId={task?.taskId}
            taskTitle={task?.taskTitle} 
            taskDetails={task?.taskDetails}
            status={task?.status}
            tag={task?.tag}
            endDate={task?.endDate} 
            />
          ))}
        </div>
      </main>
    </>
  )
}
