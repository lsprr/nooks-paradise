import { useEffect, useState } from 'react';
import { useSearch } from '@/contexts/SearchProvider';
import { useFetchAndRenderData } from '@/hooks/useFetchAndRenderData';
import { ItemGrid } from '@/components/ItemGrid';
import { Card } from '@/components/Card';
import { TwoColumnLayout } from '@/components/TwoColumnLayout';
import { Container } from '@/components/Container';
import { Stats } from '@/components/Stats';
import { Search } from '@/components/Search';
import { Pagination } from '@/components/Pagination';
import { Loading } from '@/components/Loading';
import { ApiError } from '@/components/ApiError';
import question from '@assets/images/question.webp';

export type Category = 'achievements' | 'construction' | 'creatures' | 'npcs' | 'reactions' | 'recipes' | 'seasonsandevents' | 'villagers';

type PageProps = {
    category: Category;
};

type RenderItemProps = {
    name: string;
    image: StaticImageData | string;
    iconImage: StaticImageData | string;
    storageImage: StaticImageData | string;
    closetImage: StaticImageData | string;
}

export default function Page({ category }: PageProps) {
    const { search, query, setQuery, currentPage, setCurrentPage } = useSearch();

    useEffect(() => {
        setQuery(search);
        setCurrentPage(1);
    }, [search, setCurrentPage, setQuery])

    const renderItem = (item: RenderItemProps): JSX.Element => (
        <Card
            page={category}
            name={item.name}
            image={item.image || item.iconImage || item.storageImage || item.closetImage || question}
        />
    );

    const { data, totalCount, numPerPage, loading, error } = useFetchAndRenderData(category, currentPage, 20, query);

    if (loading) return <Loading />

    if (error) return <ApiError />

    return (
        <>
            <Container>
                <TwoColumnLayout leftColumn={<Stats title={category} total={totalCount || 0} />} rightColumn={<Search />} />
            </Container>
            <ItemGrid data={data} renderItem={renderItem} />
            <Pagination totalItems={totalCount || 0} itemsPerPage={numPerPage || 0} current={currentPage} onPageChange={setCurrentPage} />
        </>
    );
}