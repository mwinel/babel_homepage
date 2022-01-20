import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

export default function GetInTouchForm() {
    return (
        <form className="mt-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="lg:w-1/2">
                    <TextInput id="name" name="name" placeholder="Name*" />
                </div>
                <div className="lg:w-1/2">
                    <TextInput id="email" name="email" placeholder="Email*" />
                </div>
            </div>
            <div className="-mt-1 lg:mt-2">
                <TextArea id="message" name="message" placeholder="Message*" />
            </div>
            <div className="flex flex-col space-y-2 mt-4 lg:flex-row lg:space-y-0">
                <Button
                    variant="primary"
                    size="md"
                    title="Send message"
                    className="lg:w-[260px] lg:mr-6"
                />
                <p className="text-sm text-neutral-700 lg:pr-20">
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
