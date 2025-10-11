import Layout from "@/components/layout"
import { Head, useForm } from "@inertiajs/react"
import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function Create() {
    const { data, errors, setData, post, processing } = useForm({
        employee_id: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        date_of_hiring: "",
        email: "",
        phone_number: "",
        department_id: "",
        bank_number: "",
        basic_pay: "",
        sss_number: "",
        umid_number: "",
        philhealth_number: "",
        pagibig_number: "",
        tin_number: "",
    })

    const errorArray = Object.values(errors)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        post("/employees")
    }

    return (
        <Layout>
        <Head title="Employees-Create" />
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
                                    <BreadcrumbLink href="/users">
                                        Employees
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" /> 
                                <BreadcrumbItem className="text-base font-medium">
                                    <BreadcrumbPage>Create</BreadcrumbPage>
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
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                        <form 
                            onSubmit={handleSubmit}
                            method="POST"
                            action="/employees"
                            className="flex flex-col gap-6 p-4">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className="text-2xl font-bold">Employee Create</h1>
                            <p className="text-muted-foreground text-sm text-balance">
                            Enter a valid employee id for creating an employee
                            </p>
                        </div>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                            <Label htmlFor="employee_id">Employee ID</Label>
                            <Input 
                                id="employee_id"
                                type="text"
                                value={data.employee_id}
                                onChange={(e) => setData('employee_id', e.target.value)}
                                placeholder="e.g. 00000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="first_name">First Name</Label>
                            <Input 
                                id="first_name"
                                type="text"
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                placeholder="e.g. Juan Carlos" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="last_name">Last Name</Label>
                            <Input 
                                id="last_name"
                                type="text"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                placeholder="e.g. Dela Cruz" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="middle_name">Middle Name</Label>
                            <Input 
                                id="middle_name"
                                type="text"
                                value={data.middle_name}
                                onChange={(e) => setData('middle_name', e.target.value)}
                                placeholder="e.g. Penya" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="date_of_hiring">Date of Hiring</Label>
                            <Input 
                                id="date_of_hiring"
                                type="date"
                                value={data.date_of_hiring}
                                onChange={(e) => setData('date_of_hiring', e.target.value)}
                                placeholder="e.g. 2025-01-01" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="e.g. user@revlv.com" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="phone_number">Phone Number</Label>
                            <Input 
                                id="phone_number"
                                type="text"
                                value={data.phone_number}
                                onChange={(e) => setData('phone_number', e.target.value)}
                                placeholder="e.g. 00000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="department_id">Department ID</Label>
                            <Input 
                                id="department_id"
                                type="number"
                                value={data.department_id}
                                onChange={(e) => setData('department_id', e.target.value)}
                                placeholder="e.g. 0" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="bank_number">Bank ID</Label>
                            <Input 
                                id="bank_number"
                                type="text"
                                value={data.bank_number}
                                onChange={(e) => setData('bank_number', e.target.value)}
                                placeholder="e.g. 00000000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="basic_pay">Basic Pay</Label>
                            <Input 
                                id="basic_pay"
                                type="number"
                                value={data.basic_pay}
                                onChange={(e) => setData('basic_pay', e.target.value)}
                                placeholder="e.g. 200" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="sss_number">SSS ID</Label>
                            <Input 
                                id="sss_number"
                                type="text"
                                value={data.sss_number}
                                onChange={(e) => setData('sss_number', e.target.value)}
                                placeholder="e.g. 0000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="umid_number">UMID ID</Label>
                            <Input 
                                id="umid_number"
                                type="text"
                                value={data.umid_number}
                                onChange={(e) => setData('umid_number', e.target.value)}
                                placeholder="e.g. 000000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="philhealth_number">PhilHealth ID</Label>
                            <Input 
                                id="philhealth_number"
                                type="text"
                                value={data.philhealth_number}
                                onChange={(e) => setData('philhealth_number', e.target.value)}
                                placeholder="e.g. 000000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="pagibig_number">Pag-IBIG ID</Label>
                            <Input 
                                id="pagibig_number"
                                type="text"
                                value={data.pagibig_number}
                                onChange={(e) => setData('pagibig_number', e.target.value)}
                                placeholder="e.g. 000000000000" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="tin_number">TIN ID</Label>
                            <Input 
                                id="tin_number"
                                type="text"
                                value={data.tin_number}
                                onChange={(e) => setData('tin_number', e.target.value)}
                                placeholder="e.g. 000000000" 
                            />
                            </div>

                            {errorArray.length > 0 && (
                            <Alert variant="destructive" className="bg-red-100">
                                <AlertCircleIcon />
                                <AlertTitle>Create Failed.</AlertTitle>
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
                            {processing ? 'Creating employee...' : 'Create'}
                            </Button>
                        </div>
                        </form>
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    );
}