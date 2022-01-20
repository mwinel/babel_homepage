import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/Layouts/Layout';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import Button from '../components/Button/Button';

export default function NotFound() {
    const router = useRouter();

    return (
        <Layout>
            <div className="bg-neutral-50 h-full py-20 flex flex-col items-center lg:flex-row lg:py-28">
                <ContentPanel>
                    <div className="flex-col justify-center mx-auto">
                        <Image
                            src="/images/404.png"
                            alt="404"
                            width={661}
                            height={277}
                        />
                        <p className="my-10 font-extrabold text-center tracking-tight text-display-sm">
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
                </ContentPanel>
            </div>
        </Layout>
    );
}
