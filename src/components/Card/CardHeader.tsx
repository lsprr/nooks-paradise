import Image from 'next/image';
import { SimpleViewButton } from '../Button/SimpleViewButton';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type CardHeaderProps = {
    image?: StaticImageData;
    interactive?: boolean;
}

export const CardHeader = ({ image, interactive }: CardHeaderProps) => {
    return (
        <div className={`relative bg-darkBg dark:bg-lightBg h-[300px]`}>
            {interactive && (
                <div
                    className="absolute end-4 top-4 rounded-full bg-white dark:bg-darkGray p-1.5 cursor-pointer"
                >
                    <SimpleViewButton />
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
