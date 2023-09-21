import { ProgressBar } from "@components/ProgressBar";
import { LargeLink } from "@components/LargeLink";

import discover_poland from "@assets/discover_poland.png";
import musicvision from "@assets/musicvision.png";

export default function Index() {
    const experienceList = [
        {
            name: "Python",
            level: "100%",
            duration: `${new Date().getFullYear() - 2017} years`,
        },
        {
            name: "Javascript",
            level: "100%",
            duration: `${new Date().getFullYear() - 2020} years`,
        },
        {
            name: "Typescript",
            level: "70%",
            duration: `${new Date().getFullYear() - 2021} years`,
        },
        {
            name: "HTML",
            level: "100%",
            duration: `${new Date().getFullYear() - 2020} years`,
        },
        {
            name: "CSS",
            level: "80%",
            duration: `${new Date().getFullYear() - 2020} years`,
        },
        {
            name: "React",
            level: "70%",
            duration: `${new Date().getFullYear() - 2021} years`,
        },
    ];

    return (
        <>
            <div className="mx-auto flex w-fit flex-col gap-12 dark:text-slate-200 lg:flex-row">
                <div className="m-2.5 flex flex-col text-3xl font-semibold md:text-4xl">
                    <h1 className="border-b-2 border-black pb-1.5 font-normal dark:border-b-slate-200">
                        Hey! I&apos;m Martin
                    </h1>
                    <div className="flex flex-col">
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
                    </div>
                </div>
                <div className="m-2.5 lg:max-w-3xl">
                    <p>
                        I see developing products which provide utility, make
                        lives easier and provide inspiration for other projects
                        as highly valuable. When I first started experimenting
                        with programming in 2017, I learned that it can provide
                        products which other people enjoy and find useful.
                        That&apos;s why I still code today, and learn something
                        new every day.
                    </p>
                    <h2>What do I use?</h2>
                    <div className="mx-auto my-5 w-fit rounded-md border-2 border-emerald-600 bg-slate-200 p-3 shadow-xl dark:border-emerald-400/90 dark:bg-neutral-800 dark:shadow-none">
                        <img
                            className=""
                            src="https://skillicons.dev/icons?i=html,css,react,py,ts,js,cs,cpp,nginx,next,express,flask,jquery,mongodb,postgres,mysql,cloudflare,netlify,raspberrypi,unity,git,github,md,postman&perline=8"
                            alt="Icons of programming languages, technologies and more"
                        />
                    </div>
                </div>
            </div>

            <h1>Skills</h1>
            <div className="mx-auto my-2 flex w-fit flex-col p-2.5">
                <div className="grid grid-cols-3 items-center justify-items-center gap-5">
                    {experienceList.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-xl bg-slate-500/40 shadow-sm duration-300 ease-in-out hover:shadow-md dark:bg-neutral-500"
                        >
                            <div className="h-full w-full p-2 text-center text-lg font-semibold dark:text-slate-200">
                                {item.name}
                            </div>
                            <div className="h-full w-full p-2 dark:text-slate-200">
                                <ProgressBar percent={item.level} />
                            </div>
                            <div className="h-full w-full p-2 text-center dark:text-slate-200">
                                {item.duration} of experience
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center italic underline-offset-2">
                Note: The numbers are{" "}
                <span
                    className="underline decoration-dotted"
                    title="A value of 100% does not imply a total mastery with nothing new to discover"
                >
                    relative
                </span>{" "}
                to each other.
            </p>

            <h1>Project 1: <span className="dark:text-white">Discover</span> <span className="text-green-600 dark:text-emerald-500">Poland</span></h1>
            <div className="flex flex-col justify-center items-center gap-5 m-5 md:flex-row">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <p>
                        Have you ever considered visiting Poland? Visit Discover Poland now to find out why it&apos;s a good idea!
                        Discover Poland is a website about tourist attractions in Poland, encouraging to discover the ❤️ of Europe.
                    </p>
                    <p>
                        Technologies used: Next.js and React
                    </p>

                    <LargeLink color="green-light" link="https://discoverpoland.netlify.app">
                        Visit Discover Poland
                    </LargeLink>
                </div>
                <a className="max-w-[45vw] overflow-hidden inline-block rounded-md py-5 bg-white cursor-pointer" href="https://discoverpoland.netlify.app" target="_blank" rel="noreferrer">
                    <img className="w-full hover:scale-[102%] transition duration-700 ease-in-out" src={discover_poland} alt="Discover Poland" />
                </a>
            </div>

            <h1>Project 2: MusicVision</h1>
            <div className="flex flex-col justify-center items-center gap-5 m-5 md:flex-row">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <p>
                        MusicVision is an experimental project to create a Spotify dashboard, including your top artists, tracks, historical listening data and playback control.
                        Currently MusicVision isn&apos;t available as a website, but the code is available on GitHub.
                    </p>
                    <p className="m-0">
                        Technologies used: Flask (Python), PostgreSQL, chart.js
                    </p>

                    <LargeLink color="green-light" link="https://github.com/ZeroWave022/MusicVision">
                        Browse code
                    </LargeLink>
                </div>
                <a className="max-w-[45vw] overflow-hidden inline-block rounded-md p-5 bg-[#e4dccf] cursor-pointer" href="https://github.com/ZeroWave022/MusicVision" target="_blank" rel="noreferrer">
                    <img className="w-full hover:scale-[102%] transition duration-700 ease-in-out" src={musicvision} alt="Discover Poland" />
                </a>
            </div>
        </>
    );
}
