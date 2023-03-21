import Layout from '@/components/layout';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <Layout>
      <main className='flex w-full flex-col items-center justify-center py-32 h-screen'>
        <div className='mb-6'>
          <h1
            className='bg-gradient-to-br from-blue-400 mb-4 to-green-500 bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-7xl'
          >
              Your Personal Assistant <br/> On WhatsApp
          </h1>
          <p
            className='text-center text-gray-500 mx-2 md:text-xl'
          >
              Manage your schedule from WhatsApp while chatting with Arjun.
          </p>
        </div>
          <div className='rounded-full text-center py-0.5 px-5 mt-5 mx-2 text-[12px] lg:text-sm text-red-800 ring-1 ring-red-500'>
            Arjun is currently in Alpha phase and might give wrong responses.
          </div>
          <div
            className='mx-auto mt-6 flex items-center justify-center space-x-5'
            style={{ opacity: 1, transform: 'none' }}
          >
            <Link href='/dashboard' className='button-2'>
              Get started
            </Link>
          </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
