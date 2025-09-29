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
        first_name: "",
        last_name: "",
        middle_name: "",
        email: "",
        password: "",
    })

    const errorArray = Object.values(errors)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        post("/users")
    }

    return (
        <Layout>
        <Head title="Users-Create" />
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
                                        Users
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
                            action="/users"
                            className="flex flex-col gap-6 p-4">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className="text-2xl font-bold">User Create</h1>
                            <p className="text-muted-foreground text-sm text-balance">
                            Enter a valid revlv email for creating a user
                            </p>
                        </div>
                        <div className="grid gap-6">
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
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
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
                            {processing ? 'Creating user...' : 'Create'}
                            </Button>
                        </div>
                        </form>
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    );
}