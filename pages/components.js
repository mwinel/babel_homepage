import Button from '../components/Button/Button';
import TextInput from '../components/TextInput/TextInput';
import TextArea from '../components/TextArea/TextArea';

export default function Components() {
    return (
        <div className="mx-auto my-10 max-w-7xl">
            <div>Components</div>
            <div className="mt-4">
                <div className="flex space-x-2">
                    <Button variant="primary" size="lg">
                        Primary large
                    </Button>
                    <Button variant="secondary" size="lg">
                        Secondary large
                    </Button>
                    <Button variant="outline" size="lg">
                        Outline large
                    </Button>
                </div>

                <div className="flex mt-4 space-x-2">
                    <Button variant="primary" size="md">
                        Primary medium
                    </Button>
                    <Button variant="secondary" size="md">
                        Secondary medium
                    </Button>
                    <Button variant="outline" size="md">
                        Outline medium
                    </Button>
                </div>

                <div className="flex mt-4 space-x-2">
                    <Button variant="primary" size="sm">
                        Primary small
                    </Button>
                    <Button variant="secondary" size="sm">
                        Secondary small
                    </Button>
                    <Button variant="outline" size="sm">
                        Outline small
                    </Button>
                </div>

                <div className="flex mt-4 space-x-2">
                    <TextInput
                        id="input-large"
                        name="input-large"
                        placeholder="Input large*"
                    />
                    <TextInput
                        id="input-large"
                        name="input-large"
                        placeholder="Input large"
                        error="Form field is required"
                    />
                </div>

                <div className="flex mt-4 space-x-2">
                    <div className="w-96">
                        <TextArea
                            id="text-area"
                            name="text-area"
                            placeholder="Your text here..."
                        />
                    </div>
                    <div className="w-96">
                        <TextArea
                            id="text-area"
                            name="text-area"
                            placeholder="Your text here..."
                            error="Form field is required"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
