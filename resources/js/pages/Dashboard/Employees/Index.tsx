import Layout from "@/components/layout"
import { Head, Link } from "@inertiajs/react"
import { Plus } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dateFormatter } from "@/lib/dateFormatter";

export default function Index({ payrolls }) {
    console.log(payrolls);
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
                        <div className="flex p-3">
                        <Link href="#">
                            <Button>
                                <Plus />
                                Add Employee
                            </Button>
                        </Link>
                        </div>
                        <ScrollArea>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Payroll ID</TableHead>
                                    <TableHead>Employee ID</TableHead>
                                    <TableHead>First Name</TableHead>
                                    <TableHead>Last Name</TableHead>
                                    <TableHead>Middle Name</TableHead>
                                    <TableHead>Date of Hiring</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone Number</TableHead>
                                    <TableHead>Department ID</TableHead>
                                    <TableHead>Bank Number</TableHead>
                                    <TableHead>Basic Pay</TableHead>
                                    <TableHead>SSS ID</TableHead>
                                    <TableHead>UMID ID</TableHead>
                                    <TableHead>PhilHealth ID</TableHead>
                                    <TableHead>Pag-IBIG ID</TableHead>
                                    <TableHead>TIN ID</TableHead>
                                    <TableHead>Created At</TableHead>
                                    <TableHead>Updated At</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {payrolls.map((payroll) => (
                                    <TableRow key={payroll.id}>
                                        <TableCell><a href={`employees/${payroll.employee.id}`}>{payroll.id}</a></TableCell>
                                        <TableCell>{payroll.employee.employee_id}</TableCell>
                                        <TableCell>{payroll.employee.first_name}</TableCell>
                                        <TableCell>{payroll.employee.last_name}</TableCell>
                                        <TableCell>{payroll.employee.middle_name}</TableCell>
                                        <TableCell>{payroll.employee.date_of_hiring}</TableCell>
                                        <TableCell>{payroll.employee.email}</TableCell>
                                        <TableCell>{payroll.employee.phone_number}</TableCell>
                                        <TableCell>{payroll.employee.department_id}</TableCell>
                                        <TableCell>{payroll.employee.bank_number}</TableCell>
                                        <TableCell>{payroll.employee.basic_pay}</TableCell>
                                        <TableCell>{payroll.employee.sss_number}</TableCell>
                                        <TableCell>{payroll.employee.umid_number}</TableCell>
                                        <TableCell>{payroll.employee.philhealth_number}</TableCell>
                                        <TableCell>{payroll.employee.pagibig_number}</TableCell>
                                        <TableCell>{payroll.employee.tin_number}</TableCell>
                                        <TableCell>{dateFormatter(payroll.created_at)}</TableCell>
                                        <TableCell>{dateFormatter(payroll.updated_at)}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    )
}