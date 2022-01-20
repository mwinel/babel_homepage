import classNames from '../../utils/classnames';

export default function SectionParagraph({ children, className, ...props }) {
    return (
        <p
            className={classNames(
                `mt-6 text-neutral-600 text-md lg:text-lg ${className}`
            )}
        >
            {children}
        </p>
    );
}
