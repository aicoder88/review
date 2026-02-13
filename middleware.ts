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

const ALLOWED_IMAGE_WIDTHS = new Set([
  16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
  3840,
]);

const ALLOWED_IMAGE_QUALITIES = new Set([60, 75, 85, 90]);

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

function hasInvalidImageParams(request: NextRequest): boolean {
  if (request.nextUrl.pathname !== "/_next/image") return false;

  const width = Number(request.nextUrl.searchParams.get("w"));
  if (!Number.isFinite(width) || !ALLOWED_IMAGE_WIDTHS.has(width)) return true;

  const qualityValue = request.nextUrl.searchParams.get("q");
  if (qualityValue === null) return false;

  const quality = Number(qualityValue);
  return !Number.isInteger(quality) || !ALLOWED_IMAGE_QUALITIES.has(quality);
}

export function middleware(request: NextRequest) {
  if (isBlockedPath(request.nextUrl.pathname)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (hasBlockedUserAgent(userAgent)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (hasInvalidImageParams(request)) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/data|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml)$).*)",
  ],
};
