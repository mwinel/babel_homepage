import Button from '../components/Button/Button';

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
            </div>
        </div>
    );
}
