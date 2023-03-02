import Head from 'next/head'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>Arjun | WhatsApp Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <Image src="/next.svg" width={150} height={150} alt="Logo" />

          <h1 className="text-5xl mt-6 font-bold text-white">
            Arjun 
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Your personal assistant on WhatsApp
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/+918700563370?text=Hello"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaWhatsapp className="mr-2" size={20} /> Get started
            </a>
          </div>
        </div>
      </main>

      <footer className="text-gray-400 bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <p className="text-sm">
              &copy; 2023 Arjun. All rights reserved.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-4"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 ml-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
