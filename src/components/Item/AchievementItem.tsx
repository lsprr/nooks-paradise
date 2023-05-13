import Image from 'next/image';
import { Container } from '@/components/Container';
import { LabelledSpan } from '../LabelledSpan';
import question from '@assets/images/question.webp';

type Tier = {
    modifier: string;
    nouns: string[];
    reward: string | number;
}

type AchievementData = {
    name: string;
    sourceSheet: string;
    achievementDescription: string;
    achievementCriteria?: string;
    tiers: Record<string, Tier>;
}

type AchievementItemProps = {
    data: AchievementData;
}

export const AchievementItem = ({ data }: AchievementItemProps) => {
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
                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p tabIndex={0} role="text" aria-label={`Achievement Description: ${data.achievementDescription}`}>
                                    {data.achievementDescription}
                                </p>
                            </div>
                        </div>
                        {data.achievementCriteria && (
                            <div className="mt-4">
                                <div className="mb-1 text-sm font-medium">Achievement Criteria</div>
                                <div className="flex flex-wrap gap-1">
                                    <LabelledSpan label="Achievement Criteria" content={data.achievementCriteria} />
                                </div>
                            </div>
                        )}
                        <div className='mt-4 flex justify-between' role="region" aria-label="Milestone, Passport Titles, and Nook Miles Headers">
                            <h2 className="mb-1 text-sm font-medium">Milestones</h2>
                            <h2 className="mb-1 text-sm font-medium">Passport Titles</h2>
                            <h2 className="mb-1 text-sm font-medium">Nook Miles</h2>
                        </div>
                        {Object.keys(data.tiers).map((tierKey, index) => {
                            const tier = data.tiers[tierKey];
                            return (
                                <div className="mt-4 flex justify-between" role="listitem" key={index}>
                                    <LabelledSpan label="Tier" content={index + 1} />
                                    <div className="flex flex-wrap gap-1" role="group" aria-label="Modifiers and Nouns">
                                        <LabelledSpan label="Modifier" content={tier.modifier} />
                                        {tier.nouns.map((noun, nounIndex) => {
                                            return (
                                                <div key={`${index}-${nounIndex}`}>
                                                    <LabelledSpan label="Noun" content={noun} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <LabelledSpan label="Miles Earned" content={tier.reward} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Container>
    );
};
