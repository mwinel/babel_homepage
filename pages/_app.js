import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-urbanist">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
