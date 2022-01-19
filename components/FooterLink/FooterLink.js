import Link from 'next/link';

export default function FooterLink({ title, href }) {
    return (
        <Link href={href}>
            <a className="text-neutral-600 font-medium tracking-wide hover:text-neutral-800 my-1">
                {title}
            </a>
        </Link>
    );
}
