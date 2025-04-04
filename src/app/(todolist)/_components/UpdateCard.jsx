"use client"; // Ensure it's a Client Component
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { More } from "iconsax-react";
import { useActionState, useEffect, useState } from "react";
import { workspaceUpdate } from "../../../../service/workspace-service";
import { workspaceDataUpdate } from "../../../../actions/workspace-action";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export function UpdateCard({ workspaceId }) {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(null);
  const handleClick = () => {
    setSelectedWorkspaceId(workspaceId);
  };
  const [state, formAction, isPending] = useActionState(workspaceDataUpdate.bind(this, selectedWorkspaceId), null);
  useEffect(() => {
    if (state?.success) { 
      toast.success(state.message);
    }
  }, [state]);  
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div onClick={handleClick}>
          <More color="#808080" variant="outline" size={25} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-gray-100">
        <AlertDialogHeader>
          <AlertDialogTitle>Update Workspace Name</AlertDialogTitle>
          <form action={formAction}>
            <Input
              type="text"
              placeholder="Workspace Name"
              name="workspaceName"
            />
            <div className="mt-4 flex gap-3">
              <AlertDialogCancel className="bg-red-600 text-white">
                Cancel
              </AlertDialogCancel>
              <Button className="bg-blue-600 text-white" type="submit">
                Continue
              </Button>
            </div>
          </form>
        </AlertDialogHeader>

      </AlertDialogContent>
    </AlertDialog>
  );
}
