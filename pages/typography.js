export default function Typography() {
    return (
        <div className="mx-auto my-10 space-y-4 max-w-7xl">
            <h1 className="font-bold text-display-lg">Display large</h1>
            <h1 className="font-bold text-display-md">Display medium</h1>
            <h1 className="font-bold text-display-sm">Display small</h1>
            <h1 className="font-bold text-label-md">Label medium</h1>
            <h1 className="font-bold text-label-sm">Label small</h1>

            <p className="text-lg">Text large</p>
            <p className="text-md">Text medium</p>
            <p className="text-sm">Text small</p>
            <p className="text-xs">Text extrasmall</p>

            <div>
                <button className="px-4 py-2 font-bold rounded bg-primary-500 text-buttons-lg">
                    Buttons large
                </button>
            </div>
            <div>
                <button className="px-4 py-2 font-bold rounded bg-primary-500 text-buttons-sm">
                    Buttons small
                </button>
            </div>
        </div>
    );
}
