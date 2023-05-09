import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
    page: string;
    category: string;
    name: string;
    image: StaticImageData | string;
}

export const Card = ({ page, category, name, image }: CardProps) => {
    const encodedName = encodeURIComponent(name.replace(/'/g, '').replace(/\s+/g, '-').toLowerCase());

    return (
        <>
            {name
                ?
                <Link href={`/${page}/${encodedName}`} className="block overflow-hidden group bg-background rounded-2xl">
                    <Image
                        src={image}
                        alt=""
                        width={500}
                        height={500}
                        className="h-[350px] w-full transition duration-500 group-hover:scale-105 object-scale-down"
                        loading='lazy'
                    />

                    <div className="relative pt-3 pb-3 bg-white">
                        <h3
                            className="text-base text-center text-darkBlue group-hover:underline group-hover:underline-offset-4 capitalize"
                        >
                            {name}
                        </h3>

                        <p className="mt-2 text-center">
                            <span className="sr-only">{name}</span>
                            <span className="tracking-wider text-gray-900">{category}</span>
                        </p>
                    </div>
                </Link>
                :
                <div className="block overflow-hidden group bg-background">
                    <Image
                        src={image}
                        alt=""
                        width={500}
                        height={500}
                        className="h-[350px] w-full transition duration-500 group-hover:scale-105 sm:h-[450px] object-scale-down"
                        loading='lazy'
                    />
                </div>
            }
        </>
    );
};
