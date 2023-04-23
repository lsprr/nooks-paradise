import Image from 'next/image';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type InfoElementData = {
    text: string;
    alt: string;
    src: StaticImageData;
}

type CardProps = {
    name: string;
    image: StaticImageData;
    iconImage: StaticImageData;
    backgroundImage: StaticImageData;
    infoElements: InfoElementData[];
}

const InfoElement = ({ src, alt, text }: InfoElementData) => (
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 relative right-1">
        <Image src={src} alt={alt} className="w-8 h-8 fill-current" />
        <h2 className="px-2 text-sm text-[#2F3939] dark:text-[#F5EADD]">{text ? text : 'N/A'}</h2>
    </div>
);

const CardHeader = ({ name, image, iconImage, backgroundImage }: { name: string; image?: StaticImageData; iconImage?: StaticImageData; backgroundImage: StaticImageData; }) => (
    <div className="relative h-[300px]">
        <Image src={backgroundImage} alt="Background image" className="z-0 absolute" fill loading="lazy" />
        {iconImage && (
            <div
                className="absolute end-4 top-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <Image
                    src={iconImage}
                    alt="Icon Image"
                    className="object-scale-down h-10 w-10"
                    width={40}
                    height={40}
                    loading="lazy"
                />
            </div>
        )}
        {image && (
            <div className="group block overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    className="h-[300px] w-28 object-contain transition duration-500 group-hover:scale-150 m-auto relative"
                    width={100}
                    height={350}
                    loading="lazy"
                />
            </div>
        )}
    </div>
);

const CardTitle = ({ name }: { name: string }) => (
    <div className="flex items-center px-6 py-3 bg-[#78512C] dark:bg-[#A0CDA2]">
        <h1 className="mx-3 text-base font-semibold text-[#F5EADD] dark:text-[#2F3939] capitalize">{name}</h1>
    </div>
);

const CardInfo = ({ infoElements }: { infoElements: InfoElementData[] }) => (
    <div className="px-6 py-4">
        {infoElements.map((element, index) => (
            <InfoElement key={index} {...element} />
        ))}
    </div>
);

export const Card = ({ name, image, iconImage, backgroundImage, infoElements }: CardProps) => {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg dark:bg-[#2F3939]" role="group">
            <CardHeader name={name} image={image} iconImage={iconImage} backgroundImage={backgroundImage} />
            <CardTitle name={name} />
            <CardInfo infoElements={infoElements} />
        </div>
    );
};
