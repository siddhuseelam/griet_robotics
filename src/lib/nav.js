/** True when `to` is the current page, or an ancestor of it. */
export function isActivePath(pathname, to) {
  if (to === "/") return pathname === "/"
  return pathname === to || pathname.startsWith(`${to}/`)
}
