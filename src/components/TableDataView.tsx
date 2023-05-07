import { CustomTable } from "@/components/Table/CustomTable";

type TableDataViewProps<T> = {
    allItems: T[] | null;
    renderTableHeader?: () => JSX.Element;
    renderTableBody?: (item: T, index: number) => JSX.Element;
};

export const TableDataView = <T extends {}>({ allItems, renderTableHeader, renderTableBody }: TableDataViewProps<T>) => (
    <CustomTable data={allItems || []} renderHeader={renderTableHeader} renderBody={renderTableBody} />
);
