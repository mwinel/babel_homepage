import classNames from '../../utils/classnames';

export default function SectionHeadline({ children, className }) {
    return (
        <h1
            className={classNames(
                `mt-6 font-extrabold tracking-tight text-display-sm lg:text-display-md ${className}`
            )}
        >
            {children}
        </h1>
    );
}
