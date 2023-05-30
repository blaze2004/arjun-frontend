import Layout from '@/components/layout';
import { useSession } from '@supabase/auth-helpers-react';
import Link from 'next/link';
// import waitlist from '@zootools/waitlist-js';

const LandingPage = () => {
  const session = useSession();

  return (
    <Layout>
      <main className='flex w-full flex-col items-center justify-center py-32 min-h-screen'>
        <div className='mb-6 mt-6'>
          <h1
            className='bg-gradient-to-br from-blue-400 mb-4 to-green-500 bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-7xl'
          >
              Your Personal Assistant <br/> On WhatsApp
          </h1>
          <div className="mt-5 flex justify-center items-center mb-8 mt-8">
            <div className="bg-black rounded-lg max-w-max-content h-200 max-w-xl p-1 sm:w-3/4">
              <iframe width="100%" height="300" src="https://www.youtube.com/embed/0Lc6zvPIId4" title="Arjun - The AI Powered WhatsApp Bot for Easy Schedule Management | Learn How to Use" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <p
            className='text-center text-gray-500 mx-2 md:text-xl max-w-screen-md'
          >
              Manage your schedule from WhatsApp while chatting with Arjun and experience the power of ChatGPT on WhatsApp.
          </p>
        </div>
          <div className='rounded-full text-center py-0.5 px-5 mt-5 mx-2 text-[12px] lg:text-sm text-red-800 ring-1 ring-red-500'>
            Arjun is currently in Alpha phase and might give wrong responses.
          </div>
          <div
            className='mx-auto mt-6 flex items-center justify-center space-x-5'
            style={{ opacity: 1, transform: 'none' }}
          >
            {/* {!session ? (
              <button
                onClick={() => waitlist.openPopup("OUX9PACcT4P8hGW8uztt")}
                className="button-2"
              >
                Join the waitlist
              </button>
            ) :
              ( */}
                <Link
                  href="/dashboard"
                  className="button-2"
                >
                  Get Started
                </Link>
              {/* )
            } */}
          </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
