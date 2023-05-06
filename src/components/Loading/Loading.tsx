import Image from 'next/image';
import DAL from '@assets/gifs/DAL.gif';

export const Loading = () => {
    return (
        <div className="inset-0 flex items-center justify-center z-50 bg-brightBlue h-screen">
            <Image src={DAL} alt='Loading' />
        </div>
    )
}
