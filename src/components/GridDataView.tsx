import { ItemGrid } from "@/components/ItemGrid/ItemGrid";
import { Pagination } from "@/components/Pagination/Pagination";
import { Container } from "./Layout/Container";
import { Stats } from "@/components/Stats/Stats";
import { Search } from "@/components/Search/Search";

type GridDataViewProps = {
    category: string;
    totalItems: number;
    sourceItems: Array<any>;
    itemsPerPage: number;
    currentPage: number;
    handleSearchItem: (query: string) => void;
    handleCurrentItems: (newCurrentPage: number) => void;
    renderGridItem?: (item: any) => JSX.Element | null;
};

export const GridDataView = ({
    category,
    totalItems,
    sourceItems,
    itemsPerPage,
    currentPage,
    handleSearchItem,
    handleCurrentItems,
    renderGridItem,
}: GridDataViewProps) => (
    <>
        <Container>
            <Stats title={category} total={totalItems} />
            <Search onSearchItem={handleSearchItem} />
        </Container>
        <ItemGrid data={sourceItems} renderItem={renderGridItem} />
        <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            current={currentPage}
            onPageChange={handleCurrentItems}
        />
    </>
);
