import { DataFetch } from '@hoc/DataFetch';
import { fetchData } from '@/utils/api';

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

const fetchFunction = () => {
    return fetchData('achievements');
};

const renderHeader = () => (
    <tr>
        <th colSpan={1} className="w-1/3 p-2 rounded-tl-2xl">Name &amp; Description</th>
        <th colSpan={3} className="p-2 rounded-tr-2xl">Details &amp; Rewards</th>
    </tr>
);

const renderBody = (item: Achievement, index: number) => {
    const tiersLength = Object.keys(item.tiers).length;
    return (
        <>
            <tr key={`${index}-title`} className="border-t border-b border-dashed border-darkGray dark:border-white">
                <td rowSpan={tiersLength + 1} className="p-2 rounded-bl-2xl border-r border-dashed border-darkGray dark:border-white">
                    <b>{item.name}</b> <br /> {item.achievementDescription}
                </td>
                <td colSpan={3} className="p-2 border-t border-dashed border-darkGray dark:border-white">
                    <b>Criteria</b><br /> {item.achievementCriteria}
                </td>
            </tr>
            {Object.entries(item.tiers).map(([key, tier], tierIndex) => (
                <tr key={`${index}-${key}`}>
                    <td className="p-2">
                        {tierIndex === 0 && (
                            <div className="font-bold">Milestones</div>
                        )}
                        <ol>
                            <li>
                                {key}
                            </li>
                        </ol>
                    </td>
                    <td className="p-2">
                        {tierIndex === 0 && (
                            <div className="font-bold">Passport Titles</div>
                        )}
                        <ol>
                            {tier.nouns.map((noun, i) => (
                                <li key={`${noun}-${i}`}>
                                    <span className="bg-green-100 text-green-700 border border-green-300 border-r-0 rounded-l px-1 py-0.5 mr-1 inline-block">{tier.modifier}</span>
                                    <span className="bg-green-100 text-green-700 border border-green-300 border-l-0 rounded-r px-1 py-0.5 inline-block">{noun}</span>
                                </li>
                            ))}
                        </ol>
                    </td>
                    <td className="p-2">
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
    return <DataFetch category="achievements" type="table" fetchFunction={fetchFunction} renderTableHeader={renderHeader} renderTableBody={renderBody} />;
}