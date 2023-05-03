type titleItemCountProps = {
    title: string;
    total: number;
}

export const CategoryItemCount = ({ title, total }: titleItemCountProps) => {
    return (
        <div>
            <div className="flex items-center gap-x-3 justify-center md:justify-normal">
                <h1 className="text-lg font-semibold text-darkGray dark:text-white capitalize">{title}</h1>
                <span className="px-3 py-1 text-base font-semibold text-white bg-darkGray rounded-full dark:bg-white dark:text-darkGray">{total} items</span>
            </div>
        </div>
    )
}
