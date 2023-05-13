import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';
import question from '@assets/images/question.webp';

type SeasonAndEventData = {
    name: string;
    type: string;
    datesNorthernHemisphere: null | string;
    datesSouthernHemisphere: null | string;
    year: string | number | null;
}

type SeasonAndEventItemProps = {
    data: SeasonAndEventData;
}

export const SeasonAndEventItem = ({ data }: SeasonAndEventItemProps) => {
    return (
        <Container>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8 bg-creamWhite rounded-2xl">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Image
                            alt={`${data.name} icon`}
                            src={question}
                            className="aspect-square w-full rounded-2xl object-scale-down bg-background"
                            height={500}
                            width={500}
                            loading='lazy'
                            tabIndex={0}
                        />
                    </div>
                    <div className="sticky top-0">
                        <div className="mt-8 flex justify-between">
                            <div className="space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl capitalize" tabIndex={0} role="heading" aria-level={1} aria-label={`Name: ${data.name}`}>
                                    {data.name}
                                </h1>
                            </div>
                        </div>
                        {data.datesNorthernHemisphere && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Dates in the Northern Hemisphere</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Dates in the Northern Hemisphere" content={data.datesNorthernHemisphere} />
                                </div>
                            </div>
                        )}
                        {data.datesSouthernHemisphere && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Dates in the Southern Hemisphere</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Dates in the Southern Hemisphere" content={data.datesSouthernHemisphere} />
                                </div>
                            </div>
                        )}
                        {data.type && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Type</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Type" content={data.type} />
                                </div>
                            </div>
                        )}
                        {data.year && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Year</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Year" content={data.year} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};
