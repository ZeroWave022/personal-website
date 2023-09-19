import { Outlet } from "react-router-dom";

import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";

export default function Layout() {
    return (
        <>
            <div className="flex min-h-screen flex-col bg-slate-100 dark:bg-neutral-900">
                <header>
                    <Navbar />
                </header>

                <div className="mx-6 flex-1">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </>
    );
}
