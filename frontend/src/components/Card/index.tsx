import Image from 'next/image';
import acnhBg from '@assets/images/background.jpg';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type InfoElementProps = {
    src: string | StaticImageData;
    alt: string;
    text: string;
}

const InfoElement = ({ src, alt, text }: InfoElementProps) => (
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 relative right-1">
        <Image src={src} alt={alt} className="w-8 h-8 fill-current" />
        <h2 className="px-2 text-sm text-[#2F3939] dark:text-[#F5EADD]">{text ? text : 'N/A'}</h2>
    </div>
);

type CardProps = {
    secondaryImage?: string;
    primaryImage: string;
    name: string;
    infoElements: InfoElementProps[];
}

export const Card = ({ secondaryImage, primaryImage, name, infoElements }: CardProps) => {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg dark:bg-[#2F3939]" role="group">
            <div className="relative">
                <Image src={acnhBg} alt="Background image" className="z-0 absolute h-full" />
                {secondaryImage &&
                    <div
                        className="absolute end-4 top-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                    >
                        <Image
                            src={secondaryImage}
                            alt="Icon Image"
                            className="object-scale-down h-10 w-10"
                            width={40}
                            height={40}
                            loading="lazy"
                        />
                    </div>
                }
                <div className="group block overflow-hidden">
                    <Image
                        src={primaryImage}
                        alt={name}
                        className="h-[300px] w-28 object-contain transition duration-500 group-hover:scale-150 m-auto relative"
                        width={100}
                        height={350}
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="flex items-center px-6 py-3 bg-[#78512C] dark:bg-[#A0CDA2]">
                <h1 className="mx-3 text-base font-semibold text-[#F5EADD] dark:text-[#2F3939] capitalize">{name}</h1>
            </div>
            <div className="px-6 py-4">
                {infoElements.map((element, index) => (
                    <InfoElement key={index} {...element} />
                ))}
            </div>
        </div>
    );
};
