import { usePage } from "@inertiajs/react"
import { Auth, User } from "@/types"

interface pageProps {
    auth: {
        user: User | null
    }
}

export default function userAuth() {
    const { auth } = usePage<pageProps>().props;
    return {
        user: auth.user,
        userType: auth.user?.type ?? "",
    }
}