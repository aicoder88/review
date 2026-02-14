import { NextRequest, NextResponse } from "next/server";

const BLOCKED_PATHS = [
  "/wp-admin",
  "/wp-login.php",
  "/xmlrpc.php",
  "/phpmyadmin",
  "/.env",
  "/.git",
  "/vendor/phpunit",
  "/boaform/admin/formlogin",
  "/cgi-bin/luci",
  "/actuator",
];

const BLOCKED_USER_AGENTS = [
  "python-requests",
  "python-urllib",
  "curl/",
  "wget/",
  "go-http-client",
  "masscan",
  "zgrab",
  "sqlmap",
  "nikto",
  "nmap",
  "dirbuster",
  "wpscan",
];

function isBlockedPath(pathname: string): boolean {
  const lowerPath = pathname.toLowerCase();
  return BLOCKED_PATHS.some(
    (blocked) => lowerPath === blocked || lowerPath.startsWith(`${blocked}/`),
  );
}

function hasBlockedUserAgent(userAgent: string): boolean {
  if (!userAgent) return false;
  const lowerUserAgent = userAgent.toLowerCase();
  return BLOCKED_USER_AGENTS.some((pattern) =>
    lowerUserAgent.includes(pattern),
  );
}

export function middleware(request: NextRequest) {
  if (isBlockedPath(request.nextUrl.pathname)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (hasBlockedUserAgent(userAgent)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml)$).*)",
  ],
};
