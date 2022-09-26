import AuthCard from '@/components/Auth/AuthCard'
import AuthSessionStatus from '@/components/Auth/AuthSessionStatus'
import AuthValidationErrors from '@/components/Auth/AuthValidationErrors'
import Button from '@/components/Auth/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Auth/Input'
import Label from '@/components/Auth/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a className="text-5xl font-open">POWER<span
                            className="text-primary">CREW</span>
                        </a>
                    </Link>
                }>

                <div className="mb-4 text-sm text-gray-600">
                    Vous avez oublié votre mot de passe ? Aucun problème. <br/>
                    Faites-nous simplement savoir votre adresse e-mail et nous vous enverrons par e-mail un lien de
                    réinitialisation de mot de passe qui vous
                    permettra d'en choisir un nouveau.
                </div>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button>Envoyer le lien</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
