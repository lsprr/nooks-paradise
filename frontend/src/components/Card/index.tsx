import { Header } from '@components/Card/Header';
import { Title } from '@components/Card/Title';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type CardProps = {
    name?: string;
    image?: StaticImageData;
    iconImage?: StaticImageData;
}

export const Card = ({ name, image, iconImage }: CardProps) => {
    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg dark:bg-[#2F3939]" role="group">
            <Header image={image} iconImage={iconImage} />
            <Title name={name} />
        </div>
    );
};
