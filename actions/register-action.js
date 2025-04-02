"use server";
import { registerHandle } from '../service/register-service';

export const registerAction = async (formData) => {
  const userName = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(userName , email, password);
   const user = await registerHandle({userName, email, password});
   console.log(user);
  // redirect("/");
};
