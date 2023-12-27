"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HomeIcon, Package2Icon } from "lucide-react";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="border-r-muted h-full max-h-screen border-r">
            <div className="flex flex-col gap-2">
                <div className="border-b-muted flex h-16 items-center border-b px-4">
                    <Link
                        className="flex items-center gap-2 font-semibold"
                        href="/"
                    >
                        <Package2Icon className="h-6 w-6" />
                        <span>Bishow Inc</span>
                    </Link>
                </div>
                <div className="flex-1 px-4">
                    <nav className="grid items-start gap-1 text-sm font-medium">
                        {[1, 2, 3].map((item) => (
                            <Button
                                key={item}
                                asChild
                                variant={
                                    pathname === `/${item}`
                                        ? "secondary"
                                        : "ghost"
                                }
                                className="w-full items-center justify-start gap-2"
                            >
                                {/* <> */}
                                <Link href={`/${item}`}>
                                    <HomeIcon className="h-5 w-5" />
                                    Home {item}
                                    {item === 2 ? (
                                        <Badge
                                            variant="default"
                                            className="ml-auto"
                                        >
                                            12
                                        </Badge>
                                    ) : null}
                                </Link>
                                {/* </> */}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </aside>
    );
};
