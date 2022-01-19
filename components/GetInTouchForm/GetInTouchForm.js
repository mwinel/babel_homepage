import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

export default function GetInTouchForm() {
    return (
        <form className="flex flex-col mt-6">
            <div className="flex space-x-4">
                <TextInput id="name" name="name" placeholder="Name*" />
                <TextInput id="email" name="email" placeholder="Email*" />
            </div>
            <div className="mt-2 mr-6">
                <TextArea id="message" name="message" placeholder="Message*" />
            </div>
            <div className="inline-flex mt-3">
                <Button
                    variant="primary"
                    size="md"
                    title="Send message"
                    className="w-[260px] mr-4"
                />
                <p className="text-sm text-neutral-700 pr-20">
                    By submitting this form, you agree to our{' '}
                    <a className="text-neutral-800 font-medium cursor-pointer hover:underline hover:text-neutral-700">
                        terms and conditions
                    </a>
                    .
                </p>
            </div>
        </form>
    );
}
