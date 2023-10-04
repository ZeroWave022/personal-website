import { Outlet } from "react-router-dom";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export default function Layout() {
    return (
        <>
            <div className="h-screen scroll-pt-20 overflow-auto scroll-smooth mdh:snap-y mdh:snap-mandatory">
                <header className="sticky top-0 z-50">
                    <Navbar />
                </header>

                <main className="flex flex-col gap-16 bg-slate-100 dark:bg-neutral-900 dark:text-slate-200">
                    <div className="mx-6 mt-5">
                        <Outlet />
                    </div>

                    <Footer />
                </main>
            </div>
        </>
    );
}
