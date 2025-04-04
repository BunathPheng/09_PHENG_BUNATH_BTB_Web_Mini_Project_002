import { auth } from "../auth";

export const workspaceNameService = async ({ workspaceName }) => {
  const session = await auth();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/workspace`, {
    method: "POST",
    headers: { 
      Accept: "*/*",   
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.payload?.token}`,
    },
    body: JSON.stringify({ workspaceName }),
  });
  return res.json();
};

// get workspace
export const workspaceGet =  async () => {
  const session = await auth();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`, {
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
 

//update workspace
export const workspaceUpdate = async ({ workspaceId , workspaceName }) => {
  console.log(workspaceId)
  console.log(workspaceName)
  const session = await auth();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/workspace/${workspaceId}`, {
    method: "PUT",  
    headers: { 
      Accept: "*/*",   
      "Content-Type": "application/json",
       Authorization: `Bearer ${session?.payload?.token}`,
    },
    body: JSON.stringify({ 
      workspaceName : workspaceName
    }),
  });
  return res.json();
};



export const workspaceGetById =  async ({workspaceId}) => {
  const session = await auth();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/workspace/${workspaceId}`, {
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