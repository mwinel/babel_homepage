import classNames from '../../utils/classnames';

export default function TextArea({
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
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                    id={id}
                    name={name}
                    rows="4"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={classNames(
                        `form-input form-input block w-full bg-neutral-50 rounded-[8px] p-4 text-lg font-medium`,
                        `placeholder-neutral-600 border-1 border-neutral-50 focus:outline-none focus:border-primary-500`
                    )}
                    {...props}
                ></textarea>
                <div className="text-red-500 text-xs mt-1">{error}</div>
            </div>
        </div>
    );
}
