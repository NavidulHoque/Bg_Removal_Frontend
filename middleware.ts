import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'

const paths = ['/result', '/buy']

export async function middleware(request: NextRequest) {

    const pathname = request.nextUrl.pathname

    if (paths.some(path => pathname.startsWith(path))) {

        const session = await auth()

        if (!session) {

            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/result', '/buy'],
}