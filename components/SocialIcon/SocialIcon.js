import Link from 'next/link';

export default function SocialIcon({ href, src }) {
    return (
        <Link href={href}>
            <a className="w-12 h-12 bg-neutral-100 flex items-center justify-center rounded-full hover:bg-primary-400">
                <img src={src} className="w-6 h-6" />
            </a>
        </Link>
    );
}
