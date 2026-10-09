export function safeRedirect(path: string | undefined): string {
  if (path && path.startsWith("/") && !path.startsWith("//") && !path.includes("\\")) {
    return path;
  }
  return "/";
}
