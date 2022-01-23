import Link from 'next/link';
import classNames from '../../utils/classnames';

export default function Logo({ footerLogo, size }) {
    return (
        <Link href="/">
            <div className="flex items-center flex-shrink-0 cursor-pointer">
                <img
                    className={classNames(
                        `block lg:hidden`,
                        !footerLogo ? 'w-auto h-8' : 'w-auto h-6'
                    )}
                    src="/images/logo.svg"
                    alt="Babel"
                />
                <img
                    className={classNames(
                        `hidden lg:block`,
                        !footerLogo
                            ? 'w-[160px] h-[40px]'
                            : 'w-[100px] h-[40px]',
                        size === 'sm' ? 'h-8' : 'w-[160px] h-[40px]'
                    )}
                    src="/images/logo.svg"
                    alt="Babel"
                />
            </div>
        </Link>
    );
}
