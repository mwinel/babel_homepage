import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default function Layout({
    children,
    showNavbar = true,
    showFooter = true,
}) {
    return (
        <div>
            {showNavbar && <Nav />}
            <main>{children}</main>
            {showFooter && <Footer />}
        </div>
    );
}
