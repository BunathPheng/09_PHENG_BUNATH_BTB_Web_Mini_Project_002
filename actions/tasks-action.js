"use server";

import { revalidateTag } from "next/cache";
import { taskPost, taskUpdate } from "../service/tasks-service";

export const tasksAction = async (workspaceId , _ ,formData) => {
  const  taskTitle = formData.get("taskTitle");
  const  taskDetails = formData.get("taskDetails");
  const tag = formData.get("tagName");
  const endDate = formData.get("endDate");
  console.log("formData" , formData)
   const newWorkspaceName  = await taskPost({workspaceId , taskTitle ,taskDetails ,tag ,endDate});
   console.log("formData" ,newWorkspaceName)
   revalidateTag("workspace")   
   if(newWorkspaceName?.status === "CREATED") {
    return {
      success: true,
      message: newWorkspaceName?.message,
    };
};
}

//
export const  taskUpdatAction  = async (workspaceId , tasksId, _  ,formData) => {
  const status = formData.get("status");
  const newWorkspaceName  = await taskUpdate({workspaceId , tasksId , status});
  console.log("formData" ,newWorkspaceName)
   revalidateTag("workspace")   
   if(newWorkspaceName?.status === "CREATED") {
    return {
      success: true,
      message: newWorkspaceName?.message,
    };
  }
}

