import Layout from "@/components/layout"
import { Head } from "@inertiajs/react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { UsersTable } from "@/components/users-table"
import { User } from "@/types"
import { Meta } from "@/types/pagination"

type UserIndexProps = {
    users: {
        data: Array<User>
        meta: Meta
    }
}

export default function UsersIndex({ users }: UserIndexProps) {
    return (
        <Layout>
        <Head title="Users" />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
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
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-2">
                    <UsersTable users={users}/>
                </div>
            </SidebarInset>
        </Layout>
    )
}
