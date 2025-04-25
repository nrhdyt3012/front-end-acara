import PageHead from "@/components/commons/PageHead"

interface PropTypes {
    
    title?: string
}
const AuthLayout = (props: PropTypes) => {
        const {title} = props;
        return (
        <>
        <PageHead title={title} />
        </>
    )
}