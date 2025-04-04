import { auth } from "../auth";

export const loginService = async ({ email, password }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};

export const getUser = async () => {
    const session = await auth();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user`, {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.payload?.token}`,
        },
      });
      return res.json();
}
