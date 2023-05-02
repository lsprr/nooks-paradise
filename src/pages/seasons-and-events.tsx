import { DataFetch } from '@/components/DataFetch';
import { fetchData } from '@/utils/api';

type SeasonAndEvent = {
    name: string;
    datesNorthernHemisphere: string;
    datesSouthernHemisphere: string;
};

const fetchFunction = () => {
    return fetchData('seasonsandevents');
};

const renderHeader = () => (
    <tr>
        <th colSpan={1} className="w-1/3 p-2 rounded-tl-2xl">Name</th>
        <th colSpan={3} className="p-2 rounded-tr-2xl">Northern Hemisphere Date</th>
        <th colSpan={3} className="p-2 rounded-tr-2xl">Southern Hemisphere Date</th>
    </tr>
);

const renderBody = (item: SeasonAndEvent, index: number) => {

    const renderHemisphereDates = () => {
        if (
            item.datesNorthernHemisphere !== null &&
            item.datesSouthernHemisphere !== null &&
            item.datesNorthernHemisphere.valueOf() === item.datesSouthernHemisphere.valueOf()
        ) {
            return (
                <td colSpan={6} className="p-2 border-t border-dashed border-darkGray dark:border-white">
                    {item.datesNorthernHemisphere}
                </td>
            );
        } else {
            return (
                <>
                    <td colSpan={3} className="p-2 border-t border-dashed border-darkGray dark:border-white">
                        {item.datesNorthernHemisphere || "-"}
                    </td>
                    <td colSpan={3} className="p-2 border-t border-dashed border-darkGray dark:border-white">
                        {item.datesSouthernHemisphere || "-"}
                    </td>
                </>
            );
        }
    };


    return (
        <>
            <tr key={`${index}-title`} className="border-t border-dashed border-darkGray dark:border-white">
                <td rowSpan={1} className="p-2 rounded-bl-2xl border-r border-dashed border-darkGray dark:border-white">
                    <b>{item.name}</b>
                </td>
                {renderHemisphereDates()}
            </tr>
        </>
    );
};

export default function SeasonsAndEvents() {
    return <DataFetch category="seasonsandevents" type="table" fetchFunction={fetchFunction} renderTableHeader={renderHeader} renderTableBody={renderBody} />;
}