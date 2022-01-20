import { useRouter } from 'next/router';
import Layout from '../components/Layouts/Layout';
import Button from '../components/Button/Button';

export default function NotFound() {
    const router = useRouter();

    return (
        <Layout>
            <div className="bg-neutral-50 h-[670px] flex items-center">
                <div className="flex-col justify-center mx-auto">
                    <img
                        src="/images/404.png"
                        alt="404"
                        className="w-auto mx-auto h-72"
                    />
                    <p className="my-10 font-extrabold text-center text-display-sm">
                        Oh, no! This page does not exist.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            variant="primary"
                            size="md"
                            title="Go to home page"
                            className="w-[260px]"
                            onClick={() => router.push('/')}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
