import { Disclosure } from '@headlessui/react';
import ContentPanel from '../ContentPanel/ContentPanel';
import MobileMenuButton from '../MobileMenuButton/MobileMenuButton';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Nav() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <ContentPanel>
                        <div className="flex justify-between items-center h-[85px] md:h-[115px]">
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
                    <MobileMenu />
                </>
            )}
        </Disclosure>
    );
}
