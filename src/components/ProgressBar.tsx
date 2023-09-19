export function ProgressBar({ percent }: { percent: string }) {
    return (
        <div className="relative h-4 w-52 rounded-2xl bg-gray-400">
            <div
                style={{ width: percent }}
                className="absolute left-0 flex h-full items-center justify-center rounded-md bg-blue-600"
            >
                <div className="text-sm font-bold leading-none text-slate-200">
                    {percent}
                </div>
            </div>
        </div>
    );
}
