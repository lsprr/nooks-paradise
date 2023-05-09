import { useEffect, useState } from 'react';
import { fetchData } from '@/utils/api';
import { Loading } from '@/components/Loading/Loading';
import { ApiError } from '@/components/Error/ApiError';

type ItemDetailsProps<T> = {
    category: string;
    isItemType: (item: T) => boolean;
    itemSlug: string | string[] | undefined;
    renderItem: (item: T) => JSX.Element;
};

export const ItemDetails = <T extends {}>({ category, isItemType, itemSlug, renderItem }: ItemDetailsProps<T>) => {
    const [item, setItem] = useState<null | any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<Error | null>(null);

    useEffect(() => {
        if (!itemSlug || !category) return;

        const fetchItem = async () => {
            try {
                const allItems = await fetchData(category, 1, 0);
                const itemData = allItems.data.find((i: any) => {
                    return isItemType(i) && i.name.replace(/'/g, '').replace(/\s+/g, '-').toLowerCase() === itemSlug;
                });

                if (itemData) {
                    setItem(itemData);
                } else {
                    setErrorMessage(new Error('Item not found.'));
                }
                setIsLoading(false);
            } catch (e) {
                setErrorMessage(new Error('Error fetching data.'));
                setIsLoading(false);
            }
        };

        fetchItem();

    }, [itemSlug, category, isItemType]);

    return (
        <>
            {errorMessage ? (
                <ApiError />
            ) : isLoading ? (
                <Loading />
            ) : (
                <>
                    {renderItem(item)}
                </>
            )}
        </>
    );
};
