'use client'
import React from 'react'
import { Button } from './ui/button'
import { IconBrandGoogle, IconBrandGoogleFilled } from '@tabler/icons-react'
import { authClient } from '@/lib/auth-client'

const GoogleOauthButton = () => {

    const signinWithGoogle = async () => authClient.signIn.social({
        callbackURL: '/dashboard',
        provider: 'google',


    })

    return (
        <Button
            className={'flex gap-2 items-center justify-center '}
            variant={'outline'}
            size={'icon-lg'}
            onClick={signinWithGoogle}
        >
            <IconBrandGoogleFilled />
            Continue with Google
        </Button>
    )
}

export default GoogleOauthButton