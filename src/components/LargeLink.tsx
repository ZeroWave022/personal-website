import { Link } from "react-router-dom";

const colors = {
    "green-light": "bg-emerald-500",
};

interface LargeLinkProps {
    color: keyof typeof colors;
    link: string;
    internal?: boolean;
    children: string;
}

export function LargeLink({ color, link, internal, children }: LargeLinkProps) {
    if (internal) {
        return (
            <Link
                className={`${colors[color]} w-fit rounded-sm p-2 text-black lg:p-3 lg:text-lg`}
                to={link}
            >
                {children}
            </Link>
        );
    }

    return (
        <a
            className={`${colors[color]} w-fit rounded-sm p-2 text-black lg:p-3 lg:text-lg`}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}
