import Layout from "@/components/layout"
import { Head } from "@inertiajs/react"

export default function Index() {
    const user = 'Kyle'

    return (
        <Layout>
        <Head title="Employees" />
            <h1>Welcome { user }! Employees</h1>
        </Layout>
    )
}