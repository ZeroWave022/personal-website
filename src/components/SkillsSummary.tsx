import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

import { ProgressBar } from "@components/ProgressBar";

const experienceList = [
    {
        name: "Python",
        level: "100%",
        duration: new Date().getFullYear() - 2017,
    },
    {
        name: "Javascript",
        level: "100%",
        duration: new Date().getFullYear() - 2020,
    },
    {
        name: "Typescript",
        level: "70%",
        duration: new Date().getFullYear() - 2021,
    },
    {
        name: "HTML",
        level: "100%",
        duration: new Date().getFullYear() - 2020,
    },
    {
        name: "CSS",
        level: "80%",
        duration: new Date().getFullYear() - 2020,
    },
    {
        name: "React",
        level: "70%",
        duration: new Date().getFullYear() - 2021,
    },
];

export function SkillsSummary() {
    const { t } = useTranslation();
    const [ref, inView] = useInView();

    return (
        <div ref={ref} className={inView ? "animate-fade-up" : ""}>
            <div className="mx-auto my-5 grid w-[80vw] grid-cols-1 items-center justify-items-center gap-5 md:w-fit md:grid-cols-2 lg:grid-cols-3">
                {experienceList.map((item) => (
                    <div
                        key={item.name}
                        className="w-full rounded-xl bg-slate-500/40 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md dark:bg-neutral-600 md:w-56 lg:w-64"
                    >
                        <div className="p-2 text-center text-lg font-semibold dark:text-slate-200">
                            {item.name}
                        </div>
                        <div className="p-2 dark:text-slate-200">
                            <ProgressBar percent={item.level} />
                        </div>
                        <div className="p-2 text-center dark:text-slate-200">
                            {t("index.skills.duration", {
                                count: item.duration,
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <p className="max-w-4xl text-center italic underline-offset-2">
                {t("index.skills.note")}
            </p>
        </div>
    );
}
