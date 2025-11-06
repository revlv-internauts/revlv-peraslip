import Layout from "@/components/layout";
import useAuth from "@/hooks/useAuth";
import { Head } from "@inertiajs/react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function Index() {
    const { user } = useAuth()
    return (
        <Layout>
        <Head title="Departments" />
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
                                <BreadcrumbPage>Departments</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <h1>Welcome {user?.first_name}, Departments!</h1>
                {/* <UsersTable users={users}/> */}
            </div>
        </SidebarInset>
        </Layout>
    )
}