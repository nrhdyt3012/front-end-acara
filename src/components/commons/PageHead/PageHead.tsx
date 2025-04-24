import Head from "next/head";

interface PropTypes {
    title?: string;
}
const PageHead = (props: PropTypes) => {
    const { title = "Acara" } = props;
 return ( 
    <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
 );
};

export default PageHead;