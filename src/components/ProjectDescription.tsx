import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import { LargeLink } from "@components/LargeLink";

const animations = {
    "fade-left": "animate-fade-left",
    "fade-right": "animate-fade-right",
    "fade-up": "animate-fade-up",
};

interface ProjectDescriptionProps {
    name: string;
    descriptionKey: string;
    techUsed: string[];
    visitLink?: string;
    codeLink?: string;
    animation: keyof typeof animations;
    customDescription?: React.ReactNode;
}

export function ProjectDescription({
    name,
    descriptionKey,
    techUsed,
    visitLink,
    codeLink,
    animation,
    customDescription,
}: ProjectDescriptionProps) {
    const { t } = useTranslation();
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={classNames(
                "flex flex-col items-center justify-center gap-4",
                { [animations[animation]]: inView },
            )}
        >
            <p className="max-w-4xl">
                {customDescription ?? t(descriptionKey)}
            </p>

            <p>
                {t("index.projects.techUsed", {
                    tech: techUsed,
                })}
            </p>
            {visitLink && (
                <LargeLink color="green-light" link={visitLink}>
                    {t("common.visit", {
                        destination: name,
                    })}
                </LargeLink>
            )}
            {codeLink && (
                <LargeLink color="green-light" link={codeLink}>
                    {t("common.browseCode")}
                </LargeLink>
            )}
        </div>
    );
}
