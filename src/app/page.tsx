import { redirect } from "next/navigation";


export default function Home() {

  const isAuthenticated = false;

  if (isAuthenticated) {
    redirect('/dashboard');
  } else {
    redirect('/auth/login');
  }
  
  return (
    <div>
      <h1>Home</h1>
     
     
    </div>
  );
}
