import Layout from "@/components/layout"

export default function Index() {
    const user = 'Kyle'

    return (
        <Layout>
            <h1>Welcome { user }! Employees</h1>
        </Layout>
    )
}