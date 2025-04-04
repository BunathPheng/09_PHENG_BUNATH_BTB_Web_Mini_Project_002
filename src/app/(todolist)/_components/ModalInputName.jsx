"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddSquare } from "iconsax-react"
import { workspaceName } from "../../../../actions/workspace-action"
import React, { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

export function ModalInputName() {
    const [state, formAction, isPending] = useActionState(workspaceName, null);
    const [isOpen, setIsOpen] = useState(false); 

    useEffect(() => {
      if (state?.success) {
        toast.success(state.message);
        setIsOpen(false); 
      }
    }, [state]);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger onClick={() => setIsOpen(true)}>
                <AddSquare color="#808080" variant="outline" size={25} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-100">
                <DialogHeader>
                    <DialogTitle>Create new Workspace</DialogTitle>
                    <DialogDescription>
                        Can write detail work space name????
                    </DialogDescription>
                </DialogHeader>
                <form action={formAction}>
                    <div className="grid gap-4 py-4 ">
                        <Label htmlFor="name" className="text-right">
                            workspace name
                        </Label>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input id="name" className="col-span-3" name="workspaceName"/>
                        </div>
                        <DialogFooter>
                            <Button 
                                type="submit" 
                                className={"bg-blue-700 text-white"}
                                disabled={isPending} 
                            >
                                Create new
                            </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}