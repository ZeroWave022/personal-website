const colors = {
    "green-light": "bg-emerald-500",
};

interface LinkProps {
    color: keyof typeof colors;
    link: string;
    children: string;
}

export function LargeLink({ color, link, children }: LinkProps) {
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
