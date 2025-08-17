import { Link } from "@inertiajs/react"

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <div>
            <header>
                <h1>Revlv PeraSlip</h1>
            </header>
            <main>{children}</main>
            <Link href={route('logout')} method="post" as="button" className="text-blue-500 underline">
                Logout
            </Link>
            <footer>
                <p>&copy; 2025 Revlv PeraSlip</p>
            </footer>
        </div>
    )
}