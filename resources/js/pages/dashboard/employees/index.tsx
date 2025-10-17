import Layout from "@/components/layout"
import AppPagination from "@/components/app-pagination";
import { Head, Link } from "@inertiajs/react"
import { Meta } from "@/types/pagination";
import { Plus } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dateFormatter } from "@/lib/dateFormatter";

type EmployeeIndexProps = {
    employees: {
        data: Array<EmployeeIndexProps>;
        meta: Meta;
    }
}

export default function Index({ employees }: EmployeeIndexProps) {
    return (
        <Layout>
        <Head title="Employees" />
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
                                    <BreadcrumbPage>Employees</BreadcrumbPage>
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
                    <h1 className="text-2xl font-bold">List of Employees</h1>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                        <div className="flex justify-end p-3">
                            <Link href="/employees/create">
                                <Button>
                                    <Plus />
                                    Add Employee
                                </Button>
                            </Link>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Employee ID</TableHead>
                                <TableHead>Full Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Date of Hiring</TableHead>
                                <TableHead>Bank Number</TableHead>
                                <TableHead>Department ID</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead>Updated At</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {employees.data.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.employee_id}</TableCell>
                                    {/* <TableCell>{payroll.employee.employee_id}</TableCell> */}
                                    <TableCell>{<a href={`employees/${employee.id}`}>{employee.full_name}</a>}</TableCell>
                                    <TableCell>{employee.email}</TableCell>
                                    <TableCell>{employee.date_of_hiring}</TableCell>
                                    <TableCell>{employee.bank_number}</TableCell>
                                    <TableCell>{employee.department_id}</TableCell>
                                    <TableCell>{dateFormatter(employee.created_at)}</TableCell>
                                    <TableCell>{dateFormatter(employee.updated_at)}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <AppPagination data={employees.meta} />
                </div>
            </SidebarInset>
        </Layout>
    )
}