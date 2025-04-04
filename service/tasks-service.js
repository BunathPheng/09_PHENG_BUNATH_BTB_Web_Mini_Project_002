import { auth } from "../auth";
export const taskPost  = async ({ workspaceId , taskTitle , taskDetails , tag , endDate}) => {
  const session = await auth();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/task/workspace/${workspaceId}`, {
    method: "POST",
    headers: { 
      Accept: "*/*",   
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.payload?.token}`,
    },
    body: JSON.stringify({ 
      taskTitle : taskTitle,
      taskDetails : taskDetails,
      tag : tag,
      endDate : endDate,
     }),
  });
  return res.json();
};



//getTasks
export const getDataTasksService =  async ({workspaceId}) => {
    const session = await auth();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      next:{tags: ["workspace"]}
    });
    return res.json();
  }



//update  status
export const taskUpdate  = async ({ tasksId , workspaceId , status }) => {
  console.log(tasksId, workspaceId, status)
  const session = await auth();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/task/${tasksId}/workspace/${workspaceId}/status?status=${status}`, 
    {
    method: "PATCH",
    headers: { 
      Accept: "*/*",   
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.payload?.token}`,
    },  

  });
  return res.json();
};
