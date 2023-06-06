import { ReactNode, FC, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';

interface ComponentProps {
    children: ReactNode;
}

const Layout: FC<ComponentProps>=({ children }) => {
    const session=useSession();
    const supabase=useSupabaseClient();
    const router=useRouter();

    const [isScrolled, setIsScrolled]=useState(false);

    useEffect(() => {
        const handleScroll=() => {
            const scrollTop=window.scrollY;
            if (scrollTop>0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-cyan-100 relative">
            <Head>
                <title>Arjun | WhatsApp Assistant</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Experience the power of ChatGPT on WhatsApp for intelligent conversation and effortless schedule management. Chat with our AI-powered assistant to organize your tasks, appointments, and more."></meta>
                <meta property="og:title" content="Arjun - ChatGPT WhatsApp Bot" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:url" content="https://arjun.visualbrahma.tech" />
                <meta property="og:description" content="Experience the power of ChatGPT on WhatsApp for intelligent conversation and effortless schedule management. Chat with our AI-powered assistant to organize your tasks, appointments, and more." />
                <meta name="theme-color" content="#6B13FA" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <link rel="canonical" href="https://arjun.visualbrahma.tech" />
            </Head>

            <div className='fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100'></div>

            <div className='absolute w-full h-full bg-transparent min-h-screen'>
                <div className={`fixed top-0 w-full ${isScrolled? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl':'bg-white/0'} z-30 transition-all`}>
                    <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                        <Link className="flex items-center font-display text-2xl" href="/">
                            <Image alt="Arjun logo" src="/logo.png" className="mr-2 rounded-sm" height={30} width={30} loading="lazy" style={{ color: 'transparent' }} />
                            <p>Arjun</p>
                        </Link>
                        <div>
                            <button onClick={() => (!session? router.push("/dashboard"):supabase.auth.signOut())} className='button-1' style={{ opacity: 1 }}>{!session? "Sign In":"Logout"}</button>
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
                                className="text-gray-800 hover:text-gray-500 ml-4"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/changelog"
                                className="text-gray-800 hover:text-gray-500 ml-4"
                            >
                                Changelog
                            </Link>
                            <a
                                href="mailto:shubham@visualbrahma.tech"
                                className="text-gray-800 hover:text-gray-500 ml-4"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start">
                        <p className="text-sm">
                            Design inspired from
                        </p>
                        <Link
                            href="https://precedent.dev"
                            className="text-blue-800 hover:text-blue-500 ml-1"
                        >
                            precedent.dev
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
