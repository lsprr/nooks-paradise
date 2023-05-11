type SimpleProps = {
    left: React.ReactNode;
    right: React.ReactNode;
}

export const Simple = ({ left, right }: SimpleProps) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex">
            <div className="text-center w-2/3 flex items-center justify-start">
                {left}
            </div>
            <div className="space-y-4 w-1/3 flex items-center justify-end">
                {right}
            </div>
        </div>
    )
}