import Layout from '../components/Layouts/Layout';
import ContentPanel from '../components/ContentPanel/ContentPanel';
import SectionHeadline from '../components/SectionHeadline/SectionHeadline';

export default function NotFound() {
    return (
        <Layout showNavbar={true}>
            <ContentPanel>
                <SectionHeadline className="my-6 text-center lg:my-10">
                    Terms of Service
                </SectionHeadline>
                <p className="mb-6 text-md text-neutral-600">
                    Last updated: December 31, 2021
                </p>
                <p className="mb-6 font-bold text-label-md text-neutral-800">
                    Paragraph Title
                </p>
                <p className="mb-6 text-sm text-neutral-800 lg:text-md">
                    Est aliquet odio at ultricies. Senectus nunc sit sed eget
                    molestie etiam ultrices. Etiam neque libero, convallis
                    consectetur id diam nullam. Nisi ullamcorper sapien, ipsum
                    id amet volutpat tortor, sed semper. Libero sed aliquet
                    facilisis sed. Venenatis elementum tempor, pellentesque
                    tempus, vulputate libero. Bibendum amet placerat sit
                    elementum vel. Sed enim eros, id quis ornare mi. Viverra
                    iaculis orci, sed sollicitudin etiam eget elementum posuere
                    nulla.
                    <br />
                    <br />
                    Example bullet points:
                    <br />
                    <ul className="list-disc list-inside">
                        <li>Point number 1</li>
                        <li>Point number 2</li>
                        <li>Point number 3</li>
                    </ul>
                    <br />
                    <span className="font-bold">Inline Subtitle.</span> Bibendum
                    eu, eget urna dolor in ullamcorper dolor. Integer id aliquam
                    nisl in consectetur. Mi suspendisse nunc non, orci duis
                    consequat diam. At massa tincidunt sed vel aliquam et
                    volutpat. Duis est mauris sagittis aliquam enim diam.
                    Bibendum enim, tristique tincidunt sed. Facilisis nisl
                    posuere scelerisque vivamus amet. Tristique adipiscing
                    lectus pellentesque phasellus sit quis dictum. Dui maecenas
                    vulputate eu lorem blandit. Aliquam augue porttitor magna
                    varius viverra mattis. Consectetur urna suscipit donec
                    hendrerit elementum sit at diam. Eu rhoncus ullamcorper nisi
                    tellus porttitor fermentum elementum nisl nunc. For more
                    information:{' '}
                    <a
                        href="http://thisisalinktoawebsite.com/follow-this-format"
                        className="text-primary-500 hover:text-primary-600 hover:underline"
                    >
                        http://thisisalinktoawebsite.com/follow-this-format
                    </a>
                    .
                </p>
                <p className="mb-6 font-bold text-label-md text-neutral-800">
                    Paragraph Title
                </p>
                <p className="mb-6 text-sm text-neutral-800 lg:text-md">
                    <span className="font-bold">Inline Subtitle.</span>
                    <br />
                    Est aliquet odio at ultricies. Senectus nunc sit sed eget
                    molestie etiam ultrices. Etiam neque libero, convallis
                    consectetur id diam nullam. Nisi ullamcorper sapien, ipsum
                    id amet volutpat tortor, sed semper. Libero sed aliquet
                    facilisis sed. Venenatis elementum tempor, pellentesque
                    tempus, vulputate libero. Bibendum amet placerat sit
                    elementum vel. Sed enim eros, id quis ornare mi. Viverra
                    iaculis orci, sed sollicitudin etiam eget elementum posuere
                    nulla.
                    <br />
                    <br />
                    Risus libero non a, nulla velit, egestas nulla. Bibendum eu,
                    eget urna dolor in ullamcorper dolor. Integer id aliquam
                    nisl in consectetur. Mi suspendisse nunc non, orci duis
                    consequat diam. At massa tincidunt sed vel aliquam et
                    volutpat. Duis est mauris sagittis aliquam enim diam.
                    Bibendum enim, tristique tincidunt sed. Facilisis nisl
                    posuere scelerisque vivamus amet. Tristique adipiscing
                    lectus pellentesque phasellus sit quis dictum. Dui maecenas
                    vulputate eu lorem blandit. Aliquam augue porttitor magna
                    varius viverra mattis. Consectetur urna suscipit donec
                    hendrerit elementum sit at diam. Eu rhoncus ullamcorper nisi
                    tellus porttitor fermentum elementum nisl nunc. For more
                    information:{' '}
                    <a
                        href="http://thisisalinktoawebsite.com/follow-this-format"
                        className="text-primary-500 hover:text-primary-600 hover:underline"
                    >
                        http://thisisalinktoawebsite.com/follow-this-format
                    </a>
                    .
                </p>
            </ContentPanel>
        </Layout>
    );
}
