import { Link } from '@inertiajs/react'
import { Meta } from '@/types/pagination'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

type PaginationProps = {
    data: Meta;
}

export default function AppPagination({ data }: PaginationProps) {
    const paginationLinks = data.links.slice(1, -1)
    const previousLink = data.links[0].url
    const nextLink = data.links[data.links.length - 1].url

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={previousLink}>
                        <Link
                            href={previousLink}
                            preserveScroll
                            preserveState
                            className={!previousLink ? 'pointer-events-none opacity-50' : ''}
                        >
                            <ChevronLeft />
                            Previous
                        </Link>
                    </PaginationPrevious>
                </PaginationItem>

                {paginationLinks.map((link, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink isActive={link.active}>
                            <Link href={link.url} className={`${link.active ? 'font-bold' : null}`}>
                                {link.label}
                            </Link>
                        </PaginationLink>
                    </PaginationItem>
                ))}

                    <PaginationItem>
                        <PaginationNext href={nextLink}>
                            <Link
                                href={nextLink}
                                preserveScroll
                                preserveState
                                className={!nextLink ? 'pointer-events-none opacity-50' : ''}
                            >
                                <ChevronRight />
                                Next
                            </Link>
                        </PaginationNext>
                    </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}