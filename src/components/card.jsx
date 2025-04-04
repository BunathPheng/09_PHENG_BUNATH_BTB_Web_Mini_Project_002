"use client";

import { useActionState } from "react";
import { Clock, Ellipsis } from "lucide-react";
import { taskUpdatAction } from "../../actions/tasks-action";

export default function CardComponent({
  workspaceId,
  tasksId,
  taskTitle,
  taskDetails,
  tag,
  endDate,
  status,
}) {
  const [state, formAction, isPending] = useActionState(
    taskUpdatAction.bind(null, workspaceId, tasksId),
    null
  );

  const isoDate = endDate;
  const date = new Date(isoDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  // Map status to colors based on the image
  const statusColors = {
    NOT_STARTED: "text-watermelon-red", 
    IN_PROGRESS: "text-blue-500", 
    FINISHED: "text-green-500", 
  };

  // Map status to background colors for the dot indicator
  const dotColors = {
    NOT_STARTED: "bg-red-100", 
    IN_PROGRESS: "bg-blue-50", 
    FINISHED: "bg-green-100", 
  };

  // Map status to display text
  const statusText = {
    NOT_STARTED: "Not Started",
    IN_PROGRESS: "In Progress",
    FINISHED: "Finished",
  };

  return (
    <div className="border border-gray-300 rounded-xl mt-8">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{taskTitle}</h2>
          <Ellipsis />
        </div>
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {taskDetails}
        </p>
        <div className="flex justify-between items-center mt-4">
          <p
            className={`${dotColors[status]} p ${statusColors[status]} py-1.5 px-3 rounded-lg`}
          >
            {tag}
          </p>
          <div
            className={`rounded-full w-8 h-8 ${dotColors[status]}`}
            title={statusText[status]}
          ></div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <form action={formAction} className="flex items-center gap-2">
          <div
            className={`rounded-full w-4 h-4 ${dotColors[status]}`}
            title={statusText[status]}
          ></div>
          <select
            name="status"
            className={`p-2 rounded-md ${statusColors[status]} bg-transparent border-gray-300`}
            defaultValue={status}
            onChange={(e) => e.target.form.requestSubmit()}
            disabled={isPending}
          >
            <option value="NOT_STARTED">NOT STARTED</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="FINISHED">FINISHED</option>
          </select>
        </form>
        <p className="flex gap-3 text-light-steel-blue">
          <Clock size={22} /> {formattedDate}
        </p>
      </div>
    </div>
  );
}