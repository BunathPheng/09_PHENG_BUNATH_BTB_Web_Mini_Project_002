import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo({title}) {
  return (
    <Alert  className="bg-emerald-300">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="">Create is sucessfully</AlertTitle>
      <AlertDescription>
        {title}
       </AlertDescription>
    </Alert>
  )
}
