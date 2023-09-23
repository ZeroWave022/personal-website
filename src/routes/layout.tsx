import { Outlet } from "react-router-dom";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export default function Layout() {
    return (
        <>
            <main className="h-screen bg-slate-100 dark:bg-neutral-900 overflow-auto mdh:snap-y mdh:snap-mandatory scroll-pt-20 scroll-smooth">
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>

                <div className="flex flex-col gap-16 mx-6 mt-5">
                    <Outlet />
                </div>

                <footer className="snap-end">
                    <Footer />
                </footer>
            </main>
        </>
    );
}
