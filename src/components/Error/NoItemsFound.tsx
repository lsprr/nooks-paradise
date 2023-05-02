import Image from 'next/image';
import dalCrew from '@assets/images/orvilleAndWilbur.png';

export const NoItemsFound = () => {
    return (
        <section className="flex items-center justify-center mt-10 text-center flex-col">
            <Image
                src={dalCrew}
                alt='Primary Image'
                className="mb-8 w-40"
                width={500}
                height={500}
                loading="lazy"
            />
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="text-base font-semibold text-darkGray dark:text-white capitalize">
                    <div className="text-5xl">
                        <h1 className="mb-8">Oh dear, a little hiccup!</h1>
                    </div>
                    <h2 className="mb-8">
                        <span className="mb-8">It looks like there are no items on this island at the moment! 🍃</span><br />
                        <strong>Try tweaking your search, and let is discover some delightful treasures together! 🎁🏝️</strong>
                    </h2>
                </div>
            </div>
        </section>
    )
}