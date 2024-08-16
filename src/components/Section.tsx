import classNames from "classnames";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
    className?: string;
}

export function Section({ children, className, ...attributes }: SectionProps) {
    const allClasses = classNames(
        "flex flex-col justify-center items-center py-24",
        className,
    );

    return (
        <section className={allClasses} {...attributes}>
            {children}
        </section>
    );
}
