"use server";
import { revalidateTag } from 'next/cache';
import { workspaceGet , workspaceNameService, workspaceUpdate } from '../service/workspace-service';
export const workspaceName = async (_,formData) => {
  const workspaceName = formData.get("workspaceName");
   const newWorkspaceName  = await workspaceNameService({workspaceName});
   revalidateTag("workspace")
   if(newWorkspaceName?.status === "CREATED") {
    return {
      success: true,
      message: newWorkspaceName?.message,
    };
};
}

export const workspaceDataUpdate = async (workspaceId, _ ,formData) => {
  const workspaceName = formData.get("workspaceName");
  console.log("formData" , formData)
  console.log("workspaceId" , workspaceId)
   const newWorkspaceName  = await workspaceUpdate({workspaceId, workspaceName});
   revalidateTag("workspace");
   if(newWorkspaceName?.status === "OK") {
    return {
      success: true,
      message: newWorkspaceName?.message,
    };
};

}