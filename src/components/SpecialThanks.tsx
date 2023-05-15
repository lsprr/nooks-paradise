import Link from 'next/link'

export const SpecialThanks = () => (
    <>
        <div className="text-left text-darkGray sm:text-xl" id="modal-description">
            <h3 className="font-bold">Special Thanks</h3>
            <p className="mt-4">
                Big ol&apos; thanks to resources like Animal Crossing Database by Norviah and Google Spreadsheets for Animal Crossing: New Horizons for their info! Some conflicting tidbits were ironed out,
                but feel free to check &apos;em out for more details.
            </p>
            <p className="mt-4">
                Hats off to Nintendo for creatin&apos; yet another amazin&apos; Animal Crossing adventure!
            </p>
            <h3 className="mt-8 font-bold">General Legal Yap-yap</h3>
            <p className="mt-4">
                Wilbur is a fan-made website, just a handy info guide with no ties to Nintendo.
            </p>
            <p className="mt-4">
                All those original critter thingamajigs, icons, and fancy images belong to Nintendo, and Animal Crossing&apos;s their registered trademark.
            </p>
            <p className="mt-4">
                For more game info, <Link className="text-sienna group-hover:underline group-hover:underline-offset-4" href="https://www.animal-crossing.com/new-horizons/" target="_blank" rel="noopener noreferrer">head over to the official Animal Crossing: New Horizons site</Link>.
            </p>
        </div>
    </>
)
