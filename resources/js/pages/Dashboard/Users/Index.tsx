import Layout from "@/components/layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Index({ users }) {
       return (
        <Layout>
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
                        <TableCell>{user.created_at}</TableCell>
                        <TableCell>{user.updated_at}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Layout>
    )
}
