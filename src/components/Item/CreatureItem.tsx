import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';

type North = {
    time: string[];
    timeArray: Array<number[] | number>;
    months: string[];
    monthsArray: number[];
}

type Hemispheres = {
    north: North;
    south: North;
}

type CreatureData = {
    sourceSheet: string;
    num: number;
    name: string;
    iconImage: StaticImageData | string;
    critterpediaImage: StaticImageData | string;
    furnitureImage: StaticImageData | string;
    sell: number;
    whereHow?: string;
    weather?: string;
    totalCatchesToUnlock: number;
    spawnRates: string;
    size: string;
    surface: boolean;
    description: string[];
    catchPhrase: string[];
    hhaBasePoints: number;
    hhaCategory: string | null;
    iconFilename: string;
    critterpediaFilename: string;
    furnitureFilename: string;
    hemispheres: Hemispheres;
    colors: string[];
    shadow?: string;
    movementSpeed?: string;
    catchDifficulty?: string;
    vision?: string;
}

type CreatureItemProps = {
    data: CreatureData;
}

export const CreatureItem = ({ data }: CreatureItemProps) => {
    return (
        <Container>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 bg-creamWhite rounded-2xl p-8">
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
                                            <LabelledSpan key={index} label='Month' content={month} className='group inline-block px-1 py-1 text-xs font-medium bg-creamWhite' />
                                        ))}
                                        {data.hemispheres.north.time.map((time, index) => (
                                            <LabelledSpan key={index} label='Time' content={time} className='group inline-block px-1 py-1 text-xs font-medium bg-creamWhite' />
                                        ))}
                                    </div>
                                    <div className='rounded-full border px-3' tabIndex={0} role="region" aria-label="Southern Hemisphere information">
                                        <span className='text-xs'>Southern: </span>
                                        {data.hemispheres.south.months.map((month, index) => (
                                            <LabelledSpan key={index} label='Month' content={month} className='group inline-block px-1 py-1 text-xs font-medium bg-creamWhite' />
                                        ))}
                                        {data.hemispheres.south.time.map((time, index) => (
                                            <LabelledSpan key={index} label='Time' content={time} className='group inline-block px-1 py-1 text-xs font-medium bg-creamWhite' />
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
                                    <LabelledSpan label="Nook's Cranny" content={data.sell} isBell isNookCranny />
                                    {data.sourceSheet === 'Insects' && (
                                        <LabelledSpan label="Flick" content={data.sell * 1.5} isBell isFlick showLabel ariaLabel={`Sell ${data.name} to Flick for ${data.sell * 1.5} Bells`} />
                                    )}
                                    {data.sourceSheet === 'Fish' && (
                                        <LabelledSpan label="C.J." content={data.sell * 1.5} isBell isCJ showLabel ariaLabel={`Sell ${data.name} to C.J. for ${data.sell * 1.5} Bells`} />
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
