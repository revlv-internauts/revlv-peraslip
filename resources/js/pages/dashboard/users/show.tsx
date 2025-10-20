import Layout from "@/components/layout"
import { User } from "@/types"
import { useForm, usePage, Head, Link } from "@inertiajs/react"
import { AlertCircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { dateFormatter } from "@/lib/dateFormatter"

type UserIndexProps = {
    user: {
        data: Array<User>,
        id: number,
        first_name: string,
        last_name: string,
        middle_name: string,
        email: string,
        password: "",
        created_at: string,
        updated_at: string,
    }
}

export default function Show() {
    const { user }: UserIndexProps = usePage<UserIndexProps>().props
    
    const { data, errors, setData, put, processing } = useForm({
        id: user.id,
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        middle_name: user.middle_name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        created_at: user.created_at || "",
        updated_at: user.updated_at || ""
    })

    const errorArray = Object.values(errors)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        put(`/users/${user.id}`)
    }

    return (
        <Layout>
        <Head title="Users - Show" />
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
                                    <Link href="/users">
                                        Users
                                    </Link>
                                </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" /> 
                                <BreadcrumbItem className="text-base font-medium">
                                    <BreadcrumbPage>User ID: {user.id}</BreadcrumbPage>
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
                            <h1 className="text-2xl font-bold">User Information</h1>
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
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                            <Input 
                                id="password_confirmation"
                                type="password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="created_at">Created At</Label>
                            <Input 
                                id="created_at"
                                // type="created_at"
                                value={dateFormatter(data.created_at)}
                                onChange={(e) => setData('created_at', e.target.value)}
                                placeholder="e.g. user@revlv.com" 
                            />
                            </div>
                            <div className="grid gap-3">
                            <Label htmlFor="updated_at">Updated At</Label>
                            <Input 
                                id="updated_at"
                                // type="updated_at"
                                value={dateFormatter(data.updated_at)}
                                onChange={(e) => setData('updated_at', e.target.value)}
                                placeholder="e.g. user@revlv.com" 
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
                            {processing ? 'Updating user...' : 'Update'}
                            </Button>
                        </div>
                        </form>
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    );
}