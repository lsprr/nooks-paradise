import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';

type ReactionData = {
    sourceSheet: string;
    num: number;
    name: string;
    image: StaticImageData | string;
    source: string;
    seasonEventExclusive: boolean | null;
    iconFilename: StaticImageData | string;
}

type ReactionItemProps = {
    data: ReactionData;
}

export const ReactionItem = ({ data }: ReactionItemProps) => {
    return (
        <Container>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 bg-creamWhite rounded-2xl p-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Image
                            alt={`${data.name} icon`}
                            src={data.image}
                            className="aspect-square w-full rounded-2xl object-scale-down bg-background"
                            height={500}
                            width={500}
                            loading='lazy'
                            tabIndex={0}
                        />
                    </div>
                    <div className="sticky top-0">
                        <strong
                            className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                            aria-label={`Category: ${data.sourceSheet}`}
                            tabIndex={0}
                        >
                            {data.sourceSheet}
                        </strong>
                        <div className="mt-8 flex justify-between">
                            <div className="space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl capitalize" tabIndex={0} role="heading" aria-level={1} aria-label={`Name: ${data.name}`}>
                                    {data.name}
                                </h1>
                            </div>
                        </div>
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
