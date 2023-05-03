import { DataFetch } from '@/components/DataFetch';
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

const renderHeader = () => (
    <tr>
        <th colSpan={1} className="w-full md:w-1/3 p-2 rounded-tl-2xl text-xs md:text-base">Name &amp; Description</th>
        <th colSpan={3} className="p-2 rounded-tr-2xl text-xs md:text-base">Details &amp; Rewards</th>
    </tr>
);

const renderBody = (item: Achievement, index: number) => {
    const tiersLength = Object.keys(item.tiers).length;
    return (
        <>
            <tr key={`${index}-title`} className="border-t border-b border-dashed border-darkGray dark:border-white">
                <td rowSpan={tiersLength + 1} className="p-1 md:p-2 rounded-bl-2xl border-r border-dashed border-darkGray dark:border-white text-xs md:text-base">
                    <b>{item.name}</b> <br /> {item.achievementDescription}
                </td>
                <td colSpan={3} className="p-1 md:p-2 border-t border-dashed border-darkGray dark:border-white text-xs md:text-base">
                    <b>Criteria</b><br /> {item.achievementCriteria}
                </td>
            </tr>
            {Object.entries(item.tiers).map(([key, tier], tierIndex) => (
                <tr key={`${index}-${key}`}>
                    <td className="p-1 md:p-2 text-xs md:text-base">
                        {tierIndex === 0 && (
                            <div className="font-bold">Milestones</div>
                        )}
                        <ol>
                            <li>
                                {key}
                            </li>
                        </ol>
                    </td>
                    <td className="p-1 md:p-2 text-xs md:text-base">
                        {tierIndex === 0 && (
                            <div className="font-bold">Passport Titles</div>
                        )}
                        <ol>
                            {tier.nouns.map((noun, i) => (
                                <li key={`${noun}-${i}`}>
                                    <span className="bg-green-100 text-green-700 border border-green-300 border-r-0 rounded-l px-1 py-0.5 mr-1 inline-block text-xs md:text-sm">{tier.modifier}</span>
                                    <span className="bg-green-100 text-green-700 border border-green-300 border-l-0 rounded-r px-1 py-0.5 inline-block text-xs md:text-sm">{noun}</span>
                                </li>
                            ))}
                        </ol>
                    </td>
                    <td className="p-1 md:p-2 text-xs md:text-base">
                        {tierIndex === 0 && (
                            <div className="font-bold">Nook Miles</div>
                        )}
                        <ol>
                            <li>{tier.reward}</li>
                        </ol>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default function Achievements() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="achievements"
        type="table"
        fetchFunction={() => fetchFunction('achievements', 0, 0)}
        renderTableHeader={renderHeader}
        renderTableBody={renderBody}
    />
}