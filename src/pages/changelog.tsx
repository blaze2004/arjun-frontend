import Layout from "@/components/layout";
import { Updates } from "@/types";

const Changelog = () => {

    const updates: Updates[] = [
        {
            date: "5 March 2023",
            content: [
                "Built first early version of Arjun.",
                ""
            ]
        }
    ]

    return (
        <Layout>
            <main className="flex w-full flex-col items-center justify-center px-5 py-32">
                <div className='max-w-xl px-5 xl:px-0'>
                    <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold  text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]" style={{ opacity: 1, transform: "none" }}>
                        <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>Changelog</span>
                    </h1>
                    {
                        updates.map((update, key) => {
                            return (
                                <div key={key}>
                                    <h3 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-1xl font-bold  text-transparent drop-shadow-sm md:text-2xl md:leading-[5rem]" style={{ opacity: 1, transform: "none" }}>
                                        <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>{update.date}</span>
                                    </h3>
                                    <p className="mt-6 text-gray-500 text-justify" style={{ opacity: 1 }}>
                                        <span style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', maxWidth: '541px' }}>
                                            <ul>
                                                {
                                                    update.content.map((text, key) => (<li key={key}>{text}</li>))
                                                }
                                            </ul>
                                        </span>
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
            </main>
        </Layout>
    );
}

export default Changelog;