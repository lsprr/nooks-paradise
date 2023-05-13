type SimpleProps = {
    leftColumn: React.ReactNode;
    rightColumn: React.ReactNode;
}

export const TwoColumnLayout = ({ leftColumn, rightColumn }: SimpleProps) => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col w-full md:flex-row">
            <div className="text-center flex items-center w-full mb-2 md:w-2/3 md:justify-start md:mb-0">
                {leftColumn}
            </div>
            <div className="space-y-4 flex items-center w-full mt-2 md:w-1/3 md:justify-end md:mt-0">
                {rightColumn}
            </div>
        </section>
    )
}