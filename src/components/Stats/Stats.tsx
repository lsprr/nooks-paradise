type StatsProps = {
    title: string;
    total: number;
}

export const Stats = ({ title, total }: StatsProps) => {
    return (
        <div className="max-sm:w-full">
            <div
                className="relative"
                role="region"
                aria-label={`${title} statistics`}>
                <div
                    className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm bg-creamWhite"
                >
                    <h1 className="capitalize text-darkGray text-base">
                        <span id={`stats-${title}`}>{title}</span> &mdash;{' '}
                        <span id={`stats-total-${title}`}>{total}</span>
                        {total === 1 ? ' Item' : ' Items'}
                    </h1>
                </div>
            </div>
        </div>
    )
}
