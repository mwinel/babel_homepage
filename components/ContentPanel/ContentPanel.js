import classNames from '../../utils/classnames';

export default function ContentPanel({ children, className }) {
    return (
        <div
            className={classNames(
                `px-4 mx-auto max-w-7xl sm:px-6 lg:px-12 ${className}`
            )}
        >
            {children}
        </div>
    );
}
