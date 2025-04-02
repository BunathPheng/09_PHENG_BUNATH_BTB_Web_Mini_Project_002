
    export async function registerHandle({ userName , email, password }) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
          method: "POST",
          headers: {    
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username : userName, 
            email : email,
            password :password }),
        });
        const data = await res.json();
        return data;
      }
      
  
  