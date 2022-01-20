import Layout from '../components/Layouts/Layout';
import Logo from '../components/Logo/Logo';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import Button from '../components/Button/Button';
import GetInTouch from '../components/GetInTouchForm/GetInTouchForm';

export default function Home() {
    return (
        <Layout showNavbar={false}>
            <div>
                {/* Hero Section */}
                <div
                    className="bg-bottom bg-no-repeat bg-cover h-[915px] top-0 left-0"
                    style={{
                        backgroundImage: `url("/images/group.png")`,
                    }}
                >
                    <div className="h-[115px] flex items-center justify-center">
                        <Logo />
                    </div>
                    <div className="h-full">
                        <div className="mt-0">
                            <div className="flex -space-x-8 justify-center items-center">
                                <h1 className="text-display-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gradient to-gradient-2">
                                    Privacy
                                </h1>
                                <div className="w-40 h-40 flex items-center justify-center relative">
                                    <img
                                        src="/images/glow_hero.png"
                                        className="w-40 h-40"
                                    />
                                    <div className="w-32 h-32 z-20 absolute">
                                        <img
                                            src="/images/shield_hero.png"
                                            className="w-32 h-32"
                                        />
                                    </div>
                                </div>
                                <h1 className="text-display-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gradient-2 to-gradient-3">
                                    First
                                </h1>
                            </div>
                            <h1 className="text-display-lg font-extrabold tracking-tight text-center -mt-10">
                                Discussion Platform
                            </h1>
                            <p className="text-lg text-center mt-4 text-primary-600">
                                A safe space to share your views on issues that
                                affect your life
                            </p>
                            <div className="flex justify-center items-center space-x-4 mt-6">
                                <Button
                                    variant="primary"
                                    size="md"
                                    title="Register now"
                                    className="w-[190px]"
                                />
                                <Button
                                    variant="secondary"
                                    size="md"
                                    title="Log in"
                                    className="w-[190px]"
                                />
                            </div>

                            <div className="w-[896px] mx-auto flex items-center justify-center ">
                                <img
                                    src="/images/hero_masked.png"
                                    className="w-auto absolute -mt-[67px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Benefits section */}
                <div className="bg-neutral-50 py-20">
                    <ContentPanel>
                        <p className="uppercase tracking-wide text-primary-500 text-center">
                            INCLUSION AND PRIVACY MATTERS
                        </p>
                        <h1 className="text-display-md font-extrabold tracking-tight text-center mt-2">
                            Everyone is invited.
                        </h1>
                        <h1 className="text-display-md font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3">
                            Everyone&apos;s identity is protected.
                        </h1>
                        <p className="text-center text-lg my-6 text-neutral-700 w-7/12 mx-auto">
                            BABEL is designed for minorities, refugees, and
                            communities. We do not discriminate against anyone
                            who participates in the discussions. Everyone&apos;s
                            opinions are anonymous and cannot be traced back to
                            you IRL.
                        </p>
                        <div className="flex space-x-8 mt-20">
                            <div className="w-4/12 bg-neutral p-10 rounded-[8px] shadow-xl">
                                <p className="text-center text-label-md text-neutral-700 font-bold px-10">
                                    Blockchain-Based Authentication
                                </p>
                                <p className="text-center text-sm text-neutral-600 mt-5 px-4">
                                    The identity is managed on the blockchain,
                                    where it is impossible to edit or forge it
                                    without your consent.
                                </p>
                            </div>
                            <div className="w-4/12 bg-neutral p-10 rounded-[8px] shadow-xl">
                                <p className="text-center text-label-md text-neutral-700 font-bold px-10">
                                    Verified Discussion Forum
                                </p>
                                <p className="text-center text-sm text-neutral-600 mt-5 px-4">
                                    Voting is reliable and transparent. No
                                    individual user can cheat or influence the
                                    voting results.
                                </p>
                            </div>
                            <div className="w-4/12 bg-neutral p-10 rounded-[8px] shadow-xl">
                                <p className="text-center text-label-md text-neutral-700 font-bold px-10">
                                    User Anonymity and Security
                                </p>
                                <p className="text-center text-sm text-neutral-600 mt-5 px-4">
                                    Third parties, including the system itself,
                                    have no access to your personal data.
                                </p>
                            </div>
                        </div>
                    </ContentPanel>
                </div>
                {/* Get in touch section */}
                <ContentPanel>
                    <div className="py-20 flex justify-between items-center">
                        <div className="w-6/12">
                            <h1 className="text-display-md font-extrabold tracking-tight">
                                Get in touch with us
                            </h1>
                            <p className="text-lg my-2 text-neutral-700 pr-20">
                                Don&apos;t hesitate to reach out to us, our team
                                is happy to answer any questions that you may
                                have.
                            </p>
                            {/* Form */}
                            <GetInTouch />
                        </div>
                        <div className="w-6/12">Image</div>
                    </div>
                </ContentPanel>
            </div>
        </Layout>
    );
}
