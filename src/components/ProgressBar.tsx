export function ProgressBar({ percent }: { percent: string }) {
    return (
        <div className="relative h-4 w-full rounded-2xl bg-neutral-400 dark:bg-neutral-500">
            <div
                style={{ width: percent }}
                className="absolute left-0 flex h-full items-center justify-center rounded-md bg-green-600 dark:bg-emerald-500"
            >
                <div className="text-sm font-bold leading-none text-slate-200">
                    {percent}
                </div>
            </div>
        </div>
    );
}
