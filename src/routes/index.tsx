export default function Index() {
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
                    <div className="mx-auto my-5 w-fit rounded-md border-2 border-emerald-600 bg-neutral-800 p-3 shadow-xl dark:border-emerald-400/90 dark:shadow-none">
                        <img
                            className=""
                            src="https://skillicons.dev/icons?i=html,css,react,py,ts,js,cs,cpp,nginx,next,express,flask,jquery,mongodb,postgres,mysql,cloudflare,netlify,raspberrypi,unity,git,github,md,postman&perline=8"
                            alt="Icons of programming languages, technologies and more"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
