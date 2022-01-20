import Image from 'next/image';
import Layout from '../components/Layouts/Layout';
import Logo from '../components/Logo/Logo';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import Button from '../components/Button/Button';
import GetInTouchForm from '../components/GetInTouchForm/GetInTouchForm';
import SectionLabel from '../components/SectionLabel/SectionLabel';
import SectionHeadline from '../components/SectionHeadline/SectionHeadline';
import SectionParagraph from '../components/SectionParagraph/SectionParagraph';
import classNames from '../utils/classnames';

export default function Home() {
    return (
        <Layout showNavbar={false}>
            {/* Hero Section */}
            <div
                className="relative bg-white w-full h-[915px] bg-bottom bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url("/images/group.png")`,
                }}
            ></div>
            <div
                className="absolute inset-0 h-[856px] w-full bg-bottom bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url("/images/hero_masked.png")`,
                }}
            >
                <div className="h-[115px] md:py-16 flex items-center justify-center">
                    <Logo />
                </div>
                <div className="flex items-center justify-center -space-x-6 lg:-space-x-8">
                    <h1
                        className={classNames(
                            `font-extrabold tracking-tight text-transparent text-display-sm lg:text-display-lg`,
                            `bg-clip-text bg-gradient-to-r from-gradient to-gradient-2`
                        )}
                    >
                        Privacy
                    </h1>
                    <div className="relative flex items-center justify-center w-28 h-28 lg:w-40 lg:h-40">
                        <img
                            src="/images/glow_hero.png"
                            className="w-28 h-28 lg:w-40 lg:h-40"
                            alt="glow"
                        />
                        <div className="absolute z-20 w-20 h-20 lg:w-32 lg:h-32">
                            <img
                                src="/images/shield_hero.png"
                                className="w-20 h-20 lg:w-32 lg:h-32"
                                alt="shield"
                            />
                        </div>
                    </div>
                    <h1
                        className={classNames(
                            `font-extrabold tracking-tight text-transparent text-display-sm lg:text-display-lg`,
                            `bg-clip-text bg-gradient-to-r from-gradient-2 to-gradient-3`
                        )}
                    >
                        First
                    </h1>
                </div>
                <h1 className="-mt-8 font-extrabold tracking-tight text-center text-display-sm lg:text-display-lg">
                    Discussion Platform
                </h1>
                <p className="mt-2 text-md px-4 leading-6 text-center text-primary-600 lg:mt-4 lg:text-lg lg:leading-0">
                    A safe space to share your views on issues that affect your
                    life
                </p>
                <div className="flex flex-col space-y-4 items-center justify-center mt-6 px-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                    <Button
                        variant="primary"
                        size="md"
                        title="Register now"
                        className="w-full lg:w-[190px]"
                    />
                    <Button
                        variant="secondary"
                        size="md"
                        title="Log in"
                        className="w-full lg:w-[190px]"
                    />
                </div>
            </div>
            {/* What is BABEL Section */}
            <div className="py-16 lg:py-28">
                <ContentPanel>
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-2">
                        <div className="flex lg:w-6/12">
                            <Image
                                src="/images/lock.png"
                                alt="lock"
                                width={540}
                                height={540}
                            />
                        </div>
                        <div className="flex lg:w-6/12">
                            <div className="flex flex-col">
                                <SectionLabel>What is babel?</SectionLabel>
                                <SectionHeadline>
                                    Blockchain-based bulletin board system{' '}
                                    <span
                                        className={classNames(
                                            `text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3`
                                        )}
                                    >
                                        for electronic liberty
                                    </span>
                                </SectionHeadline>
                                <SectionParagraph className="lg:pr-20">
                                    BABEL is a discussion platform that
                                    prioritizes privacy by taking advantage of
                                    blockchain features such as
                                    decentralization, anonymization,
                                    immutability, and verifiability of
                                    transactions.
                                </SectionParagraph>
                            </div>
                        </div>
                    </div>
                </ContentPanel>
            </div>
            {/* Why BABEL Section */}
            <div className="py-16 lg:py-28">
                <ContentPanel>
                    <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:space-x-2">
                        <div className="flex lg:w-6/12">
                            <div className="flex flex-col">
                                <SectionLabel>WHY BABEL</SectionLabel>
                                <SectionHeadline>
                                    Today&apos;s social media raises{' '}
                                    <span
                                        className={classNames(
                                            `text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3`
                                        )}
                                    >
                                        concerns about users&apos; privacy
                                    </span>
                                </SectionHeadline>
                                <SectionParagraph className="lg:pr-24">
                                    Current laws are not good enough to protect
                                    people&apos;s privacy on social media. BABEL
                                    is designed to provide a safe space to
                                    express your opinions while protecting your
                                    identity.
                                </SectionParagraph>
                            </div>
                        </div>
                        <div className="flex justify-end lg:w-6/12">
                            <Image
                                src="/images/privacy.png"
                                alt="privacy"
                                width={540}
                                height={540}
                            />
                        </div>
                    </div>
                </ContentPanel>
            </div>
            {/* Benefits Section */}
            <div className="py-16 lg:py-28 bg-neutral-50 text-center">
                <ContentPanel>
                    <SectionLabel>INCLUSION AND PRIVACY MATTERS</SectionLabel>
                    <SectionHeadline>
                        Everyone is invited.
                        <br />
                        <span
                            className={classNames(
                                `text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3`
                            )}
                        >
                            Everyone&apos;s identity is protected.
                        </span>
                    </SectionHeadline>
                    <SectionParagraph className="lg:px-64">
                        BABEL is designed for minorities, refugees, and
                        communities. We do not discriminate against anyone who
                        participates in the discussions. Everyone&apos;s
                        opinions are anonymous and cannot be traced back to you
                        IRL.
                    </SectionParagraph>
                    <div className="flex flex-col space-y-20 mt-24 lg:mt-32 lg:flex-row lg:space-x-8 lg:space-y-0">
                        <div className="bg-neutral p-10 rounded-[8px] shadow-xl lg:w-4/12">
                            <div className="mx-auto -mt-28 mr-8">
                                <Image
                                    src="/images/shield_wrapper.png"
                                    width={200}
                                    height={216}
                                    alt="shield"
                                />
                            </div>
                            <p className="font-bold text-center text-label-md text-neutral-700 lg:px-10">
                                Blockchain-Based Authentication
                            </p>
                            <p className="mt-5 text-sm text-center text-neutral-600 lg:px-4">
                                The identity is managed on the blockchain, where
                                it is impossible to edit or forge it without
                                your consent.
                            </p>
                        </div>
                        <div className="bg-neutral p-10 rounded-[8px] shadow-xl lg:w-4/12">
                            <div className="mx-auto -mt-28 mr-8">
                                <Image
                                    src="/images/discussion_wrapper.png"
                                    width={236}
                                    height={216}
                                    alt="discussion"
                                />
                            </div>
                            <p className="font-bold text-center text-label-md text-neutral-700 lg:px-10">
                                Verified Discussion Forum
                            </p>
                            <p className="mt-5 text-sm text-center text-neutral-600 lg:px-4">
                                Voting is reliable and transparent. No
                                individual user can cheat or influence the
                                voting results.
                            </p>
                        </div>
                        <div className="bg-neutral p-10 rounded-[8px] shadow-xl lg:w-4/12">
                            <div className="mx-auto -mt-28 mr-8">
                                <Image
                                    src="/images/privacy_wrapper.png"
                                    width={200}
                                    height={216}
                                    alt="privacy"
                                />
                            </div>
                            <p className="font-bold text-center text-label-md text-neutral-700 lg:px-10">
                                User Anonymity and Security
                            </p>
                            <p className="mt-5 text-sm text-center text-neutral-600 lg:px-4">
                                Third parties, including the system itself, have
                                no access to your personal data.
                            </p>
                        </div>
                    </div>
                </ContentPanel>
            </div>
            {/* CTA Section */}
            <div className="block md:hidden bg-primary-700 py-10 px-4 text-center">
                <SectionHeadline>
                    <span
                        className={classNames(
                            `text-transparent bg-clip-text bg-gradient-to-r from-neutral via-neutral-200 to-neutral-400`
                        )}
                    >
                        Are you ready
                        <br />
                    </span>
                    <span
                        className={classNames(
                            `text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3`
                        )}
                    >
                        to join BABEL?
                    </span>
                </SectionHeadline>
                <p className="my-6 text-sm text-neutral">
                    Time to take back control of your personal data.
                </p>
                <div className="flex flex-col items-center my-6 space-y-4">
                    <Button
                        variant="primary"
                        size="md"
                        title="Register now"
                        className="w-full"
                    />
                    <Button
                        variant="secondary"
                        size="md"
                        title="Log in"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="py-16 lg:py-28 hidden lg:block">
                <ContentPanel>
                    <div
                        className="bg-no-repeat bg-center bg-cover h-[520px] w-full flex flex-col pt-10"
                        style={{
                            backgroundImage: `url("/images/cta_bg.png")`,
                        }}
                    >
                        <div className="flex items-center p-20">
                            <div className="w-[400px]">
                                <SectionHeadline className="">
                                    <span
                                        className={classNames(
                                            `text-transparent bg-clip-text bg-gradient-to-r from-neutral via-neutral-200 to-neutral-400`
                                        )}
                                    >
                                        Are you ready
                                        <br />
                                    </span>
                                    <span
                                        className={classNames(
                                            `text-transparent bg-clip-text bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3`
                                        )}
                                    >
                                        to join BABEL?
                                    </span>
                                </SectionHeadline>
                                <p className="my-6 text-md text-neutral">
                                    Time to take back control of your personal
                                    data.
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
            <div className="py-20 lg:py-28">
                <ContentPanel>
                    <div className="flex flex-col-reverse w-full items-center justify-between lg:flex-row">
                        <div className="lg:w-7/12">
                            <SectionHeadline>
                                Get in touch with us
                            </SectionHeadline>
                            <SectionParagraph>
                                Don&apos;t hesitate to reach out to us, our team
                                is happy to answer any questions that you may
                                have.
                            </SectionParagraph>
                            <GetInTouchForm />
                        </div>
                        <div className="flex items-center justify-center -ml-5 lg:justify-end lg:w-5/12">
                            <Image
                                src="/images/contact.png"
                                alt="contact us"
                                width={413}
                                height={417}
                            />
                        </div>
                    </div>
                </ContentPanel>
            </div>
        </Layout>
    );
}
