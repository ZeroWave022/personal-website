import { HashLink } from "react-router-hash-link";

const colors = {
    "green-light": "bg-emerald-500",
};

interface LargeLinkProps {
    color: keyof typeof colors;
    link: string;
    internal?: boolean;
    elementId?: string;
    children: string;
}

export function LargeLink({
    color,
    link,
    internal,
    elementId,
    children,
}: LargeLinkProps) {
    if (internal) {
        return (
            <HashLink
                className={`${colors[color]} w-fit rounded-sm p-3 text-lg font-semibold text-neutral-900 lg:text-xl`}
                to={link}
                elementId={elementId}
            >
                {children}
            </HashLink>
        );
    }

    return (
        <a
            className={`${colors[color]} w-fit rounded-sm p-3 text-lg font-semibold text-neutral-900 lg:text-xl`}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}
