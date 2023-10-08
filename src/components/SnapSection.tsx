import classNames from "classnames";

interface SnapSectionProps extends React.ComponentPropsWithoutRef<"section"> {
    className?: string;
    snap: "start" | "center" | "end";
}

export function SnapSection({
    children,
    className,
    snap,
    ...attributes
}: SnapSectionProps) {
    const allClasses = classNames("pt-20 snap-always mdh:h-screen", className, {
        "snap-start": snap == "start",
        "snap-center": snap == "center",
        "snap-end": snap == "end",
    });

    return (
        <section className={allClasses} {...attributes}>
            {children}
        </section>
    );
}
