import { ReactNode } from "react";
import { NoItemsFound } from "../Error/NoItemsFound";
import { Container } from "../Layout/Container";

type ItemGridProps<T> = {
    data: Array<T> | null,
    renderItem?: (item: T) => ReactNode | null;
};

export const ItemGrid = <T extends {}>({ data, renderItem }: ItemGridProps<T>): JSX.Element => {
    return (
        <Container>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:col-span-4">
                    {data && data.length > 0 ? (
                        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {data.map((item, index) => {
                                const renderedItem = renderItem && renderItem(item);
                                return renderedItem ? (
                                    <li key={index}>{renderedItem}</li>
                                ) : [];
                            })}
                        </ul>
                    ) : (
                        <NoItemsFound />
                    )}
                </div>
            </div>
        </Container>
    )
}
