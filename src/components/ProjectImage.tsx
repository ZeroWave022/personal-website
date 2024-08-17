import classNames from "classnames";

interface ProjectImageProps {
    imgSrc: string;
    imgAlt: string;
    href?: string;
    wrapperClassName?: string;
    imgClassName?: string;
}

export function ProjectImage({
    imgSrc,
    imgAlt,
    href,
    wrapperClassName,
    imgClassName,
}: ProjectImageProps) {
    const wrapperClass = classNames(
        "inline-block cursor-pointer overflow-hidden rounded-md lg:max-w-[45vw]",
        wrapperClassName,
    );
    const imgClass = classNames(
        "w-full transition duration-700 ease-in-out hover:scale-[102%]",
        imgClassName,
    );

    if (!href) {
        return (
            <div className={wrapperClass}>
                <img className={imgClass} src={imgSrc} alt={imgAlt} />
            </div>
        );
    }

    return (
        <a
            className={wrapperClass}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <img className={imgClass} src={imgSrc} alt={imgAlt} />
        </a>
    );
}
