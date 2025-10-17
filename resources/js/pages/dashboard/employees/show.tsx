import Layout from "@/components/layout"
import { Employee } from "@/types"
import { useForm, usePage, Head } from "@inertiajs/react"
import { AlertCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { dateFormatter } from "@/lib/dateFormatter"

type employeeIndexProps = {
    employee: {
        data: Array<Employee>,
        id: string,
        employee_id: string,
        first_name: string,
        last_name: string,
        middle_name: string,
        email: string,
        date_of_hiring: string,
        phone_number: string,
        bank_number: string,
        department_id: number,
        basic_pay: number,
        sss_number: string,
        umid_number: string,
        philhealth_number: string,
        pagibig_number: string,
        tin_number: string,
        created_at: string,
        updated_at: string,
    }
}

export default function Show() {
    const { employee }: employeeIndexProps = usePage<employeeIndexProps>().props
    
    const { data, errors, setData, put, processing } = useForm({
        id: employee.id,
        employee_id: employee.employee_id || "",
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        middle_name: employee.middle_name || "",
        email: employee.email || "",
        date_of_hiring: employee.date_of_hiring || "",
        phone_number: employee.phone_number || "",
        bank_number: employee.bank_number || "",
        department_id: employee.department_id || "",
        basic_pay: employee.basic_pay || "",
        sss_number: employee.sss_number || "",
        umid_number: employee.umid_number || "",
        philhealth_number: employee.philhealth_number || "",
        pagibig_number: employee.pagibig_number || "",
        tin_number: employee.tin_number || "",
        created_at: employee.created_at || "",
        updated_at: employee.updated_at || ""
    })

    const errorArray = Object.values(errors)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        put(`/employees/${employee.id}`)
    }

    return (
        <Layout>
        <Head title="Employees-Show" />
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
                                <BreadcrumbItem className="text-base font-medium hidden md:block">
                                    <BreadcrumbLink href="/employees">
                                        Employees
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" /> 
                                <BreadcrumbItem className="text-base font-medium">
                                    <BreadcrumbPage>Employee ID: {employee.employee_id}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                        <form 
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-4">
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Employee Information</h1>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                <Label htmlFor="employee_id">Employee ID</Label>
                                <Input 
                                    id="employee_id"
                                    type="text"
                                    value={data.employee_id}
                                    onChange={(e) => setData('employee_id', e.target.value)}
                                    maxLength={11} 
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input 
                                    id="first_name"
                                    type="text"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input 
                                    id="last_name"
                                    type="text"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="middle_name">Middle Name</Label>
                                <Input 
                                    id="middle_name"
                                    type="text"
                                    value={data.middle_name}
                                    onChange={(e) => setData('middle_name', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="date_of_hiring">Date of Hiring</Label>
                                <Input 
                                    id="date_of_hiring"
                                    type="date"
                                    value={data.date_of_hiring}
                                    onChange={(e) => setData('date_of_hiring', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="phone_number">Phone Number</Label>
                                <Input 
                                    id="phone_number"
                                    type="text"
                                    value={data.phone_number}
                                    onChange={(e) => setData('phone_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="department_id">Department ID</Label>
                                <Input 
                                    id="department_id"
                                    type="number"
                                    value={data.department_id}
                                    onChange={(e) => setData('department_id', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="bank_number">Bank ID</Label>
                                <Input 
                                    id="bank_number"
                                    type="text"
                                    value={data.bank_number}
                                    onChange={(e) => setData('bank_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="basic_pay">Basic Pay</Label>
                                <Input 
                                    id="basic_pay"
                                    type="number"
                                    value={data.basic_pay}
                                    onChange={(e) => setData('basic_pay', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="sss_number">SSS ID</Label>
                                <Input 
                                    id="sss_number"
                                    type="text"
                                    value={data.sss_number}
                                    onChange={(e) => setData('sss_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="umid_number">UMID ID</Label>
                                <Input 
                                    id="umid_number"
                                    type="text"
                                    value={data.umid_number}
                                    onChange={(e) => setData('umid_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="philhealth_number">PhilHealth ID</Label>
                                <Input 
                                    id="philhealth_number"
                                    type="text"
                                    value={data.philhealth_number}
                                    onChange={(e) => setData('philhealth_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="pagibig_number">Pag-IBIG ID</Label>
                                <Input 
                                    id="pagibig_number"
                                    type="text"
                                    value={data.pagibig_number}
                                    onChange={(e) => setData('pagibig_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="tin_number">TIN ID</Label>
                                <Input 
                                    id="tin_number"
                                    type="text"
                                    value={data.tin_number}
                                    onChange={(e) => setData('tin_number', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="created_at">Created At</Label>
                                <Input 
                                    id="created_at"
                                    value={dateFormatter(data.created_at)}
                                    onChange={(e) => setData('created_at', e.target.value)}
                                />
                                </div>
                                <div className="grid gap-3">
                                <Label htmlFor="updated_at">Updated At</Label>
                                <Input 
                                    id="updated_at"
                                    value={dateFormatter(data.updated_at)}
                                    onChange={(e) => setData('updated_at', e.target.value)}
                                />
                                </div>

                                {errorArray.length > 0 && (
                                <Alert variant="destructive" className="bg-red-100">
                                    <AlertCircleIcon />
                                    <AlertTitle>Update Failed.</AlertTitle>
                                    <AlertDescription>
                                    <p>{errorArray.length} error/s with your submission:</p>
                                    <ul className="list-inside list-disc text-sm">
                                        {errorArray.map((err, index) => (
                                        <li key={index}>{err}</li>
                                        ))}
                                    </ul>
                                    </AlertDescription>
                                </Alert>
                                )}

                                <Button 
                                type="submit"
                                disabled={processing}
                                className="w-full">
                                {processing ? 'Updating employee...' : 'Update'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    );
}