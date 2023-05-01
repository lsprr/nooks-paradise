import Image from 'next/image';
import dalCrew from '@assets/images/orvilleAndWilbur.png';

export const ApiError = () => {
    return (
        <section className="w-screen flex items-center justify-center mt-10 text-center flex-col">
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
                    <p className="mb-8">
                        <h2 className="mb-8">Whoops-a-daisy! It seems we have run into a little snag while gathering data from our API. No worries, though! Please give it another whirl later.</h2>
                        <strong>We are so grateful for your patience and understanding. Have a delightful day! 🍃</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}