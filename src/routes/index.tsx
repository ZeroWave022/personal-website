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
            <section id="top" className="mdh:h-screen flex lg:justify-center flex-col gap-12 dark:text-slate-200 lg:flex-row snap-start snap-always">
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
                    <div className="mt-2.5">
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
            </section>

            <section id="skills" className="mdh:h-screen snap-start snap-always">
                <h1>Skills</h1>
                <div className="grid grid-cols-2 w-[80vw] md:w-fit mx-auto my-5  lg:grid-cols-3 items-center justify-items-center gap-5">
                    {experienceList.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-xl w-full md:w-56 lg:w-64 bg-slate-500/40 shadow-sm duration-300 ease-in-out transition-shadow hover:shadow-md dark:bg-neutral-500"
                        >
                            <div className="p-2 text-center text-lg font-semibold dark:text-slate-200">
                                {item.name}
                            </div>
                            <div className="p-2 dark:text-slate-200">
                                <ProgressBar percent={item.level} />
                            </div>
                            <div className="p-2 text-center dark:text-slate-200">
                                {item.duration} of experience
                            </div>
                        </div>
                    ))}
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
            </section>
            
            <section id="projects" className="mdh:h-screen snap-start snap-always">
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
                    <a className="w-[90vw] md:max-w-[45vw] overflow-hidden inline-block rounded-md py-5 bg-white cursor-pointer" href="https://discoverpoland.netlify.app" target="_blank" rel="noreferrer">
                        <img className="w-full hover:scale-[102%] transition duration-700 ease-in-out" src={discover_poland} alt="Discover Poland" />
                    </a>
                </div>
            </section>
            
            <section className="mdh:h-screen snap-start snap-always">
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
                    <a className="w-[90vw] md:max-w-[45vw] overflow-hidden inline-block rounded-md p-5 bg-[#e4dccf] cursor-pointer" href="https://github.com/ZeroWave022/MusicVision" target="_blank" rel="noreferrer">
                        <img className="w-full hover:scale-[102%] transition duration-700 ease-in-out" src={musicvision} alt="Discover Poland" />
                    </a>
                </div>
            </section>

            <section className="mdh:h-screen snap-start snap-always">
                <h1>Project 3: yr-weather</h1>
                <div className="flex flex-col justify-center items-center gap-5 m-5 md:flex-row">
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <p>
                            <code>yr-weather</code> is a Python library to get weather data from the Norwegian Meteorological Institute&apos;s APIs.
                            They are completely free to use and this library aims to make it as simple as possible to use them.
                        </p>
                        <p className="m-0">
                            Technologies used: Python
                        </p>

                        <LargeLink color="green-light" link="https://github.com/ZeroWave022/yr-weather">
                            Browse code
                        </LargeLink>
                    </div>
                    <div className="flex flex-col items-center gap-2.5">
                        <a className="w-[90vw] md:max-w-[45vw] overflow-hidden inline-block rounded-md cursor-pointer" href="https://github.com/ZeroWave022/yr-weather" target="_blank" rel="noreferrer">
                            <img className="w-full hover:scale-[102%] transition duration-700 ease-in-out" src="https://socialify.git.ci/ZeroWave022/yr-weather/image?description=1&descriptionEditable=Fetch%20weather%20data%20the%20from%20Norwegian%20Meteorological%20Institute%27s%20APIs%20easily.&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Dark" alt="yr-weather" />
                        </a>
                        <p>
                            The image is provided by <a href="https://github.com/wei/socialify" className="font-medium text-green-600 dark:text-emerald-400" target="_blank" rel="noreferrer">socialify</a>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
