import { ReactNode } from "react";

type ItemGridProps = {
    data: Array<any> | null,
    renderItem?: (item: any) => ReactNode | null;
};

export const ItemGrid = ({ data, renderItem }: ItemGridProps) => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:col-span-4">
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {data?.length ? (
                            data.flatMap((item, index) => {
                                const renderedItem = renderItem && renderItem(item);
                                return renderedItem ? (
                                    <li className='rounded relative flex justify-center' key={index}>{renderedItem}</li>
                                ) : [];
                            })
                        ) : (
                            <p className="text-center w-full">No items found.</p>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}
