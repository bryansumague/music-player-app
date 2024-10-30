'use client'
import { useEffect, useState } from 'react';
import { fetchAlbums } from '@/utils/fetchAlbums';
import AlbumCard from '@/components/AlbumCard';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const loadAlbums = async () => {
      setLoading(true);
      const newAlbums = await fetchAlbums(page, true);
      setAlbums((prevAlbums) => [...prevAlbums, ...newAlbums]);
      setHasMore(newAlbums.length > 0);
      setLoading(false);
    };

    loadAlbums();
  }, [page]);

  const loadMoreAlbums = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {albums.map((album, i) => (
          <AlbumCard key={i} {...album} />
        ))}
      </div>
      {loading && <p>Loading more albums...</p>}
      {hasMore && !loading && (
        <div className='flex justify-center mt-10 border-t-2 border-zinc-700'>
          <button
          onClick={loadMoreAlbums}
          className="mt-4 py-2 px-5 bg-zinc-700 font-bold text-white rounded-lg text-lg"
        >
          Load More
        </button>
        </div>
      )}
      {!hasMore && <p className="mt-4 text-center bg-zinc-800 text-zinc-500 py-2 text-lg text-bold mt-10
      ">No more albums to load.</p>}
    </div>
  );
};

export default AlbumsPage;
