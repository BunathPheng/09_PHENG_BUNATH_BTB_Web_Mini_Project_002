export async function loginService({ email, password }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email, password 
    }),
  });
  const data = await res.json();
  return data;
}
