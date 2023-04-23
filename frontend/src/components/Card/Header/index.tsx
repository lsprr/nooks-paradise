import Image from 'next/image';

export const Header = ({ name, image, iconImage, backgroundImage }: { name: string; image?: StaticImageData; iconImage?: StaticImageData; backgroundImage: StaticImageData; }) => {
    return (
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
    )
};
