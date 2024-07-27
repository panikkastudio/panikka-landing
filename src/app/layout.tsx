import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Panikka Studio",
    description: "closing {braces} until they do cool things.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang="en">{children}</html>;
}
