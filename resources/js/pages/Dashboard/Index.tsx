import Layout from "@/components/layout"

export default function Index() {
    const user = 'Kyle'

    return (
        <Layout>
            <h1>Welcome { user }!</h1>
        </Layout>
    )
}