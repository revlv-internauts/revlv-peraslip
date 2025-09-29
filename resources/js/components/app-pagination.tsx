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

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={data.links[0].url}>
                        <Link
                            href={data.links[0].url}
                            className={!data.links[0].url ? 'pointer-events-none opacity-50' : ''}
                        >
                            <ChevronLeft />
                            Previous
                        </Link>
                    </PaginationPrevious>
                </PaginationItem>

                {data.links.slice(1, -1).map((link, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink isActive={link.active}>
                            <Link href={link.url} className={`${link.active ? 'font-bold' : null}`}>
                                {link.label}
                            </Link>
                        </PaginationLink>
                    </PaginationItem>
                ))}

                    <PaginationItem>
                        <PaginationNext href={data.links[data.links.length - 1].url}>
                            <Link
                                href={data.links[data.links.length - 1].url}
                                className={!data.links[data.links.length - 1].url ? 'pointer-events-none opacity-50' : ''}
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