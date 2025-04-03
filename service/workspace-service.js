import { auth } from "../auth";

export async function workspaceNameService({workspaceName}) {
    const session = await auth();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/workspace`, {
      method: "POST",
      headers: { 
        Accept: "*/*",   
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.payload?.token}`,
      },
      body: JSON.stringify({
        workspaceName : workspaceName, 
     }),
    });
    const data = await res.json();
    return data;
  }