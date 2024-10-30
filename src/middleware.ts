import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/login', '/create-password', '/forgot-password', '/register', "/create-new-password", "/confirm-password", "/reset-password"]

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isProtectedRoute = !publicRoutes.includes(path)

    const authCookie = request.cookies.get("auth-store")?.value
    let isAuthenticated = false

    if (authCookie) {
        try {
            const parsedCookie = JSON.parse(authCookie)
            isAuthenticated = parsedCookie.state?.isAuthenticated && request.cookies.has("auth-store")
        } catch (error) {
            console.error("Failed to parse auth cookie:", error)
            isAuthenticated = false
        }
    }

    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if (!isProtectedRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
