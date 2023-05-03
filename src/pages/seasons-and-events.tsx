import { DataFetch } from '@/components/DataFetch';
import { useFetchData } from '@/hooks/useFetchData';

type SeasonAndEvent = {
    name: string;
    datesNorthernHemisphere: string;
    datesSouthernHemisphere: string;
};

const renderHeader = () => (
    <tr>
        <th colSpan={1} className="w-full md:w-1/3 p-2 rounded-tl-2xl text-xs md:text-base">Name</th>
        <th colSpan={3} className="p-2 rounded-tr-2xl text-xs md:text-base">Northern Hemisphere Date</th>
        <th colSpan={3} className="p-2 rounded-tr-2xl text-xs md:text-base">Southern Hemisphere Date</th>
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
                <td colSpan={6} className="p-1 md:p-2 border-t border-dashed border-darkGray dark:border-white text-xs md:text-base">
                    {item.datesNorthernHemisphere}
                </td>
            );
        } else {
            return (
                <>
                    <td colSpan={3} className="p-1 md:p-2 border-t border-dashed border-darkGray dark:border-white text-xs md:text-base">
                        {item.datesNorthernHemisphere || "-"}
                    </td>
                    <td colSpan={3} className="p-1 md:p-2 border-t border-dashed border-darkGray dark:border-white text-xs md:text-base">
                        {item.datesSouthernHemisphere || "-"}
                    </td>
                </>
            );
        }
    };

    return (
        <>
            <tr key={`${index}-title`} className="border-t border-b border-dashed border-darkGray dark:border-white">
                <td rowSpan={1} className="p-1 md:p-2 rounded-bl-2xl border-r border-dashed border-darkGray dark:border-white text-xs md:text-base">
                    <b>{item.name}</b> <br />
                </td>
                {renderHemisphereDates()}
            </tr>
        </>
    );
};

export default function SeasonsAndEvents() {
    const fetchFunction = useFetchData();

    return <DataFetch
        category="seasonsandevents"
        type="table"
        fetchFunction={() => fetchFunction('seasonsandevents', 0, 0)}
        renderTableHeader={renderHeader}
        renderTableBody={renderBody}
    />
}