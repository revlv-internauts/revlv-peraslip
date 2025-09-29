import Layout from "@/components/layout"
import { Head } from "@inertiajs/react"
import userAuth from "@/hooks/useAuth"

export default function Index() {
    const { user } = userAuth();

    return (
        <Layout>
        <Head title="Dashboard" />
            <h1>Welcome {user?.first_name} {user?.last_name}!</h1>
        </Layout>
    )
}