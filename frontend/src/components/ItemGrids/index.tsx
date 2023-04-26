import { ReactNode } from "react";

type ItemGridsProps = {
    data: Array<any> | null,
    renderItem: (item: any) => ReactNode | null;
};

export const ItemGrids = ({ data, renderItem }: ItemGridsProps) => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="lg:col-span-4">
                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {data?.length ? (
                            data.flatMap((item, index) => {
                                const renderedItem = renderItem(item);
                                return renderedItem ? (
                                    <li className='rounded relative' key={index}>{renderedItem}</li>
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