import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import classNames from '../../utils/classnames';

export default function MobileMenuButton({ open }) {
	return (
		<Fragment>
			<Disclosure.Button
				className={classNames(
					'inline-flex items-center justify-center p-2 text-gray-800 rounded-md',
					'hover:text-gray-500 hover:bg-gray-100',
					'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
				)}
			>
				<span className="sr-only">Open main menu</span>
				{open ? (
					<XIcon className="block w-6 h-6" aria-hidden="true" />
				) : (
					<MenuIcon className="block w-6 h-6" aria-hidden="true" />
				)}
			</Disclosure.Button>
		</Fragment>
	);
}
