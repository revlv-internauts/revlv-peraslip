import { usePage } from "@inertiajs/react"
import { Auth, User } from "@/types"

type AuthProps = {
    auth: {
        user: User
    }
}

export default function useAuth() {
    const { auth } = usePage<AuthProps>().props
    return {
        user: auth.user
        // userType: auth.user?.type ?? "",
    }
}