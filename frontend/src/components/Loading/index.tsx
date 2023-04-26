import Image from 'next/image';
import DAL from '@assets/gifs/DAL.gif';

export const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-brightBlue">
            <Image src={DAL} alt='Loading' />
        </div>
    )
}
