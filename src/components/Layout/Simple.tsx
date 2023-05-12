type SimpleProps = {
    left: React.ReactNode;
    right: React.ReactNode;
}

export const Simple = ({ left, right }: SimpleProps) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col w-full md:flex-row">
            <div className="text-center flex items-center w-full mb-2 md:w-2/3 md:justify-start">
                {left}
            </div>
            <div className="space-y-4 flex items-center w-full mt-2 md:w-1/3 md:justify-end">
                {right}
            </div>
        </div>
    )
}