import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if user is not authenticated and trying to access protected routes
  if (!user && !request.nextUrl.pathname.startsWith("/auth") && request.nextUrl.pathname !== "/") {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    return NextResponse.redirect(url)
  }

  // Redirect to preferences if user is authenticated but hasn't set preferences
  if (
    user &&
    !request.nextUrl.pathname.startsWith("/preferences") &&
    !request.nextUrl.pathname.startsWith("/auth") &&
    !request.nextUrl.pathname.startsWith("/chat") &&
    request.nextUrl.pathname !== "/"
  ) {
    // Check if user has preferences set
    const { data: preferences } = await supabase.from("user_preferences").select("*").eq("id", user.id).single()

    if (!preferences && request.nextUrl.pathname !== "/preferences") {
      const url = request.nextUrl.clone()
      url.pathname = "/preferences"
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
