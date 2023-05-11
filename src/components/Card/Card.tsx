import Link from 'next/link';
import Image from 'next/image';
import question from '@assets/images/question.webp';

type CardProps = {
    page: string;
    name: string;
    image?: StaticImageData | string;
}

export const Card = ({ page, name, image }: CardProps) => {
    const encodedName = encodeURIComponent(name.replace(/'/g, '').replace(/\s+/g, '-').toLowerCase());

    return (
        <>
            {name
                ?
                <Link href={`/${page}/${encodedName}`} className="block overflow-hidden group bg-background rounded-2xl">
                    <Image
                        src={image ? image : question}
                        alt=""
                        width={500}
                        height={500}
                        className="h-[350px] w-full transition duration-500 group-hover:scale-105 object-scale-down"
                        loading='lazy'
                    />

                    <div className="relative pt-3 pb-3 bg-creamWhite">
                        <h3
                            className="text-base text-center text-sienna group-hover:underline group-hover:underline-offset-4 capitalize"
                        >
                            {name}
                        </h3>
                    </div>
                </Link>
                :
                <div className="block overflow-hidden group bg-background">
                    <Image
                        src={image ? image : question}
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
