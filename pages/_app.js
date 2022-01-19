import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-urbanist text-primary-800">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
