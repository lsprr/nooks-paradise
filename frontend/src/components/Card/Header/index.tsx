import Image from 'next/image';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type HeaderProps = {
    image?: StaticImageData;
    iconImage?: StaticImageData;
}

export const Header = ({ image, iconImage }: HeaderProps) => {
    return (
        <div className={`relative bg-darkBg dark:bg-lightBg cursor-pointer h-[300px]`}>
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
                        alt='Primary Image'
                        className="h-[300px] w-28 object-contain transition duration-500 group-hover:scale-150 m-auto relative"
                        width={100}
                        height={350}
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    )
};
