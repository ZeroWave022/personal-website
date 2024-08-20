import classNames from "classnames";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
    className?: string;
}

export function Section({ children, className, ...attributes }: SectionProps) {
    const allClasses = classNames(
        "px-4 md:px-8 py-24 flex flex-col gap-5 justify-center items-center",
        className,
    );

    return (
        <section className={allClasses} {...attributes}>
            {children}
        </section>
    );
}
