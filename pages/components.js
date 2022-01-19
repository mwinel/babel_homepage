import Button from '../components/Button/Button';
import TextInput from '../components/TextInput/TextInput';
import TextArea from '../components/TextArea/TextArea';

export default function Components() {
    return (
        <div className="mx-auto my-10 max-w-7xl">
            <div>Components</div>
            <div className="mt-4">
                <div className="flex space-x-2">
                    <Button variant="primary" size="lg" title="Primary Large" />
                    <Button
                        variant="secondary"
                        size="lg"
                        title="Secondary Large"
                    />
                    <Button variant="outline" size="lg" title="Outline Large" />
                </div>

                <div className="flex mt-4 space-x-2">
                    <Button
                        variant="primary"
                        size="md"
                        title="Primary Medium"
                    />
                    <Button
                        variant="secondary"
                        size="md"
                        title="Secondary Medium"
                    />
                    <Button
                        variant="outline"
                        size="md"
                        title="Outline Medium"
                    />
                </div>

                <div className="flex mt-4 space-x-2">
                    <Button variant="primary" size="sm" title="Primary Small" />
                    <Button
                        variant="secondary"
                        size="sm"
                        title="Secondary Small"
                    />
                    <Button variant="outline" size="sm" title="Outline Small" />
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
