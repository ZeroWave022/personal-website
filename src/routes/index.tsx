import { ProgressBar } from "@components/ProgressBar";
import { LargeLink } from "@components/LargeLink";
import { Trans, useTranslation } from "react-i18next";

import discover_poland from "@assets/discover_poland.png";
import musicvision from "@assets/musicvision.png";

export default function Index() {
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

    const { t } = useTranslation();

    return (
        <>
            <section
                id="top"
                className="flex snap-start snap-always flex-col gap-12 dark:text-slate-200 lg:flex-row lg:justify-center mdh:h-screen"
            >
                <div className="m-2.5 flex flex-col text-3xl font-semibold md:text-4xl">
                    <h1 className="border-b-2 border-black pb-1.5 font-normal dark:border-b-slate-200">
                        {t("index.intro.hello")}
                    </h1>
                    <div className="flex flex-col">
                        <Trans i18nKey="index.intro.scrollingSubheader">
                            <div className="whitespace-nowrap">
                                I create
                                <span className="ml-2 inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-green-600 dark:text-emerald-500 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))]">
                                    <ul className="block animate-slide-items-5 leading-tight">
                                        <li>websites</li>
                                        <li>games</li>
                                        <li>frameworks</li>
                                        <li>scripts</li>
                                        <li>projects</li>
                                        <li aria-hidden="true">websites</li>
                                    </ul>
                                </span>
                            </div>
                            matching modern expectations
                        </Trans>
                    </div>
                </div>
                <div className="m-2.5 lg:max-w-3xl">
                    <p>{t("index.intro.description")}</p>
                    <div className="mt-2.5">
                        <h2>{t("index.intro.toolsHeader")}</h2>
                        <div className="mx-auto my-5 w-fit rounded-md border-2 border-emerald-600 bg-slate-200 p-3 shadow-xl dark:border-emerald-400/90 dark:bg-neutral-800 dark:shadow-none">
                            <img
                                className=""
                                src="https://skillicons.dev/icons?i=html,css,react,py,ts,js,cs,cpp,nginx,next,express,flask,jquery,mongodb,postgres,mysql,cloudflare,netlify,raspberrypi,unity,git,github,md,postman&perline=8"
                                alt={t("index.intro.toolsImgAlt")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="skills"
                className="snap-start snap-always mdh:h-screen"
            >
                <h1>{t("index.skills.title")}</h1>
                <div className="mx-auto my-5 grid w-[80vw] grid-cols-2 items-center justify-items-center gap-5 md:w-fit lg:grid-cols-3">
                    {experienceList.map((item) => (
                        <div
                            key={item.name}
                            className="w-full rounded-xl bg-slate-500/40 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md dark:bg-neutral-500 md:w-56 lg:w-64"
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

                <p className="text-center italic underline-offset-2">
                    <Trans i18nKey="index.skills.note">
                        Note: The numbers are{" "}
                        <span
                            className="underline decoration-dotted"
                            title="A value of 100% does not imply a total mastery with nothing new to discover"
                        >
                            relative
                        </span>{" "}
                        to each other.
                    </Trans>
                </p>
            </section>

            <section
                id="projects"
                className="snap-start snap-always mdh:h-screen"
            >
                <h1>
                    <Trans i18nKey="index.projects.title1">
                        Project 1: Discover{" "}
                        <span className="text-green-600 dark:text-emerald-500">
                            Poland
                        </span>
                    </Trans>
                </h1>
                <div className="m-5 flex flex-col items-center justify-center gap-5 md:flex-row">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p>{t("index.projects.description1")}</p>
                        <p>
                            {t("index.projects.techUsed", {
                                tech: ["Next.js", "React"],
                            })}
                        </p>

                        <LargeLink
                            color="green-light"
                            link="https://discoverpoland.netlify.app"
                        >
                            {t("common.visit", {
                                destination: "Discover Poland",
                            })}
                        </LargeLink>
                    </div>
                    <a
                        className="inline-block w-[90vw] cursor-pointer overflow-hidden rounded-md bg-white py-5 md:max-w-[45vw]"
                        href="https://discoverpoland.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-full transition duration-700 ease-in-out hover:scale-[102%]"
                            src={discover_poland}
                            alt="Discover Poland"
                        />
                    </a>
                </div>
            </section>

            <section className="snap-start snap-always mdh:h-screen">
                <h1>{t("index.projects.title2")}</h1>
                <div className="m-5 flex flex-col items-center justify-center gap-5 md:flex-row">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p>{t("index.projects.description2")}</p>
                        <p className="m-0">
                            {t("index.projects.techUsed", {
                                tech: [
                                    "Flask (Python)",
                                    "PostgreSQL",
                                    "chart.js",
                                ],
                            })}
                        </p>

                        <LargeLink
                            color="green-light"
                            link="https://github.com/ZeroWave022/MusicVision"
                        >
                            {t("common.browseCode")}
                        </LargeLink>
                    </div>
                    <a
                        className="inline-block w-[90vw] cursor-pointer overflow-hidden rounded-md bg-[#e4dccf] p-5 md:max-w-[45vw]"
                        href="https://github.com/ZeroWave022/MusicVision"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-full transition duration-700 ease-in-out hover:scale-[102%]"
                            src={musicvision}
                            alt="MusicVision"
                        />
                    </a>
                </div>
            </section>

            <section className="snap-start snap-always mdh:h-screen">
                <h1>{t("index.projects.title3")}</h1>
                <div className="m-5 flex flex-col items-center justify-center gap-5 md:flex-row">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p>
                            <Trans i18nKey="index.projects.description3">
                                <code>yr-weather</code> is a Python library to
                                get weather data from the Norwegian
                                Meteorological Institute&apos;s APIs. They are
                                completely free to use and this library aims to
                                make it as simple as possible to use them.
                            </Trans>
                        </p>
                        <p className="m-0">
                            {t("index.projects.techUsed", { tech: ["Python"] })}
                        </p>

                        <LargeLink
                            color="green-light"
                            link="https://github.com/ZeroWave022/yr-weather"
                        >
                            {t("common.browseCode")}
                        </LargeLink>
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <a
                            className="inline-block w-[90vw] cursor-pointer overflow-hidden rounded-md md:max-w-[45vw]"
                            href="https://github.com/ZeroWave022/yr-weather"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="w-full transition duration-700 ease-in-out hover:scale-[102%]"
                                src="https://socialify.git.ci/ZeroWave022/yr-weather/image?description=1&descriptionEditable=Fetch%20weather%20data%20the%20from%20Norwegian%20Meteorological%20Institute%27s%20APIs%20easily.&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Dark"
                                alt="yr-weather"
                            />
                        </a>
                        <p>
                            <Trans i18nKey="index.projects.socialifyNote">
                                The image is provided by{" "}
                                <a
                                    href="https://github.com/wei/socialify"
                                    className="font-medium text-green-600 dark:text-emerald-400"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    socialify
                                </a>
                                .
                            </Trans>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
