import classNames from '../../utils/classnames';

export default function TextInput({
    id,
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    ...props
}) {
    return (
        <div className="mb-2">
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={classNames(
                    `appearnace-none form-input block w-full h-[60px] bg-neutral-50 rounded-[8px] p-4 text-lg font-medium`,
                    `placeholder-neutral-600 border-2 border-neutral-50 focus:outline-none focus:border-primary-500`
                )}
                {...props}
            />
            <div className="mt-1 text-xs text-red-500">{error}</div>
        </div>
    );
}
