import { Outlet } from "react-router-dom";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export default function Layout() {
    return (
        <>
            <div className="h-screen overflow-auto mdh:snap-y mdh:snap-mandatory scroll-pt-20 scroll-smooth">
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>

                <main className="dark:text-slate-200 bg-slate-100 dark:bg-neutral-900 flex flex-col gap-16">
                    <div className="mx-6 mt-5">
                        <Outlet />
                    </div>

                    <Footer />
                </main>
            </div>
        </>
    );
}
