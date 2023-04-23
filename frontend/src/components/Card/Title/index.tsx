export const Title = ({ name }: { name?: string }) => {
    return (
        <>
            {name && (
                <div className="flex items-center px-6 py-3 bg-[#78512C] dark:bg-[#A0CDA2]">
                    <h1 className="mx-3 text-base font-semibold text-[#F5EADD] dark:text-[#2F3939] capitalize">{name}</h1>
                </div>
            )}
        </>
    )
};
