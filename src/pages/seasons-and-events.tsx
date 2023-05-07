import { DataView } from '@/components/DataView';
import { useFetchData } from '@/hooks/useFetchData';

type SeasonAndEvent = {
    name: string;
    datesNorthernHemisphere: string;
    datesSouthernHemisphere: string;
};

const renderHeader: () => JSX.Element = () => (
    <div className='bg-lightBeige flex flex-wrap p-2 justify-center items-center rounded-2xl' role="row">
        <div className="w-full md:w-1/3 p-2 text-xs md:text-base font-bold" role="columnheader">Name</div>
        <div className="w-full md:w-1/3 p-2 text-xs md:text-base font-bold" role="columnheader">Northern Hemisphere Date</div>
        <div className="w-full md:w-1/3 p-2 text-xs md:text-base font-bold" role="columnheader">Southern Hemisphere Date</div>
    </div>
);

const renderBody: (item: SeasonAndEvent, index: number) => JSX.Element = (item, index) => {
    const renderHemisphereDates = () => {
        if (
            item.datesNorthernHemisphere !== null &&
            item.datesSouthernHemisphere !== null &&
            item.datesNorthernHemisphere.valueOf() === item.datesSouthernHemisphere.valueOf()
        ) {
            return (
                <div className="w-full md:w-2/3 p-2 text-xs md:text-base" role="cell" tabIndex={0} aria-label={`Both hemisphere dates: ${item.datesNorthernHemisphere}`}>
                    <b>Both:</b> {item.datesNorthernHemisphere}
                </div>
            );
        } else {
            return (
                <>
                    <div className="w-full md:w-1/3 p-2 text-xs md:text-base" role="cell" tabIndex={0} aria-label={`Northern hemisphere date: ${item.datesNorthernHemisphere || '-'}`}>
                        <b>N:</b> {item.datesNorthernHemisphere || "-"}
                    </div>
                    <div className="w-full md:w-1/3 p-2 text-xs md:text-base" role="cell" tabIndex={0} aria-label={`Southern hemisphere date: ${item.datesSouthernHemisphere || '-'}`}>
                        <b>S:</b> {item.datesSouthernHemisphere || "-"}
                    </div>
                </>
            );
        }
    };

    return (
        <div className='season-event-row flex flex-wrap p-2 border-t border-dashed border-darkGray dark:border-white items-center' key={index} role="row">
            <div className="w-full md:w-1/3 p-2 text-xs md:text-base font-bold border-r border-dashed border-darkGray dark:border-white capitalize" role="cell" tabIndex={0} aria-label={`Name: ${item.name}`}>
                {item.name}
            </div>
            {renderHemisphereDates()}
        </div>
    );
};

export default function SeasonsAndEvents() {
    const fetchFunction = useFetchData();

    return (
        <DataView
            category="seasonsandevents"
            viewType="table"
            fetchFunction={() => fetchFunction('seasonsandevents', 0, 0)}
            renderTableHeader={renderHeader}
            renderTableBody={renderBody}
        />
    );
}