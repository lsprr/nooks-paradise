import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';

type NPCSProps = {
    data: {
        name: string;
        iconImage: StaticImageData | string;
        photoImage: StaticImageData | string;
        sourceSheet: string;
        birthday: string;
        gender: string;
        genderAsia: string;
    };
}

export const NPCs = ({ data }: NPCSProps) => {
    return (
        <Container>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8 bg-creamWhite rounded-2xl">
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
                            {data.photoImage && (
                                <Image
                                    alt={`${data.name} house image`}
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
                        {data.gender && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Gender (International)</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Gender (International)" content={data.gender} />
                                </div>
                            </div>
                        )}
                        {data.genderAsia && (
                            <div className='mt-4'>
                                <div className="mb-1 text-sm font-medium">Gender (Japan & Korea)</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Gender (Japan & Korea)" content={data.genderAsia} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};
