import { Form } from '@inertiajs/react'
import Layout from '@/components/layout'
import { Head, Link } from '@inertiajs/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function Edit({ user }: any) {
    return (
        <Layout>
        <Head title="Users - Edit" />
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
                                    <Link href="/users">
                                        Users
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
                <Form action={`/users/${user.id}`} method="PUT" className="px-8">
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
                                    <h2 className="text-base/7 font-semibold text-gray-900">Information for User ID: {user.id}</h2>
                                    <p className="mt-1 text-sm/6 text-gray-600">Edit with safety precautions.</p>
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="first_name" className="block text-sm/6 font-medium text-gray-900">
                                                First Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="first_name"
                                                    name="first_name"
                                                    defaultValue={user.first_name}
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
                                                    defaultValue={user.last_name}
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
                                                    defaultValue={user.middle_name}
                                                    name="middle_name"
                                                    type="text"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {errors.middle_name && <div className="text-red-500">{errors.middle_name}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    defaultValue={user.email}
                                                    name="email"
                                                    type="email"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>

                                            {errors.email && <div className="text-red-500">{errors.email}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>

                                            {errors.password && <div className="text-red-500">{errors.password}</div>}
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="password_confirmation" className="block text-sm/6 font-medium text-gray-900">
                                                Confirm Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="password_confirmation"
                                                    name="password_confirmation"
                                                    type="password"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                                />
                                            </div>
                                            {/* {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>} */}
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