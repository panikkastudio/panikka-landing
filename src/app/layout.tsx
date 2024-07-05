import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";

const avenir = localFont({
    src: [
        {
            path: "../../public/avenir/Avenir Light.ttf",
            weight: "300",
            style: "light",
        },
        {
            path: "../../public/avenir/Avenir Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/avenir/Avenir Black.ttf",
            weight: "900",
            style: "black",
        },
    ],
    variable: "--font-avenir",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Panikka Studio",
    description: "closing {braces} until they do cool things.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${avenir.variable} ${inter.variable} font-avenir min-h-screen flex flex-col justify-between`}>
                <div>
                    <Analytics />
                    <Header />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
