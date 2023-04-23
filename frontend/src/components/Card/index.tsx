import { Header } from '@components/Card/Header';
import { Title } from '@components/Card/Title';
import { Info } from '@components/Card/Info';

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
    name?: string;
    image?: StaticImageData;
    iconImage?: StaticImageData;
    backgroundImage?: StaticImageData;
    infoElements: InfoElementData[];
}

export const Card = ({ name, image, iconImage, backgroundImage, infoElements }: CardProps) => {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg dark:bg-[#2F3939]" role="group">
            <Header image={image} iconImage={iconImage} backgroundImage={backgroundImage} />
            <Title name={name} />
            <Info infoElements={infoElements} />
        </div>
    );
};
