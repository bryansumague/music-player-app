import Link from 'next/link';
import Image from 'next/image';
import {formatDate} from '@/utils/dateHelpers';

export default function AlbumCard(data: Album) {
    return (
        <Link href={`/album/${data.id}`}>
            <div className="flex flex-col justify-between items-center bg-zinc-800 hover:bg-zinc-700 rounded-md">
                <div className="relative w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-t-md overflow-hidden bg-white">
                    <Image 
                        src={data.album_cover_image} 
                        alt={data.album_title} 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-t-md" 
                    />
                </div>
                <div className="flex py-3 justify-between w-full px-5 items-center">
                    <div>
                        <h3 className="font-bold">{data.album_title}</h3>
                        <p className="text-zinc-400 font-medium">{data.artist_name}</p>
                        <p className="text-zinc-500">Released on {formatDate(data.release_date)}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
}
