import { Link } from '@inertiajs/react'
import { Meta } from '@/types/pagination'
import { cn } from '@/lib/utils'

type PaginationProps = {
    data: Meta;
}

export default function AppPagination({ data }: PaginationProps) {

    return (
        <nav className="flex justify-center mt-4">
            <ul className="flex items-center space-x-2">
                {data.links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.url || '#'} 
                            className={cn(
                                "px-4 py-2 rounded-md border",
                                link.active ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
                                link.url === null && "opacity-50 cursor-not-allowed" 
                            )}
                            preserveScroll 
                            preserveState 
                            disabled={link.url === null} 
                        >
                            {link.label.includes('Previous') ? '« Previous' : link.label.includes('Next') ? 'Next »' : link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}