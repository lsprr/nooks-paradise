import { useRouter } from 'next/router';
import Page, { Category } from '@pages/page';
import { Loading } from '@/components/Loading';
import { GetServerSidePropsContext } from 'next';

type ServerSideProps = {
    category: Category;
};

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{ props: ServerSideProps }> {
    const category = context.params?.category as Category;
    return { props: { category } };
}

export default function CategoryPage({ category }: { category: Category }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loading />;
    }

    return <Page category={category} />;
}
