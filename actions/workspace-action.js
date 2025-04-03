"use server";
import { workspaceNameService } from '../service/workspace-service';
export const workspaceName = async (_,formData) => {
  const workspaceName = formData.get("workspaceName");
   console.log(workspaceName);
   const newWorkspaceName  = await workspaceNameService({workspaceName});
   if(newWorkspaceName?.status === "CREATED") {
    return {
      success: true,
      message: newWorkspaceName?.message,
    };
};
}