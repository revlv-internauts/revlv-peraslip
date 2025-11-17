import Layout from "@/components/layout"
import { Head, Link, router, useForm } from "@inertiajs/react"
import { Plus } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dateFormatter } from "@/lib/dateFormatter";

export default function Index({ payrolls }: any) {
    const { data, setData, post, processing, errors } = useForm({
        start_date: '',
        end_date: '',
    })
    const handleDelete = (id: number) => {
        if(confirm('Are you sure you want to delete this payroll?')) {
            router.delete(`/payrolls/${id}`)
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/payrolls/export')
    }
    return (
        <Layout>
        <Head title="Payrolls" />
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
                                <BreadcrumbItem className="text-base font-medium">
                                    <BreadcrumbPage>Payrolls</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-2">
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >

                       <div className="p-6">
                            <h1 className="text-2xl font-bold mb-4">Payroll Reports</h1>
                            <Card className="mb-6">
                                <CardHeader>
                                    <CardTitle>Generate New Report</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="flex gap-4 items-end">
                                        <div>
                                            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Start Date</label>
                                            <Input
                                                id="start_date"
                                                type="date"
                                                value={data.start_date}
                                                onChange={e => setData('start_date', e.target.value)}
                                            />
                                            {errors.start_date && <p className="text-red-500 text-xs mt-1">{errors.start_date}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">End Date</label>
                                            <Input
                                                id="end_date"
                                                type="date"
                                                value={data.end_date}
                                                onChange={e => setData('end_date', e.target.value)}
                                            />
                                            {errors.end_date && <p className="text-red-500 text-xs mt-1">{errors.end_date}</p>}
                                        </div>
                                        {/* <Link href="/users/create"> */}
                                            <Button>
                                                <Plus />
                                                Add Payroll
                                            </Button>
                                        {/* </Link> */}
                                    </form>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Stored Payroll Files</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>File Name</TableHead>
                                                <TableHead>Start Date</TableHead>
                                                <TableHead>End Date</TableHead>
                                                <TableHead>Generated At</TableHead>
                                                <TableHead className="flex justify-end space-x-2">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {payrolls.data.map((payroll: any) => (
                                                <TableRow key={payroll.id}>
                                                    <TableCell>{payroll.file_path}</TableCell>
                                                    <TableCell>{dateFormatter(payroll.start_date)}</TableCell>
                                                    <TableCell>{dateFormatter(payroll.end_date)}</TableCell>
                                                    <TableCell>{dateFormatter(payroll.created_at)}</TableCell>
                                                    <TableCell>
                                                        <div className="flex justify-end space-x-2">
                                                            <Button onClick={() => handleDelete(payroll.id)}>Delete</Button>
                                                            <Button 
                                                                asChild
                                                                className="bg-green-700 hover:bg-green-600"
                                                            >
                                                                <Link href={`/payrolls/${payroll.id}/export`} >
                                                                    Download
                                                                </Link>
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
 
                    </div>
                </div>
            </SidebarInset>
        </Layout>
    )
}
