type NavigationCategoryListProps = {
    children: React.ReactNode;
}

export const NavigationCategoryList = ({ children }: NavigationCategoryListProps) => {
    return (
        <div className="fixed inset-0 pt-40 bg-white flex z-50">
            <div className="container mx-auto px-4 transition-all ease-in-out duration-300 flex justify-center items-center overflow-auto">
                <div className="max-w-6xl transition-all ease-in-out duration-300 impt-h">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
