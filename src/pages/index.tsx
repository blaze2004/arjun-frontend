import Layout from '@/components/layout';
import { useSession } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import waitlist from '@zootools/waitlist-js';
import YouTube from 'react-youtube';

const LandingPage = () => {
  const session = useSession();

  const opts = {
    height: '200',
    width: 'smallScreen' ? '400' : '600',
    playerVars: {
      autoplay: 1,
      loop: 1,
      modestbranding: 1,
    },
  };

  return (
    <Layout>
      <main className="flex w-full flex-col items-center justify-center py-32 h-screen">
        <div className='max-w-xl px-5 xl:px-0'>
          <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]" style={{ opacity: 1, transform: "none" }}>
            <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Your Personal Assistant On WhatsApp</span>
          </h1>
          <div className="mt-5 flex justify-center items-center mb-8 mt-8">
            <div className="bg-black rounded-lg max-w-max-content h-400px w-600px sm:w-400px">
              <YouTube
                title="Arjun Demo"
                videoId="MVBQqYsqjJQ"
                opts={opts}
                onReady={() => { }}
              />
            </div>
          </div>
          <p className="mt-6 text-center text-gray-500 md:text-xl" style={{ opacity: 1 }}>
            <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Manage your schedule from WhatsApp by chatting with Arjun.<br />Arjun is currently in Alpha phase and might give wrong responses.</span>
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center space-x-5" style={{ opacity: 1, transform: "none" }}>
            {!session ? (
              <button
                onClick={() => waitlist.openPopup("OUX9PACcT4P8hGW8uztt")}
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
              >
                Join the waitlist
              </button>
            ) :
              (
                <Link
                  href="/dashboard"
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                >
                  Get Started
                </Link>
              )
            }
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default LandingPage;
