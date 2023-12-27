import { type ReactNode } from "react";
import { type Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/user-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <head>
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="white"
                ></meta>
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="black"
                ></meta>
            </head>
            <body
                className={cn(
                    "bg-background h-full min-h-screen font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <ThemeProvider>
                    <div className="grid h-full grid-cols-[250px_auto]">
                        <Sidebar />
                        <div className="flex h-full w-full flex-col">
                            <div className="border-b-muted flex h-16 shrink-0 items-center border-b px-6">
                                <h1>Stuff</h1>
                                <div className="ml-auto flex items-center space-x-4">
                                    <div>
                                        <Input
                                            type="search"
                                            placeholder="Search..."
                                            className="md:w-[100px] lg:w-[300px]"
                                        />
                                    </div>

                                    <ModeToggle />

                                    <UserNav />
                                </div>
                            </div>
                            <main className="bg-background h-full px-6 pt-4">
                                {children}
                            </main>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
