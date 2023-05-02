type titleItemCountProps = {
    title: string;
    data: Array<any> | null,
}

export const CategoryItemCount = ({ title, data }: titleItemCountProps) => {
    const arrayLength = data?.length ?? 0;

    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-x-3">
                <h1 className="text-lg font-semibold text-darkGray dark:text-white capitalize">{title}</h1>
                <span className="px-3 py-1 text-base font-semibold text-white bg-darkGray rounded-full dark:bg-white dark:text-darkGray">{arrayLength} items</span>
            </div>
        </div>
    )
}
