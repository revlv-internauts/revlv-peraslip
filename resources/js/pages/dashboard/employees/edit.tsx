import { Form } from '@inertiajs/react'
import Layout from '@/components/layout'
import { Head, Link } from '@inertiajs/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Department, Employee } from '@/types'

type EmployeeEditProps = {
    employee: Employee
    departments: Array<Department>
}

export default function EmployeesEdit({ employee, departments }: EmployeeEditProps) {
    return (
        <Layout>
        <Head title="Employees - Edit" />
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
                                <BreadcrumbItem className="text-base font-medium hidden md:block">
                                    <Link href="/employees">
                                        Employees
                                    </Link>
                                </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" /> 
                                <BreadcrumbItem className="text-base font-medium">
                                    <BreadcrumbPage>Edit</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <Form action={`/employees/${employee.id}`} method="PUT" className="px-8">
                    {({
                        errors,
                        hasErrors,
                        processing,
                        progress,
                        wasSuccessful,
                        recentlySuccessful,
                        setError,
                        clearErrors,
                        resetAndClearErrors,
                        defaults,
                        isDirty,
                        reset,
                        submit,

                    }) => (
                        <>
                            <div className="space-y-12 mt-4">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <h2 className="text-base/7 font-semibold text-gray-900">Information for Employee ID: {employee.id}</h2>
                                    <p className="mt-1 text-sm/6 text-gray-600">Edit with safety precautions.</p>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">

                                        <div className="sm:col-span-4">
                                            <label htmlFor="first_name" className="block text-sm/6 font-medium text-gray-900">
                                                First Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="first_name"
                                                    defaultValue={employee.first_name}
                                                    name="first_name"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.first_name && <div className="text-red-500">{errors.first_name}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="last_name" className="block text-sm/6 font-medium text-gray-900">
                                                Last Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="last_name"
                                                    defaultValue={employee.last_name}
                                                    name="last_name"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.last_name && <div className="text-red-500">{errors.last_name}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="middle_name" className="block text-sm/6 font-medium text-gray-900">
                                                Middle Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="middle_name"
                                                    defaultValue={employee.middle_name}
                                                    name="middle_name"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.middle_name && <div className="text-red-500">{errors.middle_name}</div>}
                                        </div>
                                        <div className="sm:col-span-4">
                                            <label htmlFor="employee_id" className="block text-sm/6 font-medium text-gray-900">
                                                Employee ID
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="employee_id"
                                                    name="employee_id"
                                                    defaultValue={employee.employee_id}
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.employee_id && <div className="text-red-500">{errors.employee_id}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="date_of_hiring" className="block text-sm/6 font-medium text-gray-900">
                                                Date of Hiring
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="date_of_hiring"
                                                    defaultValue={employee.date_of_hiring}
                                                    name="date_of_hiring"
                                                    type="date"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.date_of_hiring && <div className="text-red-500">{errors.date_of_hiring}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    defaultValue={employee.email}
                                                    name="email"
                                                    type="email"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.email && <div className="text-red-500">{errors.email}</div>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="phone_number" className="block text-sm/6 font-medium text-gray-900">
                                                Phone Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="phone_number"
                                                    defaultValue={employee.phone_number}
                                                    name="phone_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.phone_number && <div className="text-red-500">{errors.phone_number}</div>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="department_id" className="block text-sm/6 font-medium text-gray-900">
                                                Department
                                            </label>
                                            <div className="mt-2">
                                                <select 
                                                    id="department_id"
                                                    name="department_id"
                                                    defaultValue={employee.department_id}
                                                    className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                >
                                                    <option value="" disabled>Select Department</option>
                                                    {departments.map((department: any) => (
                                                        <option 
                                                            key={department.id} 
                                                            value={department.id}
                                                        >
                                                            {department.name}
                                                        </option>
                                                    ))}
                                                </select> 
                                            </div>
                                            {errors.department_id && <div className="text-red-500">{errors.department_id}</div>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="bank_number" className="block text-sm/6 font-medium text-gray-900">
                                                Bank Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="bank_number"
                                                    defaultValue={employee.bank_number}
                                                    name="bank_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.bank_number && <div className="text-red-500">{errors.bank_number}</div>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="basic_pay" className="block text-sm/6 font-medium text-gray-900">
                                                Basic Salary
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="basic_pay"
                                                    defaultValue={employee.basic_pay}
                                                    name="basic_pay"
                                                    type="number"
                                                    min={200}
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.basic_pay && <div className="text-red-500">{errors.basic_pay}</div>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="sss_number" className="block text-sm/6 font-medium text-gray-900">
                                                SSS Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="sss_number"
                                                    defaultValue={employee.sss_number}
                                                    name="sss_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.sss_number && <div className="text-red-500">{errors.sss_number}</div>}
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="gsis_number" className="block text-sm/6 font-medium text-gray-900">
                                                GSIS Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="gsis_number"
                                                    defaultValue={employee.gsis_number}
                                                    name="gsis_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.gsis_number && <div className="text-red-500">{errors.gsis_number}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="philhealth_number" className="block text-sm/6 font-medium text-gray-900">
                                                PhilHealth Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="philhealth_number"
                                                    defaultValue={employee.philhealth_number}
                                                    name="philhealth_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.philhealth_number && <div className="text-red-500">{errors.philhealth_number}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="pagibig_number" className="block text-sm/6 font-medium text-gray-900">
                                                Pag-IBIG Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="pagibig_number"
                                                    defaultValue={employee.pagibig_number}
                                                    name="pagibig_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.pagibig_number && <div className="text-red-500">{errors.pagibig_number}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="tin_number" className="block text-sm/6 font-medium text-gray-900">
                                                TIN Number
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="tin_number"
                                                    defaultValue={employee.tin_number}
                                                    name="tin_number"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.tin_number && <div className="text-red-500">{errors.tin_number}</div>}
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="w-36 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs"
                                >
                                    {processing ? 'Updating...' : 'Update'}
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </SidebarInset>
        </Layout>
    )
}