import { Link } from '@inertiajs/react'
import { 
    ChevronLeft,
    ChevronRight,
} from 'lucide-react'
import { type Meta } from '@/types/pagination'

type PaginationProps = {
    data: Meta;
}

export default function AppPagination({ data }: PaginationProps) {
    const prevLink = data.links.find(link => link.label === '&laquo; Previous')
    const nextLink = data.links.find(link => link.label === 'Next &raquo;')
    return (
        <nav className="flex justify-center">
            <div className="flex items-center space-x-2">
                
                {prevLink && prevLink.url ? (
                    <Link
                        href={prevLink.url}
                        className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
                        preserveState
                        preserveScroll
                    >
                        <ChevronLeft className="h-6 w-4" />
                    </Link>
                ) : (
                    <span className="px-4 py-2 border rounded-md text-gray-400 cursor-not-allowed flex items-center">
                        <ChevronLeft className="h-6 w-4" />
                    </span>
                )}

                {data.links.map((link, index) => {
                    if (link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;') {
                        return link.url ? (
                            <Link
                                key={index}
                                href={link.url}
                                className={`px-4 py-2 border rounded-md ${
                                link.active ? 'bg-red-700 text-white' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <span
                                key={index}
                                className="px-4 py-2 border rounded-md text-gray-400 cursor-not-allowed"
                            >
                                {link.label}
                            </span>
                        );
                    }
                    return null;
                })}

                {nextLink && nextLink.url ? (
                    <Link
                        href={nextLink.url}
                        className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 flex items-center"
                        preserveState
                        preserveScroll
                    >
                        <ChevronRight className="h-6 w-4" />
                    </Link>
                ) : (
                    <span className="px-4 py-2 border rounded-md text-gray-400 cursor-not-allowed flex items-center">
                        <ChevronRight className="h-6 w-4" />
                    </span>
                )}
            </div>
        </nav>
    )
}