import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.json({message: "Hello from the about page"})
//   // return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }

// above is for redirect 

//below is for rewrite -> the url will be the same but the data will be served from different url

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about2')) {
    return NextResponse.rewrite(new URL('/about', request.url))
  }
}