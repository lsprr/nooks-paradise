import { CardHeader } from '@/components/Card/CardHeader';
import { CardTitle } from '@/components/Card/CardTitle';

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
}

type CardProps = {
    name?: string;
    image?: StaticImageData;
    interactive?: boolean;
}

export const Card = ({ name, image, interactive }: CardProps) => {
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-lg dark:bg-[#2F3939]" role="group">
            <CardHeader image={image} interactive={interactive} />
            <CardTitle name={name} />
        </div>
    );
};
