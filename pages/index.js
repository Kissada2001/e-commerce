import { useEffect, useState } from 'react';
import { getServerSession } from '../app/api/auth/[...nextauth]/route';
import LoginForm from '@/components/login/LoginForm';
import { redirect } from 'next/router';
import { useRouter } from 'next/router';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function checkSession() {
      try {
        const session = await getServerSession(authOptions);
        console.log('session', session)
        if (session) {
          router.replace("/dashboard");
          console.log('session', session)
        } else {
          router.replace("/");
        }
      } catch (error) {
        console.error("Error checking session:", error);
        // Handle error
      } finally {
        setLoading(false);
      }
    }
    
    checkSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}
