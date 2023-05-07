import Image from 'next/image';
import wilbur from '@assets/images/wilbur.png';

export const NoItemsFound = () => {
    return (
        <section className="mt-8 mb-8">
            <div className="grid h-screen px-4 bg-white place-content-center rounded-2xl text-center">
                <div className="flex flex-col items-center">
                    <Image src={wilbur} alt="wilbur" loading='lazy' />
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Oh dear, a little hiccup!
                    </p>
                    <p className="mt-4 text-gray-500">It looks like there are no items on this island at the moment! 🍃</p>
                    <strong>Try tweaking your search, and let is discover some delightful treasures together! 🎁🏝️</strong>
                </div>
            </div>
        </section>
    )
}