import Layout from "@/components/layout"
import AppPagination from "@/components/app-pagination"
import { Head, Link } from "@inertiajs/react"
import { Meta } from "@/types/pagination"
import { Plus, Trash2 } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { dateFormatter } from "@/lib/dateFormatter"

type UserIndexProps = {
    users: {
        data: Array<UserIndexProps>;
        meta: Meta;
    }
}

export default function Index({ users }: UserIndexProps) {
       return (
        <Layout>
        <Head title="Users" />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                            <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                            />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="text-base font-medium">
                                    <BreadcrumbPage>Users</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div> */}
                    <h1 className="text-2xl font-bold">List of Users</h1>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                        <div className="flex justify-end p-2">
                        <Link href="/users/create">
                            <Button>
                                <Plus />
                                Add User
                            </Button>
                        </Link>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Full Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead>Updated At</TableHead>
                                <TableHead>Delete</TableHead>
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
                                    <TableCell><Button type="submit" className="w-full"><Trash2 /></Button></TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <AppPagination data={users.meta} />
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    )
}
