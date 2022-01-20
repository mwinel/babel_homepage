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
                            <div className="flex items-center justify-center -space-x-8">
                                <h1 className="font-extrabold tracking-tight text-transparent text-display-lg bg-clip-text bg-gradient-to-r from-gradient to-gradient-2">
                                    Privacy
                                </h1>
                                <div className="relative flex items-center justify-center w-40 h-40">
                                    <img
                                        src="/images/glow_hero.png"
                                        className="w-40 h-40"
                                    />
                                    <div className="absolute z-20 w-32 h-32">
                                        <img
                                            src="/images/shield_hero.png"
                                            className="w-32 h-32"
                                        />
                                    </div>
                                </div>
                                <h1 className="font-extrabold tracking-tight text-transparent text-display-lg bg-clip-text bg-gradient-to-r from-gradient-2 to-gradient-3">
                                    First
                                </h1>
                            </div>
                            <h1 className="-mt-10 font-extrabold tracking-tight text-center text-display-lg">
                                Discussion Platform
                            </h1>
                            <p className="mt-4 text-lg text-center text-primary-600">
                                A safe space to share your views on issues that
                                affect your life
                            </p>
                            <div className="flex items-center justify-center mt-6 space-x-4">
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
                {/* What is BABEL Section */}
                <div className="py-32">
                    <ContentPanel>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="flex justify-start w-6/12">
                                <img
                                    src="/images/lock.png"
                                    alt="lock"
                                    className="w-[540px] h-[540px]"
                                />
                            </div>
                            <div className="flex w-6/12">
                                <div className="flex flex-col">
                                    <p className="font-bold uppercase text-label-sm text-primary-500">
                                        WHAT IS BABEL
                                    </p>
                                    <div className="mt-6 font-extrabold tracking-tight text-display-md">
                                        Blockchain-based bulletin board system{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3">
                                            for electronic liberty
                                        </span>
                                    </div>
                                    <p className="pr-20 mt-6 text-lg text-neutral-600">
                                        BABEL is a discussion platform that
                                        prioritizes privacy by taking advantage
                                        of blockchain features such as
                                        decentralization, anonymization,
                                        immutability, and verifiability of
                                        transactions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ContentPanel>
                </div>
                {/* Why BABEL Section */}
                <div className="py-32">
                    <ContentPanel>
                        <div className="flex items-center justify-center space-x-2">
                            <div className="flex w-6/12">
                                <div className="flex flex-col">
                                    <p className="font-bold uppercase text-label-sm text-primary-500">
                                        WHY BABEL
                                    </p>
                                    <div className="mt-6 font-extrabold tracking-tight text-display-md">
                                        Today's social media raises{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3">
                                            concerns about users&apos; privacy
                                        </span>
                                    </div>
                                    <p className="pr-24 mt-6 text-lg text-neutral-600">
                                        Current laws are not good enough to
                                        protect people&apos;s privacy on social
                                        media. BABEL is designed to provide a
                                        safe space to express your opinions
                                        while protecting your identity.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end w-6/12">
                                <img
                                    src="/images/privacy.png"
                                    alt="lock"
                                    className="w-[540px] h-[540px]"
                                />
                            </div>
                        </div>
                    </ContentPanel>
                </div>
                {/* Benefits Section */}
                <div className="py-32 bg-neutral-50">
                    <ContentPanel>
                        <p className="tracking-wide text-center uppercase text-primary-500">
                            INCLUSION AND PRIVACY MATTERS
                        </p>
                        <h1 className="mt-2 font-extrabold tracking-tight text-center text-display-md">
                            Everyone is invited.
                        </h1>
                        <h1 className="font-extrabold tracking-tight text-center text-transparent text-display-md bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3">
                            Everyone&apos;s identity is protected.
                        </h1>
                        <p className="w-7/12 mx-auto my-6 text-lg text-center text-neutral-700">
                            BABEL is designed for minorities, refugees, and
                            communities. We do not discriminate against anyone
                            who participates in the discussions. Everyone&apos;s
                            opinions are anonymous and cannot be traced back to
                            you IRL.
                        </p>
                        <div className="flex mt-32 space-x-8">
                            <div className="w-4/12 bg-neutral p-10 rounded-[8px] shadow-xl">
                                <img
                                    src="/images/shield_wrapper.png"
                                    className="w-[200px] h-[216px] mx-auto -mt-28 mr-16"
                                />
                                <p className="px-10 font-bold text-center text-label-md text-neutral-700">
                                    Blockchain-Based Authentication
                                </p>
                                <p className="px-4 mt-5 text-sm text-center text-neutral-600">
                                    The identity is managed on the blockchain,
                                    where it is impossible to edit or forge it
                                    without your consent.
                                </p>
                            </div>
                            <div className="w-4/12 bg-neutral p-10 rounded-[8px] shadow-xl">
                                <img
                                    src="/images/discussion_wrapper.png"
                                    className="w-[236px] h-[216px] mx-auto -mt-28 mr-12"
                                />
                                <p className="px-10 font-bold text-center text-label-md text-neutral-700">
                                    Verified Discussion Forum
                                </p>
                                <p className="px-4 mt-5 text-sm text-center text-neutral-600">
                                    Voting is reliable and transparent. No
                                    individual user can cheat or influence the
                                    voting results.
                                </p>
                            </div>
                            <div className="w-4/12 bg-neutral p-10 rounded-[8px] shadow-xl">
                                <img
                                    src="/images/privacy_wrapper.png"
                                    className="w-[200px] h-[216px] mx-auto -mt-28 mr-16"
                                />
                                <p className="px-10 font-bold text-center text-label-md text-neutral-700">
                                    User Anonymity and Security
                                </p>
                                <p className="px-4 mt-5 text-sm text-center text-neutral-600">
                                    Third parties, including the system itself,
                                    have no access to your personal data.
                                </p>
                            </div>
                        </div>
                    </ContentPanel>
                </div>
                {/* CTA Section */}
                <div className="py-32">
                    <ContentPanel>
                        <div
                            className="bg-no-repeat bg-center bg-cover h-[520px] flex items-center pt-10"
                            style={{
                                backgroundImage: `url("/images/cta_bg.png")`,
                            }}
                        >
                            <div className="flex items-center p-20">
                                <div className="w-[400px]">
                                    <h1 className="font-extrabold tracking-tight text-transparent text-display-md bg-clip-text bg-gradient-to-r from-neutral via-neutral-200 to-neutral-400">
                                        Are you ready
                                    </h1>
                                    <h1 className="font-extrabold tracking-tight text-transparent text-display-md bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3">
                                        to join BABEL?
                                    </h1>
                                    <p className="my-6 text-md text-neutral">
                                        Time to take back control of your
                                        personal data.
                                    </p>
                                    <div className="flex items-center mt-6 space-x-4">
                                        <Button
                                            variant="primary"
                                            size="md"
                                            title="Register now"
                                            className="w-[180px]"
                                        />
                                        <Button
                                            variant="secondary"
                                            size="md"
                                            title="Log in"
                                            className="w-[180px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentPanel>
                </div>
                {/* Get in touch section */}
                <ContentPanel>
                    <div className="flex items-center justify-between py-20">
                        <div className="w-6/12">
                            <h1 className="font-extrabold tracking-tight text-display-md">
                                Get in touch with us
                            </h1>
                            <p className="pr-20 my-2 text-lg text-neutral-700">
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
