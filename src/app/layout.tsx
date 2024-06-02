import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import { SessionProvider } from "next-auth/react"
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Instantgram',
    template: 'Instantgram | %s'
  },
  description: "Instantgram Photos",
};

export default function RootLayout({
  children,
  // pageProps: { session, ...pageProps },
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className='w-full overflow-auto bg-neutral-50'>
        <AuthContext>
          <div className="max-w-screen-xl mx-auto">
            <Header />
          </div>
          <main className='w-full flex justify-center max-w-screen-xl mx-auto'>
            <SWRConfigContext>
              {children}
            </SWRConfigContext>
          </main>
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
