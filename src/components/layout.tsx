import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

interface ComponentProps {
    children: React.ReactNode;
}

const Layout: React.FC<ComponentProps>=({ children }) => {
    const session=useSession();
    const supabase=useSupabaseClient();
    const router=useRouter();
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-cyan-100 relative">
            <Head>
                <title>Arjun | WhatsApp Assistant</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100'></div>

            <div className='absolute w-full h-screen bg-transparent'>
                <div className="fixed top-0 w-full bg-white/0 z-30 transition-all">
                    <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                        <Link className="flex items-center font-display text-2xl" href="/">
                            {/* <img alt="Arjun logo" src="/logo.svg" decoding="async" className="mr-2 rounded-sm" loading="lazy" style={{ color: 'transparent' }} /> */}
                            <p>Arjun</p>
                        </Link>
                        <div>
                            <button onClick={() => (!session? router.push("/dashboard"):supabase.auth.signOut())} className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black" style={{ opacity: 1 }}>{!session? "Sign In":"Logout"}</button>
                        </div>
                    </div>
                </div>

                {children}

                <div className="w-full border-t border-gray-200 bg-white py-5 text-center self-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                        <div className="text-center sm:text-left">
                            <p className="text-sm">
                                &copy; 2023 Arjun. All rights reserved.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-800 hover:text-gray-300 ml-4"
                            >
                                Privacy Policy
                            </Link>
                            <a
                                href="mailto:shubhamtiwari06112004+arjun@gmail.com"
                                className="text-gray-800 hover:text-gray-300 ml-4"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
