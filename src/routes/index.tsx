import { HashLink } from "react-router-hash-link";
import { Trans, useTranslation } from "react-i18next";

import { Section } from "@components/Section";
import { SkillsSummary } from "@components/SkillsSummary";
import { ProjectDescription } from "@components/ProjectDescription";
import { ProjectImage } from "@components/ProjectImage";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import discover_poland from "@assets/discover_poland.png";
import musicvision from "@assets/musicvision.png";
import mdtables from "@assets/mdtables.png";

export default function Index() {
    const { t } = useTranslation();

    return (
        <>
            <Section
                id="top"
                className="md-h:gap-12 relative h-screen dark:text-slate-200"
            >
                <div className="m-2.5 flex flex-col text-3xl font-semibold md:text-4xl">
                    <h1 className="border-b-2 border-black pb-2 text-4xl font-light dark:border-b-slate-200">
                        {t("index.intro.hello")}
                    </h1>
                    <div className="flex flex-col">
                        <Trans i18nKey="index.intro.scrollingSubheader">
                            <div>
                                I create
                                <span className="inline-flex h-[calc(theme(fontSize.3xl)*theme(lineHeight.normal))] flex-col overflow-hidden text-green-600 dark:text-emerald-500 md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.normal))]">
                                    <ul className="block animate-slide-items-5 leading-normal [&_li]:whitespace-nowrap">
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
                <div className="mt-2.5 lg:max-w-3xl">
                    <h2>{t("index.intro.toolsHeader")}</h2>
                    <div className="mx-auto my-5 w-fit rounded-md border-2 border-emerald-600 bg-slate-200 p-3 shadow-xl dark:border-emerald-400/90 dark:bg-neutral-800 dark:shadow-none">
                        <img
                            className=""
                            src="https://skillicons.dev/icons?i=html,css,react,py,ts,js,cs,cpp,nginx,next,express,flask,jquery,mongodb,postgres,mysql,cloudflare,netlify,raspberrypi,unity,git,github,md,postman&perline=8"
                            alt={t("index.intro.toolsImgAlt")}
                        />
                    </div>
                </div>
                <HashLink to="/" elementId="skills">
                    <ChevronDownIcon className="anim-delay-5000 absolute bottom-20 left-1/2 hidden h-8 w-8 -translate-x-1/2 animate-scroll-icon-bounce mdh:block" />
                </HashLink>
            </Section>

            <Section
                id="skills"
                className="bg-gray-200/50 dark:bg-neutral-800/20"
            >
                <h1>{t("index.skills.title")}</h1>
                <SkillsSummary />
            </Section>

            <Section id="projects">
                <h1>
                    <Trans i18nKey="index.projects.title1">
                        Project 1: Discover{" "}
                        <span className="text-green-600 dark:text-emerald-500">
                            Poland
                        </span>
                    </Trans>
                </h1>
                <div className="flex flex-col items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <ProjectDescription
                        name="Discover Poland"
                        descriptionKey="index.projects.description1"
                        techUsed={["Next.js", "React"]}
                        visitLink="https://discoverpoland.netlify.app"
                        codeLink="https://github.com/ZeroWave022/DiscoverPoland"
                        animation="fade-left"
                    />
                    <ProjectImage
                        imgSrc={discover_poland}
                        imgAlt="Discover Poland"
                        href="https://discoverpoland.netlify.app"
                        wrapperClassName="bg-white py-5"
                    />
                </div>
            </Section>

            <Section className="bg-gray-200/50 dark:bg-neutral-800/20">
                <h1>{t("index.projects.title2")}</h1>
                <div className="flex flex-col-reverse items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col items-center gap-2.5">
                        <ProjectImage
                            imgSrc="https://socialify.git.ci/ZeroWave022/yr-weather/image?description=1&descriptionEditable=Fetch%20weather%20data%20the%20from%20Norwegian%20Meteorological%20Institute%27s%20APIs%20easily.&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Dark"
                            imgAlt="yr-weather"
                            href="https://github.com/ZeroWave022/yr-weather"
                        />
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
                    <ProjectDescription
                        name="yr-weather"
                        descriptionKey="index.projects.description2"
                        techUsed={["Python"]}
                        codeLink="https://github.com/ZeroWave022/yr-weather"
                        animation="fade-right"
                        customDescription={
                            <Trans i18nKey="index.projects.description2">
                                <code>yr-weather</code> is a Python library to
                                get weather data from the Norwegian
                                Meteorological Institute&apos;s APIs. They are
                                completely free to use and this library aims to
                                make it as simple as possible to use them.
                            </Trans>
                        }
                    />
                </div>
            </Section>

            <Section>
                <h1>{t("index.projects.title3")}</h1>
                <div className="flex flex-col items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <ProjectDescription
                            name="TrafficEvader"
                            descriptionKey="index.projects.description3"
                            techUsed={["Pygame (Python)"]}
                            codeLink="https://github.com/ZeroWave022/TrafficEvader"
                            animation="fade-left"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <ProjectImage
                            imgSrc="https://raw.githubusercontent.com/ZeroWave022/TrafficEvader/main/imgs/preview.png"
                            imgAlt="TrafficEvader"
                            href="https://github.com/ZeroWave022/TrafficEvader"
                        />
                    </div>
                </div>
            </Section>

            <Section className="bg-gray-200/50 dark:bg-neutral-800/20">
                <h1>{t("index.projects.title4")}</h1>
                <div className="flex flex-col-reverse items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col items-center gap-2.5">
                        <ProjectImage
                            imgSrc={mdtables}
                            imgAlt=".mdTables"
                            href="https://github.com/ZeroWave022/mdtables"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <ProjectDescription
                            name=".mdTables"
                            descriptionKey="index.projects.description4"
                            techUsed={["Nuxt.js (Vue)", "Typescript"]}
                            visitLink="https://mdtables.pages.dev/"
                            codeLink="https://github.com/ZeroWave022/mdtables"
                            animation="fade-right"
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <h1>{t("index.projects.title5")}</h1>
                <div className="flex flex-col items-center justify-center gap-5 lg:grid lg:grid-cols-2">
                    <ProjectDescription
                        name="MusicVision"
                        descriptionKey="index.projects.description5"
                        techUsed={["Flask (Python)", "PostgreSQL", "chart.js"]}
                        codeLink="https://github.com/ZeroWave022/MusicVision"
                        animation="fade-left"
                    />
                    <ProjectImage
                        imgSrc={musicvision}
                        imgAlt="MusicVision"
                        href="https://github.com/ZeroWave022/MusicVision"
                        wrapperClassName="bg-[#e4dccf] p-5"
                    />
                </div>
            </Section>
        </>
    );
}
