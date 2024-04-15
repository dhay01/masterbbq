import { Ubuntu } from "next/font/google";
import "./globals.css";
import Layout from "@/app/_components/layout/Layout";
import Head from "next/head";

const ubuntu = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


const Rootlayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <html lang="en">
            <body className={ubuntu.className}>
            <Layout>
                {children}
            </Layout>
            </body>
            </html>
        </>
    );
};
export default Rootlayout;
