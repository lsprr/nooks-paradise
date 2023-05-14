import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';

type VillagerData = {
    name: string;
    catchphrase: string;
    sourceSheet: string;
    iconImage: StaticImageData | string;
    photoImage: StaticImageData | string;
    houseImage: StaticImageData | string | null;
    birthday: string;
    colors: string[];
    defaultClothing: string;
    defaultUmbrella: string;
    favoriteSaying: string;
    favoriteSong: string;
    flooring: string;
    furnitureNameList: string[];
    gender: string;
    hobby: string;
    personality: string;
    species: string;
    wallpaper: string;
}

type VillagerItemProps = {
    data: VillagerData;
}

export const VillagerItem = ({ data }: VillagerItemProps) => {
    console.log(data);
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
                            {data.houseImage && (
                                <Image
                                    alt={`${data.name} house image`}
                                    src={data.houseImage}
                                    className="aspect-square w-full rounded-2xl object-scale-down bg-background p-16"
                                    height={500}
                                    width={500}
                                    loading='lazy'
                                    tabIndex={0}
                                />
                            )}
                            {data.photoImage && (
                                <Image
                                    alt={`${data.name} photo image`}
                                    src={data.photoImage}
                                    className="aspect-square w-full rounded-2xl"
                                    height={500}
                                    width={500}
                                    loading='lazy'
                                    tabIndex={0}
                                />
                            )}
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
                                <p className="text-sm italic" tabIndex={0} role="text" aria-label={`Catch phrase: ${data.catchphrase}`}>
                                    {data.catchphrase}
                                </p>
                            </div>
                        </div>
                        {data.birthday && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Birthday</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Birthday" content={data.birthday} />
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
                        {data.defaultClothing && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Default Clothing</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Default Clothing" content={data.defaultClothing} />
                                </div>
                            </div>
                        )}
                        {data.defaultUmbrella && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Default Umbrella</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Default Umbrella" content={data.defaultUmbrella} />
                                </div>
                            </div>
                        )}
                        {data.favoriteSaying && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Favorite Saying</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Favorite Saying" content={data.favoriteSaying} />
                                </div>
                            </div>
                        )}
                        {data.favoriteSong && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Favorite Song</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Favorite Song" content={data.favoriteSong} />
                                </div>
                            </div>
                        )}
                        {data.flooring && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Flooring</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Flooring" content={data.flooring} />
                                </div>
                            </div>
                        )}
                        <div className='mt-4 flex justify-between' role="region" aria-label="Furniture List">
                            <h2 className="mb-1 text-sm font-medium">Furniture List</h2>
                        </div>
                        <div className='flex flex-wrap gap-1 capitalize'>
                            {data.furnitureNameList.map((furniture, index) => {
                                return (
                                    <div className="mt-4" key={index}>
                                        <div className="flex flex-wrap gap-1 capitalize">
                                            <LabelledSpan label="Furniture" content={furniture} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {data.gender && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Gender</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Gender" content={data.gender} />
                                </div>
                            </div>
                        )}
                        {data.hobby && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Hobby</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Hobby" content={data.hobby} />
                                </div>
                            </div>
                        )}
                        {data.personality && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Personality</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Personality" content={data.personality} />
                                </div>
                            </div>
                        )}
                        {data.species && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Species</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Species" content={data.species} />
                                </div>
                            </div>
                        )}
                        {data.wallpaper && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Wallpaper</div>
                                <div className="flex flex-wrap gap-1 capitalize">
                                    <LabelledSpan label="Wallpaper" content={data.wallpaper} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};
