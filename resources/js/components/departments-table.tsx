import AppPagination from "@/components/app-pagination"
import { Link, router } from "@inertiajs/react"
import { 
    Plus, 
    Trash, 
    SquarePen, 
} from "lucide-react"
import { 
    Button,
} from "@/components/ui/button"
import { 
    Table,
    TableBody,
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow,
} from "@/components/ui/table"
import { type Department } from "@/types"
import { type Meta } from "@/types/pagination"
import { dateFormatter } from "@/lib/dateFormatter"

type DepartmentTableProps = {
    departments: {
        data: Array<Department>
        meta: Meta
    }
}

export function DepartmentsTable({ departments }: DepartmentTableProps) {
    const handleDelete = (id: number) => {
        if(confirm("Are you sure you want to delete this department?")) {
            router.delete(`/departments/${id}`)
        }
    }
    return (
        <>
            <div className="sm:flex sm:items-center mt-2">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Departments</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the departments including their name and timestamps.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link href="/departments/create">
                        <Button>
                            <Plus />
                            Add Department
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead 
                            scope="col"
                            className="py-3.5 pr-3 pl-4 text-left text-sm font-bold text-gray-900 sm:pl-6"    
                        >
                            Name
                        </TableHead>
                        <TableHead
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                        >
                            Created At
                        </TableHead>
                        <TableHead
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                        >
                            Updated At
                        </TableHead>
                        <TableHead
                            scope="col"
                            className="py-3.5 pr-4 pl-3 text-right text-sm font-bold text-gray-900 sm:pr-6"    
                        >
                            Actions
                        </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {departments.data.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="py-6 text-center text-sm text-gray-600">
                                    No records yet for the departments.
                                </TableCell>
                            </TableRow>
                        ) : (
                            departments.data.map((department) => (
                                <TableRow key={department.id}>
                                    <TableCell
                                        className="py-4 pr-3 pl-4 text-sm whitespace-nowrap text-gray-900 sm:pl-6"
                                    >
                                        <Link href={`/departments/${department.id}`}>
                                            {department.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell
                                        className="py-4 px-3 text-sm whitespace-nowrap text-gray-900"
                                    >
                                        {dateFormatter(department.created_at)}
                                    </TableCell>
                                    <TableCell
                                        className="py-4 px-3 text-sm whitespace-nowrap text-gray-900"
                                    >
                                        {dateFormatter(department.updated_at)}
                                    </TableCell>
                                    <TableCell
                                        className="py-4 pr-4 pl-3 text-sm font-medium whitespace-nowrap sm:pr-6"
                                    >
                                        <div className="flex justify-end space-x-2">
                                            <Button
                                                className="bg-red-700 hover:bg-red-600"
                                                onClick={() => handleDelete(department.id)}
                                            >
                                                <Trash />
                                                Delete
                                            </Button>
                                            <Button
                                                asChild
                                                className="bg-green-700 hover:bg-green-600"
                                            >
                                                <Link 
                                                    href={`/departments/${department.id}/edit`}
                                                >
                                                        <SquarePen />
                                                        Edit
                                                </Link>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <AppPagination data={departments.meta} />
        </>
    )
}