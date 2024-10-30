"use client";
import { useEffect, useState } from 'react';
import Playlist from '@/components/Playlist';
import { fetchAlbum } from '@/utils/fetchAlbums';
import { formatDate } from '@/utils/dateHelpers';


export default function Album({ params }: { params: Promise<{ id: string }> }) {
    const [albumData, setAlbumData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAlbumData = async () => {
            try {
                const { id } = await params;
                const data = await fetchAlbum(id);
                setAlbumData(data);
            } catch (error) {
                console.error("Error fetching album data:", error);
            } finally {
                setLoading(false);
            }
        };

        getAlbumData();
    }, [params]);

    if (loading) return <div>Loading...</div>;

    if (!albumData) return <div>No album found.</div>;

    return (
        <div className="flex flex-col md:flex-row justify-center space-x-5 p-10">
        <div className="w-full md:w-80">
            <img
                src={albumData.album_cover_image || "https://via.placeholder.com/150"}
                alt={albumData.album_title}
                className="w-full h-auto object-cover rounded-md"
            />
        </div>
        <div className="flex-1 pt-5">
            <h1 className="text-3xl font-bold">{albumData.album_title}</h1>
            <p className="text-xl text-zinc-300 mt-2">{albumData.artist_name}</p>
            <p className="text-xl text-zinc-400 mt-2">Released on {formatDate(albumData.release_date)}</p>
        </div>
        <div className="flex-1 pt-5">
            <h3 className="text-xl font-bold">Tracklist</h3>
            <Playlist data={{ tracks: albumData.tracks }} />
        </div>
    </div>
    );
}
