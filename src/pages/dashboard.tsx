import Layout from '@/components/layout';
import { FaWhatsapp } from 'react-icons/fa';
import { Auth } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const Dashboard=() => {
    const arjunWhatsAppNumber=process.env.NEXT_PUBLIC_ARJUN_WHATSAPP_NUMBER;
    const session=useSession();
    const supabase=useSupabaseClient();
    return (
        <Layout>
            <main className="flex w-full flex-col items-center justify-center py-32 h-screen">
                {!session? (
                    <div className="max-w-xl px-5 xl:px-0 flex-col">
                        <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]" style={{ opacity: 1, transform: "none" }}>
                            <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Login</span>
                        </h1>
                        <p className="mt-6 text-gray-500 text-decoration-italic" style={{ opacity: 1 }}>
                            <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Calendar and Google Task permissions are compulsory for Arjun to be able to manage your schedule. We don't do anything with your calendar and only perform operations which you ask Arjun to perform.</span>
                        </p>
                        <div className="flex items-center justify-center">
                            <div className="border border-gray-200 bg-white text-black hover:bg-gray-50 flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none max-w-fit p-2 mt-5">
                                <Auth supabaseClient={supabase} onlyThirdPartyProviders={true} providers={["google"]} appearance={{ style: { button: { border: 'none' } } }} />
                            </div>
                        </div>
                    </div>
                ):
                    (
                        <div className='max-w-xl px-5 xl:px-0'>
                            <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]" style={{ opacity: 1, transform: "none" }}>
                                <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Hi, {"User Name"}</span>
                            </h1>
                            <p className="mt-6 text-center text-gray-500 md:text-xl" style={{ opacity: 1 }}>
                                <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Manage your schedule from WhatsApp by chatting with Arjun.</span>
                            </p>
                            <div className="m-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="numberInput">
                                    Your phone number
                                </label>
                                <div className="flex items-center gap-5">
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="numberInput"
                                        type="number"
                                        placeholder="Your WhatsApp number to chat with Arjun."
                                    />
                                    <button className="rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black hover:text-white self-center">Save</button>
                                </div>
                            </div>

                            <div className="mx-auto mt-6 flex items-center justify-center space-x-5" style={{ opacity: 1, transform: "none" }}>
                                <a
                                    href={`https://wa.me/+91${arjunWhatsAppNumber}?text=Hi+Arjun`}
                                    className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black flex"
                                >
                                    <FaWhatsapp className="mr-2" size={20} />  Chat with Arjun
                                </a>
                            </div>
                        </div>
                    )
                }
            </main>
        </Layout>
    );
};

export default Dashboard;