export default function AlbumCardSmall() {
    return (
        <div className="flex justify-between items-center bg-zinc-800 hover:bg-zinc-700 rounded-md p-3 py-2 divide-x divide-zinc-700">
        <div className="flex space-x-3 items-center">
            <img
                src="https://via.placeholder.com/150"
                alt="Album Cover"
                className="w-16 h-16 rounded-md"
            />
            <div>
                <h3 className="font-bold">Album Name</h3>
                <p className="text-zinc-500">Artist Name</p>
            </div>
        </div>
        <div className="flex flex-col text-center pl-3">
            <div className="font-bold">5</div>
            <div className="text-sm text-zinc-400">songs</div>
        </div>
    </div>
    );
}