type StatsProps = {
    title: string;
    total: number;
}

export const Stats = ({ title, total }: StatsProps) => {
    return (
        <>
            <div className="flex items-end justify-center bg-creamWhite p-6 mt-8 rounded-2xl md:w-1/3">
                <div className="flex flex-col items-center">
                    <p className="text-base text-darkGray capitalize">{title}</p>
                    <p className="text-2xl font-medium text-gray-900">{total}</p>
                    <p className="text-sm text-gray-500">{total === 1 ? 'Item' : 'Items'}</p>
                </div>
            </div>
        </>
    )
}
