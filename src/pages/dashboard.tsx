import Layout from '@/components/layout';
import { useSession } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import Account from '@/components/account';
import GoogleButton from 'react-google-button';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const session = useSession();
  const scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/tasks',
    'https://www.googleapis.com/auth/tasks.readonly',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ];
  const router = useRouter();

  return (
    <Layout>
      <main className='flex w-full flex-col items-center justify-center py-32 h-screen'>
        {!session ? (
          <div className='flex items-center px-5 xl:px-0 text-center flex-col'>
            <p className='bg-gradient-to-br mb-5 from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-6xl'>
              Please login first
            </p>
            <p className='mt-6 text-gray-500 w-[50%] text-sm lg:text-xl text-decoration-italic'>
              Calendar and Google Task permissions are compulsory for Arjun to
              be able to manage your schedule. We don&apos;t do anything with
              your calendar and only perform operations which you ask Arjun to
              perform.
            </p>
            <div className='rounded-full mb-4 text-center py-0.5 px-5 mt-5 mx-2 text-[12px] lg:text-sm ring-1 ring-blue-500'>
              For more information on how we use your data see our{' '}
              <Link className='text-blue-600 underline' href='/privacy-policy'>
                Privacy Policy
              </Link>
            </div>
            <div className='flex items-center justify-center'>
              <GoogleButton
                onClick={() =>
                  router.push(
                    `${
                      process.env.NEXT_PUBLIC_SUPABASE_URL
                    }/auth/v1/authorize?provider=google&scopes=${scopes.join(
                      ' '
                    )}&redirect_to=${location.protocol}//${
                      location.host
                    }/dashboard&prompt=consent&access_type=offline`
                  )
                }
              />
            </div>
          </div>
        ) : (
          <Account session={session} />
        )}
      </main>
    </Layout>
  );
};

export default Dashboard;
