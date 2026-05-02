import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { toast } from 'react-toastify'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return (
            NextResponse.redirect(new URL('/register', request.url))
        )
    }

}


export const config = {
    matcher: ['/courses', '/courses/:path', '/profile'],
}