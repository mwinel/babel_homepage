import Layout from '../components/Layouts/Layout';
import ContentPanel from '../components/ContentPanel/ContentPanel';

export default function Home() {
    return (
        <Layout showNavbar={false}>
            <ContentPanel>Hello there!</ContentPanel>
        </Layout>
    );
}
