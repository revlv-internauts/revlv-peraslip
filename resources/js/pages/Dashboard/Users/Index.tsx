import Layout from "@/components/layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Head } from "@inertiajs/react"
import { dateFormatter } from "@/lib/dateFormatter";

export default function Index({ users }) {
       return (
        <Layout>
        <Head title="Users" />
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>Updated At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.data.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell><a href={`users/${user.id}`}> {user.full_name}</a></TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{dateFormatter(user.created_at)}</TableCell>
                        <TableCell>{dateFormatter(user.updated_at)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Layout>
    )
}
