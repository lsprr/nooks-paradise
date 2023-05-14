import Link from 'next/link'

export const SpecialThanks = () => (
    <div className="container mx-auto mt-10 mb-10">
        <div className="mx-auto max-w-3xl pt-12 pb-12">
            <h2 className="text-3xl text-darkGray sm:text-4xl" id="thanks">
                Special Thanks
            </h2>
            <p className="mt-4 text-gray-500 sm:text-xl">
                Big ol&apos; thanks to resources like Animal Crossing Database by Norviah and Google Spreadsheets for Animal Crossing: New Horizons for their info! Some conflicting tidbits were ironed out,
                but feel free to check &apos;em out for more details.
            </p>
            <p className="mt-4 text-gray-500 sm:text-xl">
                Hats off to Nintendo for creatin&apos; yet another amazin&apos; Animal Crossing adventure!
            </p>
        </div>
        <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl text-darkGray sm:text-4xl" id="legal">
                General Legal Yap-yap
            </h2>
            <p className="mt-4 text-gray-500 sm:text-xl">
                Wilbur is a fan-made website, just a handy info guide with no ties to Nintendo.
            </p>
            <p className="mt-4 text-gray-500 sm:text-xl">
                All those original critter thingamajigs, icons, and fancy images belong to Nintendo, and Animal Crossing&apos;s their registered trademark.
            </p>
            <p className="mt-4 text-gray-500 sm:text-xl">
                For more game info, <Link className="text-sienna group-hover:underline group-hover:underline-offset-4" href="https://www.animal-crossing.com/new-horizons/" target="_blank" rel="noopener noreferrer">head over to the official Animal Crossing: New Horizons site</Link>.
            </p>
        </div>
    </div>
)
