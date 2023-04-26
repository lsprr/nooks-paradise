import React from 'react';

type CustomTableProps = {
    data: any[];
    renderHeader: () => JSX.Element;
    renderBody: (item: any, index: number) => JSX.Element;
}

export const CustomTable = ({ data, renderHeader, renderBody }: CustomTableProps) => {
    return (
        <section className="container mx-auto mt-10 mb-10">
            <table className="w-full text-center bg-white dark:bg-darkGray text-darkGray dark:text-white rounded-2xl">
                <thead>{renderHeader()}</thead>
                <tbody>{data.map((item, index) => React.cloneElement(renderBody(item, index), { key: index }))}</tbody>
            </table>
        </section>
    );
};
