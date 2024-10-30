export const fetchAlbums = async (page: number, withTracks: boolean) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/albums?with_tracks=${withTracks}&page=${page}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch albums');
    }
    return response.json();
};

export const fetchAlbum = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/albums/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch album');
    }
    return response.json();
}

export const searchAlbums = async (query: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/albums/search?q=${query}`);
    if (!response.ok) {
        throw new Error('Failed to search albums');
    }
    return response.json();
}