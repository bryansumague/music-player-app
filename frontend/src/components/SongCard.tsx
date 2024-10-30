import { IconPlayerPlayFilled } from '@tabler/icons-react';

interface SongCardProps {
    track: Track;
    onClick: () => void;
    isActive: boolean;
}

export default function SongCard({
    track,
    onClick,
    isActive
}: SongCardProps) {
    if (!track || !track.id) return null;

    return (
        <div
            onClick={onClick}
            className={`flex justify-between items-center bg-zinc-800 hover:bg-zinc-700 rounded-md p-3 py-2 mt-3 cursor-pointer ${
                isActive ? "bg-zinc-700 border-l-4 border-green-500" : ""
            }`}
        >
            <div className="flex space-x-3 items-center">
                <div>
                    <h3 className="font-bold">{track.title}</h3>
                </div>
            </div>
            <IconPlayerPlayFilled className="text-green-500" />
        </div>
    );
}
