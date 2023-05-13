import Link from 'next/link';
import Image from 'next/image';
import wilbur from '@assets/images/wilbur.webp';

export const ApiError = () => {
    return (
        <section>
            <div className="grid h-screen px-4 bg-creamWhite place-content-center text-center">
                <div className="flex flex-col items-center">
                    <Image src={wilbur} alt="wilbur" loading='lazy' />
                    <p className="text-2xl font-bold tracking-tight text-darkGray sm:text-4xl">
                        Oh dear, a little hiccup!
                    </p>
                    <p className="mt-4 text-darkGray">Whoops-a-daisy! It seems we have run into a little snag while gathering data from our API. No worries, though! Please give it another whirl later.</p>
                    <strong>We are so grateful for your patience and understanding. Have a delightful day! 🍃</strong>
                    <Link
                        href="/"
                        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-brightBlue rounded hover:bg-brightBlue focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </section>
    )
}