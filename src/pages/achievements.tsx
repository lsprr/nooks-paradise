import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';

type Achievement = {
    name: string;
    achievementDescription: string;
    achievementCriteria: string;
    tiers: {
        [key: string]: {
            nouns: string[];
            modifier: string;
            reward: string;
        };
    };
};

const renderHeader: () => JSX.Element = () => (
    <div className='bg-lightBeige flex flex-wrap p-2 justify-center items-center rounded-tl-2xl rounded-tr-2xl' role="row">
        <div className="w-full md:w-1/3 p-2 text-xs md:text-base font-bold" role="columnheader">Name &amp; Description</div>
        <div className="w-full md:w-2/3 p-2 text-xs md:text-base font-bold" role="columnheader">Details &amp; Rewards</div>
    </div>
);

const renderBody: (item: Achievement, index: number) => JSX.Element = (item, index) => {
    return (
        <div className='achievement' key={index} role="row">
            <div className="border-t border-b border-dashed border-sienna bg-lightBeige flex flex-wrap p-2 text-darkGray" role="row">
                <div className="w-full md:w-1/3 p-2 text-xs md:text-base font-bold md:border-r border-dashed border-sienna" role="cell" tabIndex={0} aria-label={`Name and description: ${item.name}, ${item.achievementDescription}`}>
                    {item.name}<br />
                    <span className='font-normal'>{item.achievementDescription}</span>
                </div>
                <div className="w-full md:w-2/3 p-2 text-xs md:text-base" role="cell" tabIndex={0} aria-label={`Criteria: ${item.achievementCriteria}`}>
                    <b>Criteria</b><br /> {item.achievementCriteria}
                </div>
            </div>
            {Object.entries(item.tiers).map(([key, tier], tierIndex) => (
                <div className='tier-row flex flex-wrap p-2 text-darkGray dark:text-creamWhite' key={`${index}-${key}`} role="row">
                    <div className="w-full md:w-1/3 p-2 text-xs md:text-base" role="cell" tabIndex={0} aria-label={`Milestone: ${key}`}>
                        {tierIndex === 0 && (
                            <div className="font-bold hidden md:block">Milestones</div>
                        )}
                        <div className="font-bold block md:hidden">Milestones</div>
                        <ol>
                            <li>{key}</li>
                        </ol>
                    </div>
                    <div className="w-full md:w-1/3 p-2 text-xs md:text-base" role="cell" tabIndex={0} aria-label={`Passport Titles: ${tier.nouns.map((noun, i) => `${tier.modifier} ${noun}`).join(', ')}`}>
                        {tierIndex === 0 && (
                            <div className="font-bold hidden md:block">Passport Titles</div>
                        )}
                        <div className="font-bold block md:hidden">Passport Titles</div>
                        <ol>
                            {tier.nouns.map((noun, i) => (
                                <li key={`${noun}-${i}`}>
                                    <span className="bg-brightBlue text-white border border-brightBlue border-r-0 rounded-md px-1 py-0.5 mr-1 inline-block text-xs md:text-sm">{tier.modifier}</span>
                                    <span className="bg-brightBlue text-white border border-brightBlue border-l-0 rounded-md  px-1 py-0.5 inline-block text-xs md:text-sm">{noun}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="w-full md:w-1/3 p-2 text-xs md:text-base" role='cell' tabIndex={0} aria-label={`Nook Mile: ${tier.reward}`}>
                        {tierIndex === 0 && (
                            <div className="font-bold hidden md:block">Nook Miles</div>
                        )}
                        <div className="font-bold block md:hidden">Nook Miles</div>
                        <ol>
                            <li>{tier.reward}</li>
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function Achievements() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="achievements"
            viewType="table"
            fetchFunction={() => fetchFunction('achievements', 0, 0)}
            renderTableHeader={renderHeader}
            renderTableBody={renderBody}
        />
    );
}