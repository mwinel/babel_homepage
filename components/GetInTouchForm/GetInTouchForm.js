import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

export default function GetInTouchForm() {
    return (
        <form className="mt-6">
            <div className="flex space-x-4">
                <div className="w-1/2">
                    <TextInput id="name" name="name" placeholder="Name*" />
                </div>
                <div className="w-1/2">
                    <TextInput id="email" name="email" placeholder="Email*" />
                </div>
            </div>
            <div className="mt-2">
                <TextArea id="message" name="message" placeholder="Message*" />
            </div>
            <div className="inline-flex mt-3">
                <Button
                    variant="primary"
                    size="md"
                    title="Send message"
                    className="w-[260px] mr-6"
                />
                <p className="pr-20 text-sm text-neutral-700">
                    By submitting this form, you agree to our <br />
                    <a className="font-medium cursor-pointer text-neutral-800 hover:underline hover:text-neutral-700">
                        terms and conditions
                    </a>
                    .
                </p>
            </div>
        </form>
    );
}
