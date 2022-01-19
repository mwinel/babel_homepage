import Layout from '../components/Layouts/Layout';
import Logo from '../components/Logo/Logo';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import Button from '../components/Button/Button';

export default function Home() {
    return (
        <Layout showNavbar={false}>
            <div className="">
                <ContentPanel>
                    <div className="h-[115px] flex items-center justify-center">
                        <Logo />
                    </div>
                    <div className="h-[785px]">
                        <h1 className="text-display-lg font-extrabold tracking-tight text-center text-transparent">
                            <span className="bg-clip-text bg-gradient-to-r from-gradient to-gradient-2">
                                Privacy
                            </span>{' '}
                            <span className="bg-clip-text bg-gradient-to-r from-gradient-2 to-gradient-3">
                                First
                            </span>
                        </h1>

                        <h1 className="text-display-lg font-extrabold tracking-tight text-center">
                            Discussion Platform
                        </h1>

                        <p className="text-lg text-center my-4 text-primary-600">
                            A safe space to share your views on issues that
                            affect your life
                        </p>

                        <div className="flex justify-center items-center space-x-4">
                            <Button
                                variant="primary"
                                size="md"
                                title="Register Now"
                                className="w-[190px]"
                            />
                            <Button
                                variant="secondary"
                                size="md"
                                title="Log in"
                                className="w-[190px]"
                            />
                        </div>
                    </div>
                </ContentPanel>
            </div>
        </Layout>
    );
}
