import { Form } from '@inertiajs/react'
import Layout from '@/components/layout'
import { Head, Link } from '@inertiajs/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Department } from '@/types'

type DepartmentEditProps = {
    department: Department
}

export default function DepartmentsEdit({ department }: DepartmentEditProps) {
    return (
        <Layout>
        <Head title="Departments - Edit" />
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
                                    <Link href="/departments">
                                        Departments
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
                <Form action={`/departments/${department.id}`} method="PUT" className="px-8">
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
                                    <h2 className="text-base/7 font-semibold text-gray-900">Information for Department ID: {department.id}</h2>
                                    <p className="mt-1 text-sm/6 text-gray-600">Edit with safety precautions.</p>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">

                                        <div className="sm:col-span-6">
                                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    defaultValue={department.name}
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.name && <div className="text-red-500">{errors.name}</div>}
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