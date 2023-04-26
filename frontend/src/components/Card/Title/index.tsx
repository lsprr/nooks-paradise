export const Title = ({ name }: { name?: string }) => {
    return (
        <>
            {name && (
                <div className="flex items-center px-6 py-3 bg-white dark:bg-darkGray justify-center cursor-pointer">
                    <h1 className="mx-3 text-base font-semibold text-darkGray dark:text-white capitalize">{name}</h1>
                </div>
            )}
        </>
    )
};
