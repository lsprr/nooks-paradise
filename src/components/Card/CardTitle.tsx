export const CardTitle = ({ name }: { name?: string }) => {
    return (
        <>
            {name && (
                <div className="flex items-center py-3 bg-white dark:bg-darkGray justify-center">
                    <h1 className="mx-3 text-base font-semibold text-darkGray dark:text-white capitalize">{name}</h1>
                </div>
            )}
        </>
    )
};
