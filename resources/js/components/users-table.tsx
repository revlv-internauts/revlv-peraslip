import AppPagination from "@/components/app-pagination"
import { User } from "@/types"
import { Link } from "@inertiajs/react"
import { Meta } from "@/types/pagination"
import { Plus, Trash, SquarePen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { dateFormatter } from "@/lib/dateFormatter"

type UserIndexProps = {
    users: {
        data: Array<User>;
        meta: Meta;
    }
}

export function UsersTable({ users }: UserIndexProps) {
    return (
        <>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users including their name, email and timestamps.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href="/users/create">
                        <Button>
                            <Plus />
                            Add User
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Updated At</TableHead>
                        <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.data.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell><Link href={`users/${user.id}`}> {user.full_name}</Link></TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{dateFormatter(user.created_at)}</TableCell>
                            <TableCell>{dateFormatter(user.updated_at)}</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <Button
                                        asChild
                                        className="bg-red-700 hover:bg-red-600"
                                    >
                                        <Link 
                                            href={`/users/${user.id}`}
                                            method="delete"
                                            as="button"
                                        >
                                                <Trash />
                                                Delete
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className="bg-green-700 hover:bg-green-600"
                                    >
                                        <Link 
                                            href={`/users/${user.id}/edit`}
                                            as="button" 
                                        >
                                                <SquarePen />
                                                Edit
                                        </Link>
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <AppPagination data={users.meta} />
        </>
    )
}