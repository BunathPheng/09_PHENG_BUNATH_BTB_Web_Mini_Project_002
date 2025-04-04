"use server";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

export const loginAction = async (_, formData) => {
  const sessoin  = await auth()
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  if(sessoin?.payload?.token) {
    redirect("/todo")
  }
  if(!password) {
     return {
      error: "email is required"
    };
  }

  if(!email) {
    return {
      error: "Email is required"
    };
  }
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect("/todo");
   
  
};