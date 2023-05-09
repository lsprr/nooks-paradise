import React from 'react';
import { Container } from '../Layout/Container';

type CustomTableProps<T> = {
    data: T[];
    renderHeader?: () => JSX.Element;
    renderBody?: (item: T, index: number) => JSX.Element;
}

export const CustomTable = <T extends {}>({ data, renderHeader, renderBody }: CustomTableProps<T>): JSX.Element => {
    return (
        <Container role="table" aria-label="Achievements table">
            <div className="w-full text-center bg-white dark:bg-darkGray text-darkGray dark:text-white rounded-2xl">
                {renderHeader && renderBody &&
                    <>
                        <div className="header" role="rowgroup">{renderHeader()}</div>
                        <div className="body" role="rowgroup">{data.map((item, index) => React.cloneElement(renderBody(item, index), { key: index }))}</div>
                    </>
                }
            </div>
        </Container>
    );
};
