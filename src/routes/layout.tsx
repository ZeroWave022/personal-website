import { Outlet } from "react-router-dom";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export default function Layout() {
    return (
        <>
            <div className="h-screen bg-slate-100 dark:bg-neutral-900 overflow-auto snap-y snap-mandatory scroll-pt-20 scroll-smooth">
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>

                <div className="mx-6 mt-5 flex-1">
                    <Outlet />
                </div>

                <footer className="snap-end">
                    <Footer />
                </footer>
            </div>
        </>
    );
}
