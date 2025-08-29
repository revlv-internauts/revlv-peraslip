import Layout from "@/components/layout"
import { Head } from "@inertiajs/react"

export default function Index() {
    const user = 'Kyle'

    return (
        <Layout>
        <Head title="Payrolls" />
            <h1>Welcome { user }! Payrolls</h1>
        </Layout>
    )
}