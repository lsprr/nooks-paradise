import { CustomTable } from "@/components/Table/CustomTable";

type TableDataViewProps = {
    allItems: Array<any> | null;
    renderTableHeader?: () => JSX.Element;
    renderTableBody?: (item: any, index: number) => JSX.Element;
};

export const TableDataView = ({ allItems, renderTableHeader, renderTableBody }: TableDataViewProps) => (
    <CustomTable data={allItems || []} renderHeader={renderTableHeader} renderBody={renderTableBody} />
);
