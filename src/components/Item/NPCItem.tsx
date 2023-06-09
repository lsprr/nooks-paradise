import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';
import question from '@assets/images/question.webp';

type NPCData = {
    sourceSheet: string;
    name: string;
    iconImage: null | string;
    photoImage: null | string;
    gender: string;
    genderAsia: string;
    birthday: string;
    iconFilename: null | string;
    photoFilename: null | string;
}

type NPCItemProps = {
    data: NPCData;
}

export const NPCItem = ({ data }: NPCItemProps) => {
    return (
        <Container>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 bg-creamWhite rounded-2xl p-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Image
                            alt={`${data.name} icon`}
                            src={data.iconImage || question}
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
