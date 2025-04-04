"use client"
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NewTaskButton from "./NewTaskButton";
import { tasksAction } from "../../../actions/tasks-action";
import { useActionState, useEffect } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export function AddTaskComponent() {
  const workspaceId  = useParams().Id;
    const [state, formAction, isPending] = useActionState(tasksAction.bind(this, workspaceId), null);
    useEffect(() => {
      if (state?.success) { 
        toast.success(state.message);
      }
    }, [state]); 
  return (
    <Dialog>
      <DialogTrigger>
        <NewTaskButton />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-50">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskTitle" className="text-right">
                Title
              </Label>
              <Input
                id="taskTitle"
                name="taskTitle"
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tagName" className="text-right">
                Tag
              </Label>
              <Select name="tagName">
                <SelectTrigger className="w-[280px] col-span-3">
                  <SelectValue placeholder="Select a tag" />
                </SelectTrigger>
                <SelectContent className="bg-gray-50">
                  <SelectGroup>
                    <SelectLabel>Tag Select</SelectLabel>
                    <SelectItem value="DESIGN">DESIGN</SelectItem>
                    <SelectItem value="HOMEWORK">HOMEWORK</SelectItem>
                    <SelectItem value="ASSIGNMENT">ASSIGNMENT</SelectItem>
                    <SelectItem value="DEPLOYMENT">DEPLOYMENT</SelectItem>
                    <SelectItem value="GIT">GIT</SelectItem>
                    <SelectItem value="DATABASE">DATABASE</SelectItem>
                    <SelectItem value="MINI_PROJECT">MINI PROJECT</SelectItem>
                    <SelectItem value="DOCUMENTATION">DOCUMENTATION</SelectItem>
                    <SelectItem value="FEATURE">FEATURE</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="endDate" className="text-right">
                End Date
              </Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskDetails" className="text-right">
                Details
              </Label>
              <Input
                id="taskDetails"
                name="taskDetails"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-blue-600 text-white">
              {
                isPending
                 ? "Loading..."
                  : "Create Task"
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}