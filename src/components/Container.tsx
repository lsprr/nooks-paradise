type ContainerProps = {
    children: React.ReactNode
    className?: string;
    role?: string;
    'aria-label'?: string;
}

export const Container = ({ children, className, role, 'aria-label': ariaLabel }: ContainerProps) => {
    return (
        <section className={`container mx-auto mt-10 mb-10 ${className ? className : ''}`} role={role} aria-label={ariaLabel}>
            {children}
        </section>
    )
}