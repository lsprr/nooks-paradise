import toComma from '@/utils/numeral';
import Image from 'next/image';
import { Container } from '@components/Layout/Container';

type LabelledSpanProps = {
    label: string;
    content: string | number;
    className?: string;
    isBell?: boolean;
}

type ConstructionProps = {
    data: {
        name: string;
        image: string;
        category: string;
        buy: number;
        source: string;
    };
}

const LabelledSpan = ({ label, content, className, isBell }: LabelledSpanProps) => {
    const displayContent = isBell && typeof content === 'number' ? `${toComma(content)} Bells` : content;

    return (
        <span
            className={`px-3 py-1 group inline-flex items-center justify-center rounded-full border text-xs font-medium bg-white ${className}`}
            tabIndex={0}
            role="text"
            aria-label={`${label}: ${displayContent}`}
        >
            {displayContent}
        </span>
    )
};

export const Construction = ({ data }: ConstructionProps) => {
    return (
        <Container>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8 bg-white rounded-2xl">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Image
                            alt={`${data.name} icon`}
                            src={data.image}
                            className="aspect-square w-full rounded-2xl object-scale-down bg-background"
                            height={500}
                            width={500}
                            loading="lazy"
                            tabIndex={0}
                        />
                    </div>
                    <div className="sticky top-0">
                        <strong
                            className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                            aria-label={`Category: ${data.category}`}
                            tabIndex={0}
                        >
                            {data.category}
                        </strong>
                        <div className="mt-8 flex justify-between">
                            <div className="space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl capitalize" tabIndex={0} role="heading" aria-level={1} aria-label={`Name: ${data.name}`}>
                                    {data.name}
                                </h1>
                            </div>
                        </div>
                        {data.buy && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Buy Price</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Buy Price" content={data.buy} isBell={true} />
                                </div>
                            </div>
                        )}
                        {data.source && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Source</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Source" content={data.source} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};
