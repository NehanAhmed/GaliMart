import { SignupForm } from "@/components/signup-form"
import { getSession } from "@/lib/auth-server"
import { redirect } from "next/navigation"

export default async function SignupPage() {
    const session = await getSession()

    if (session) redirect('/dashboard')

    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignupForm />
            </div>
        </div>
    )
}
