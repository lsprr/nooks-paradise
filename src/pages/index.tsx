import Link from "next/link"

export default function Home() {
  return (
    <section className="bg-creamWhite">
      <div className="mx-auto max-w-screen-xl px-4 pt-12 sm:px-6 md:pt-16 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl text-DarkGray sm:text-4xl" id="welcome">
            Welcome to Nook&apos;s Paradise, folks!
          </h1>
          <p className="mt-4 text-gray-500 sm:text-xl">
            This is your one-stop co-pilot for all things Animal Crossing: New Horizons!
            We got you covered on neighbors, island life, fashion, DIY, critters, K.K. Slider tunes,
            and special events.
          </p>
          <p className="mt-4 text-gray-500 sm:text-xl">
            So buckle up, and let&apos;s fly through the fantastic world of ACNH together!
          </p>
        </div>
        <div className="mx-auto max-w-3xl pt-12 pb-12">
          <h2 className="text-3xl text-DarkGray sm:text-4xl" id="thanks">
            Special Thanks
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
            Big ol&apos; thanks to resources like Nookipedia and Animal Crossing Wiki for their info! Some conflicting tidbits were ironed out,
            but feel free to check &apos;em out for more details.
          </p>
          <p className="mt-4 text-gray-500 sm:text-xl">
            Hats off to Nintendo for creatin&apos; yet another amazin&apos; Animal Crossing adventure!
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl text-DarkGray sm:text-4xl" id="legal">
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
        <div className="mx-auto max-w-3xl pt-12 pb-20">
          <h2 className="text-3xl text-DarkGray sm:text-2xl italic" id="signoff">
            This is your captain Wilbur, signin' off. Happy island-hoppin'!
          </h2>
        </div>
      </div>
    </section>
  )
}
