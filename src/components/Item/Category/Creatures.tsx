import toComma from '@/utils/numeral';
import Image from 'next/image';
import { Container } from '@components/Layout/Container';

type LabelledSpanProps = {
    label: string;
    content: string | number;
    className?: string;
    isBell?: boolean;
    isNookCranny?: boolean;
    isFlick?: boolean;
    isCJ?: boolean;
}

type CreaturesProps = {
    data: {
        name: string;
        description: string;
        iconImage: string;
        critterpediaImage: string;
        furnitureImage: string;
        sourceSheet: string;
        catchPhrase: string;
        catchDifficulty: string;
        colors: string[];
        hemispheres: {
            north: { months: string[]; time: string[] };
            south: { months: string[]; time: string[] };
        };
        hhaBasePoints: number;
        hhaCategory: string;
        shadow: string;
        sell: number;
        size: string;
        spawnRates: string;
        totalCatchesToUnlock: number;
        vision: string;
        weather: string;
        whereHow: string;
    };
}

const LabelledSpan = ({ label, content, className, isBell, isNookCranny, isFlick, isCJ }: LabelledSpanProps) => {
    let displayContent;

    if (isBell && typeof content === 'number') {
        displayContent = `${label}: ${toComma(content)} Bells`;
    } else if (isNookCranny && typeof content === 'number') {
        displayContent = `Nook's Cranny: ${toComma(content)} Bells`;
    } else if (isFlick && typeof content === 'number') {
        displayContent = `Flick: ${toComma(content)} Bells`;
    } else if (isCJ && typeof content === 'number') {
        displayContent = `C.J.: ${toComma(content)} Bells`;
    } else {
        displayContent = `${content}`;
    }

    return (
        <span
            className={`${className ? className : 'px-3 py-1 group inline-flex items-center justify-center rounded-full border text-xs font-medium bg-white'}`}
            tabIndex={0}
            role="text"
            aria-label={displayContent}
        >
            {displayContent}
        </span>
    );
};

export const Creatures = ({ data }: CreaturesProps) => {
    return (
        <Container>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8 bg-white rounded-2xl">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Image
                            alt={`${data.name} icon`}
                            src={data.iconImage}
                            className="aspect-square w-full rounded-2xl object-scale-down bg-background"
                            height={500}
                            width={500}
                            loading='lazy'
                            tabIndex={0}
                        />
                        <div className="grid grid-cols-2 gap-4 lg:mt-4">
                            <Image
                                alt={`${data.name} critterpedia image`}
                                src={data.critterpediaImage}
                                className="aspect-square w-full rounded-2xl object-scale-down bg-background p-16"
                                height={500}
                                width={500}
                                loading='lazy'
                                tabIndex={0}
                            />
                            <Image
                                alt={`${data.name} furniture image`}
                                src={data.furnitureImage}
                                className="aspect-square w-full rounded-2xl object-scale-down bg-background"
                                height={500}
                                width={500}
                                loading='lazy'
                                tabIndex={0}
                            />
                        </div>
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
                                <p className="text-sm italic" tabIndex={0} role="text" aria-label={`Catch phrase: ${data.catchPhrase}`}>
                                    {data.catchPhrase}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p tabIndex={0} role="text" aria-label={`Description: ${data.description}`}>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                        {data.catchDifficulty && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Catch Difficulty</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Catch Difficulty" content={data.catchDifficulty} />
                                </div>
                            </div>
                        )}
                        {data.colors && data.colors.length > 0 && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Colors</div>
                                <div className="flex flex-wrap gap-1">
                                    {data.colors.map((color, index) => (
                                        <LabelledSpan key={index} label="Color" content={color} />
                                    ))}
                                </div>
                            </div>
                        )}
                        {data.hemispheres && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Hemispheres</div>
                                <div className="flex flex-wrap gap-1">
                                    <div className='rounded-full border px-3' tabIndex={0} role="region" aria-label="Northern Hemisphere information">
                                        <span className='text-xs'>Northern: </span>
                                        {data.hemispheres.north.months.map((month, index) => (
                                            <LabelledSpan key={index} label='Month' content={month} className='group inline-block px-1 py-1 text-xs font-medium bg-white' />
                                        ))}
                                        {data.hemispheres.north.time.map((time, index) => (
                                            <LabelledSpan key={index} label='Time' content={time} className='group inline-block px-1 py-1 text-xs font-medium bg-white' />
                                        ))}
                                    </div>
                                    <div className='rounded-full border px-3' tabIndex={0} role="region" aria-label="Southern Hemisphere information">
                                        <span className='text-xs'>Southern: </span>
                                        {data.hemispheres.south.months.map((month, index) => (
                                            <LabelledSpan key={index} label='Month' content={month} className='group inline-block px-1 py-1 text-xs font-medium bg-white' />
                                        ))}
                                        {data.hemispheres.south.time.map((time, index) => (
                                            <LabelledSpan key={index} label='Time' content={time} className='group inline-block px-1 py-1 text-xs font-medium bg-white' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        {data.hhaBasePoints > 0 && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">HHA Base Points</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="HHA Base Points" content={data.hhaBasePoints} />
                                </div>
                            </div>
                        )}
                        {data.hhaCategory && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">HHA Category</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="HHA Category" content={data.hhaCategory} />
                                </div>
                            </div>
                        )}
                        {data.sell && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Sell Price</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Nook's Cranny" content={data.sell} isBell={true} isNookCranny={true} />
                                    {data.sourceSheet === 'Insects' && (
                                        <LabelledSpan label="Flick" content={data.sell * 1.5} isBell={true} isFlick={true} />
                                    )}
                                    {data.sourceSheet === 'Fish' && (
                                        <LabelledSpan label="C.J." content={data.sell * 1.5} isBell={true} isCJ={true} />
                                    )}
                                </div>
                            </div>
                        )}
                        {data.shadow && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Shadow</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Shadow" content={data.shadow} />
                                </div>
                            </div>
                        )}
                        {data.size && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Size</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Size" content={data.size} />
                                </div>
                            </div>
                        )}
                        {data.spawnRates && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Spawn Rates</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Spawn Rates" content={data.spawnRates} />
                                </div>
                            </div>
                        )}
                        {data.totalCatchesToUnlock > 0 && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Total Catches to Unlock</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Total Catches to Unlock" content={data.totalCatchesToUnlock} />
                                </div>
                            </div>
                        )}
                        {data.vision && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Vision</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Vision" content={data.vision} />
                                </div>
                            </div>
                        )}
                        {data.weather && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Weather</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Weather" content={data.weather} />
                                </div>
                            </div>
                        )}
                        {data.whereHow && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Where or How</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Where or How" content={data.whereHow} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};
