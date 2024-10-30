'use client';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '@/styles/custom-audio-player.css';
import SongCard from '@/components/SongCard';

interface PlaylistProps {
    data: {
        tracks: Track[];
    };
}

export default function Playlist({ data }: PlaylistProps) {
    const tracks = data.tracks;
    const [currentSong, setCurrentSong] = useState<Track>(tracks[0]);

    console.log('trackss',tracks)
    return (
        <div>
            <div className="space-y-4 mb-5">
                {tracks.map((track) => (
                    <SongCard
                        key={track.id}
                        track={track}
                        onClick={() => setCurrentSong(track)}
                        isActive={currentSong.id === track.id}
                    />
                ))}
            </div>
            <AudioPlayer
                autoPlay
                src={currentSong.mp3_link}
                onPlay={() => console.log(`Playing ${currentSong.title}`)}
                loop
            />
        </div>
    );
}
