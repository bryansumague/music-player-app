'use client';
import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { searchAlbums } from '@/utils/fetchAlbums';
import Link from 'next/link';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery) return;

        setLoading(true);
        try {
            const results = await searchAlbums(searchQuery);
            setSearchResults(results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleLinkClick = () => {
        setLoading(false);
        setSearchResults([]);
    };

    return (
        <div className="relative">
            <div className="flex items-center bg-zinc-800 rounded-full w-full md:w-[400px] overflow-hidden pl-4">
                <IconSearch
                    size={24}
                    stroke={1}
                    strokeLinejoin="miter"
                    className="text-zinc-400"
                />
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="bg-transparent px-3 py-2 w-full border-transparent focus:border-transparent focus:ring-0 outline-none"
                        placeholder="Search Album"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </div>
            {loading && <p>Loading results...</p>}
            {!loading && searchResults.length > 0 && (
                <div className="absolute bg-zinc-800 rounded-md mt-2 p-2 w-full">
                    <div className="flex flex-col divide-y divide-zinc-700">
                        {searchResults.map((result) => (
                            <Link
                                href={`/album/${result.id}`}
                                onClick={handleLinkClick}
                                key={result.id}
                                className="p-2 hover:bg-zinc-700 cursor-pointer"
                            >
                                <p className='font-bold'>{result.album_title}</p>
                                <span className='text-sm'>{result.artist_name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
