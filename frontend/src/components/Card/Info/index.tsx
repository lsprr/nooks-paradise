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

const InfoElement = ({ src, alt, text }: InfoElementData) => (
    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200 relative right-1">
        <Image src={src} alt={alt} className="w-8 h-8 fill-current" />
        <h2 className="px-2 text-sm text-[#2F3939] dark:text-[#F5EADD] capitalize">{text ? text : 'N/A'}</h2>
    </div>
);

export const Info = ({ infoElements }: { infoElements: InfoElementData[] }) => {
    return (
        <div className="px-6 py-4">
            {infoElements.map((element, index) => (
                <InfoElement key={index} {...element} />
            ))}
        </div>
    )
};