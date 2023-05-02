type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <section className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
            {children}
        </section>
    )
}