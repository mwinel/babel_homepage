import { useState, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import ContentPanel from '../ContentPanel/ContentPanel';
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Nav({ showNavbar }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 200 && currentScrollPos <= maxScroll) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            };
        }
    }, []);

    return (
        <>
            <Disclosure as="sticky-nav">
                {({ open }) => (
                    <div class="sticky z-10 top-0 shadow-sm bg-neutral">
                        {visible && (
                            <Transition
                                show={visible}
                                enter="transition-opacity duration-700 ease-in"
                                enterFrom="opacity-100"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-700 ease-out"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-100"
                            >
                                <div className="py-4">
                                    <ContentPanel>
                                        <div className="flex items-center justify-between">
                                            <div className="flex justify-start">
                                                <Logo  />
                                            </div>
                                            <div className="flex items-center mr-2 -ml-2 md:hidden">
                                                <MobileMenuButton open={open} />
                                            </div>
                                            <div className="hidden space-x-4 md:block">
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    title="Log in"
                                                    className="px-12"
                                                />
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    title="Register"
                                                    className="px-12"
                                                />
                                            </div>
                                        </div>
                                    </ContentPanel>
                                </div>
                            </Transition>
                        )}
                        <MobileMenu />
                    </div>
                )}
            </Disclosure>
            {showNavbar && (
                <Disclosure as="nav">
                    {({ open }) => (
                        <>
                            <ContentPanel>
                                <div className="flex items-center justify-between h-[85px] md:h-[115px] bg-transparent">
                                    <div className="flex items-center">
                                        <Logo />
                                    </div>
                                    <div className="flex items-center mr-2 -ml-2 md:hidden">
                                        <MobileMenuButton open={open} />
                                    </div>
                                    <div className="hidden space-x-4 md:block">
                                        <Button
                                            variant="secondary"
                                            size="md"
                                            title="Log in"
                                            className="px-12"
                                        />
                                        <Button
                                            variant="primary"
                                            size="md"
                                            title="Register"
                                            className="px-12"
                                        />
                                    </div>
                                </div>
                            </ContentPanel>
                        </>
                    )}
                </Disclosure>
            )}
        </>
    );
}
