import AppPagination from "@/components/app-pagination"
import { Employee } from "@/types/employees"
import { Link } from "@inertiajs/react"
import { Meta } from "@/types/pagination"
import { Plus, Trash, SquarePen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { dateFormatter } from "@/lib/dateFormatter"

type EmployeeIndexProps = {
    employees: {
        data: Array<Employee>;
        meta: Meta;
    }
}

export function EmployeesTable({ employees }: EmployeeIndexProps) {
    return (
        <>
            <div className="sm:flex sm:items-center mt-2">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Employees</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the employees including their name, email, contact, and government-mandated social benefit programs.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href="/employees/create">
                        <Button>
                            <Plus />
                            Add Employee
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
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
                        <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {employees.data.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell>{employee.employee_id}</TableCell>
                            <TableCell><Link href={`/employees/${employee.id}`}>{employee.full_name}</Link></TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.date_of_hiring}</TableCell>
                            <TableCell>{employee.bank_number}</TableCell>
                            <TableCell>{employee.department_id}</TableCell>
                            <TableCell>{dateFormatter(employee.created_at)}</TableCell>
                            <TableCell>{dateFormatter(employee.updated_at)}</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <Button
                                        asChild
                                        className="bg-red-700 hover:bg-red-600"
                                    >
                                        <Link 
                                            href={`/employees/${employee.id}`}
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
                                            href={`/employees/${employee.id}/edit`}
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
            <AppPagination data={employees.meta} />
        </>
    )
}