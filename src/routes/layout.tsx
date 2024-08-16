import { Outlet } from "react-router-dom";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export default function Layout() {
    return (
        <>
            <div className="flex h-screen flex-col overflow-auto scroll-smooth">
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>

                <main className="flex grow flex-col bg-slate-100 dark:bg-neutral-900 dark:text-slate-200">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </>
    );
}
