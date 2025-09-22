import Layout from "@/components/layout"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Head } from "@inertiajs/react"
import { dateFormatter } from "@/lib/dateFormatter";

export default function Index({ payrolls }) {
    console.log(payrolls);
    return (
        <Layout>
        <Head title="Employees" />
        <ScrollArea className="w-full border rounded-md">
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
                        <TableCell>{payroll.id}</TableCell>
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
        </Layout>
    )
}