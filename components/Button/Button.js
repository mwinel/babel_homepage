import classNames from '../../utils/classnames';

export default function Button({
    variant,
    size,
    title,
    className,
    onClick,
    type,
    disabled,
    ...rest
}) {
    return (
        <button
            className={classNames(
                `inline-flex px-6 items-center justify-center rounded-[8px] text-center font-bold tracking-wide transition ease-out duration-300`,
                variant === 'primary' &&
                    `text-neutral bg-gradient-to-r from-gradient via-gradient-2 to-gradient-3`,
                variant === 'secondary' &&
                    `text-primary-500 bg-neutral shadow-button-2xl hover:bg-primary-400 hover:text-neutral`,
                variant === 'outline' &&
                    `text-neutral-800 bg-transparent border-2 border-neutral-200 hover:border-primary-400`,
                size === 'lg' && `h-[60px] text-buttons-lg`,
                size === 'md' && `h-[50px] text-buttons-md`,
                size === 'sm' && `h-[40px] text-buttons-sm`,
                className
            )}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {title}
        </button>
    );
}
