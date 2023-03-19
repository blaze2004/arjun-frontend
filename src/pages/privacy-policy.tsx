import Layout from "@/components/layout";

const PrivacyPolicy=() => {
    return (
        <Layout>
            <main className="flex w-full flex-col items-center justify-center px-5 py-32">
                <div className='max-w-xl px-5 xl:px-0'>
                    <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]" style={{ opacity: 1, transform: "none" }}>
                        <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Privacy Policy</span>
                    </h1>
                    <p className="mt-6 text-gray-500 text-justify" style={{ opacity: 1 }}>
                        <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>
                            Arjun is a bot designed to help you manage your schedule and tasks. 
                            In order to perform these functions, the bot requires access to your Google Calendar and Tasks. 
                            Please note that we don&apos;t do anything with your calendar and only perform operations which you ask Arjun to perform, such as creating or modifying events and tasks. <br /><br />
                            Arjun is designed to keep all of your conversations private. Your latest(very recent) chat with the bot will be stored on the server so that Arjun can remember the conversation history.
                            Please note that no data from your google account is stored on our servers other than tasks or events details included in conversation history, which stores only latest chat.
                            However, please note that this data is completely private and confidential.
                            You can request to delete this data at any time. We don&apos;t do anything with your data other than to store it for conversation history purposes. <br /><br />
                            We take the security of your data very seriously and have implemented appropriate technical and organizational measures to protect your personal information.
                            However, we cannot guarantee the security of your data when transmitted over the internet or when stored on servers not controlled by us.
                            By using Arjun, you consent to the terms and conditions of this Privacy Policy.
                            We reserve the right to modify this Privacy Policy at any time, so please review it frequently.
                            If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:shubham@visualbrahma.tech">shubham@visualbrahma.tech</a>.
                        </span>
                    </p>
                </div>
            </main>
        </Layout>
    );
}

export default PrivacyPolicy;
