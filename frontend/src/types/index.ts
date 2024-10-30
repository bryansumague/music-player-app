interface Track {
    id: string;
    title: string;
    duration: string;
    mp3_link: string;
  }
  
  interface Album {
    id: string;
    album_cover_image: string;
    album_title: string;
    artist_name: string;
    release_date: string;
    tracks: number | Track[];
  }
  
  interface AlbumsProps {
    albums: Album[];
    withTracks: boolean;
  }