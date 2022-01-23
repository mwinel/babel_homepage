import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

export default function Layout({
    children,
    showNavbar,
    showFooter = true,
}) {
    return (
        <div>
            <Nav showNavbar={showNavbar} />
            <main>{children}</main>
            {showFooter && <Footer />}
        </div>
    );
}
