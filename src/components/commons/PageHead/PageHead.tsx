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
    <link rel="icon" href="/images/general/logo.svg"  type="image-x-icon"/>
    </Head>
 );
};

export default PageHead;

// This file defines a React functional component named `PageHead` using TypeScript.
// It uses the `Head` component from Next.js to manage the `<head>` section of an HTML document.

// The `PropTypes` interface specifies the props that `PageHead` accepts:
// - `title` (optional): A string representing the title of the page. If not provided, it defaults to "Acara".

// Inside the component:
// - The `title` prop is destructured with a default value of "Acara".
// - The component returns a `Head` element that:
//   - Sets the page's `<title>` to the value of the `title` prop.
//   - Includes a `<meta>` tag to specify the character encoding as UTF-8.
//   - Includes a `<meta>` tag for responsive design with the viewport settings.
//   - Adds a `<link>` tag to set the favicon, pointing to `/images/general/logo.svg`.

// Finally, the `PageHead` component is exported as the default export of the file.