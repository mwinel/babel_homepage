import { Disclosure } from '@headlessui/react';
import Button from '../Button/Button';

export default function MobileMenu() {
    return (
        <Disclosure.Panel className="bg-gray-50 md:hidden">
            <div className="border-b border-neutral-200 p-4">
                <div className="flex flex-col space-y-4">
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
        </Disclosure.Panel>
    );
}
