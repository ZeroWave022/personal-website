const colors = {
    "green-light": "bg-emerald-500"
};

interface LinkProps {
    color: keyof typeof colors,
    link: string,
    children: string
}

export function LargeLink({ color, link, children }: LinkProps) {
    
    return (
        <a className={`${colors[color]} p-2 rounded-sm w-fit lg:p-3 lg:text-lg`} href={link} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}
