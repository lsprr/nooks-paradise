type Props = {
    leftColumn: React.ReactNode,
    rightColumn: React.ReactNode
}

export const Columns = ({ leftColumn, rightColumn }: Props) => {
    return (
        <section className="columns-2 md:columns-3">
            <aside>{leftColumn}</aside>
            <aside>{rightColumn}</aside>
        </section>
    )
}