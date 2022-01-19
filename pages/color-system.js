export default function Home() {
    return (
        <div className="mx-auto my-10 max-w-7xl">
            <h1 className="text-4xl font-extrabold text-primary-800">
                Color system
            </h1>
            <h1 className="mt-4 text-2xl font-extrabold text-neutral-700">
                Neutral
            </h1>
            <div className="flex space-x-1">
                <button className="px-4 py-2 rounded bg-neutral-50">
                    neutral 50
                </button>
                <button className="px-4 py-2 rounded bg-neutral-100">
                    neutral 100
                </button>
                <button className="px-4 py-2 rounded bg-neutral-200">
                    neutral 200
                </button>
                <button className="px-4 py-2 rounded bg-neutral-300">
                    neutral 300
                </button>
                <button className="px-4 py-2 rounded bg-neutral-400">
                    neutral 400
                </button>
                <button className="px-4 py-2 rounded bg-neutral-500">
                    neutral 500
                </button>
                <button className="px-4 py-2 rounded bg-neutral-600">
                    neutral 600
                </button>
                <button className="px-4 py-2 rounded bg-neutral-700">
                    neutral 700
                </button>
                <button className="px-4 py-2 rounded bg-neutral-800">
                    neutral 800
                </button>
            </div>
            <h1 className="mt-4 text-2xl font-extrabold text-primary-700">
                Primary
            </h1>
            <div className="flex space-x-1">
                <button className="px-4 py-2 rounded bg-primary-50">
                    primary 50
                </button>
                <button className="px-4 py-2 rounded bg-primary-100">
                    primary 100
                </button>
                <button className="px-4 py-2 rounded bg-primary-200">
                    primary 200
                </button>
                <button className="px-4 py-2 rounded bg-primary-300">
                    primary 300
                </button>
                <button className="px-4 py-2 rounded bg-primary-400">
                    primary 400
                </button>
                <button className="px-4 py-2 rounded bg-primary-500">
                    primary 500
                </button>
                <button className="px-4 py-2 rounded bg-primary-600">
                    primary 600
                </button>
                <button className="px-4 py-2 rounded bg-primary-700">
                    primary 700
                </button>
                <button className="px-4 py-2 rounded bg-primary-800">
                    primary 800
                </button>
            </div>
        </div>
    );
}
