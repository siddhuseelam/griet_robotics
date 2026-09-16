import teamData from "../assets/teamData.json"

/**
 * The roster is collected through a Google Form, so `Domain` arrives in a dozen
 * spellings ("Technical", "Tech", "TECHNICAL "). Everything here normalises that
 * raw sheet into a shape the UI can group, filter and sort against.
 */

export const domains = [
  { id: "core", label: "Core", icon: "CrownIcon", match: ["president", "secretary", "treasury", "all rounder", "core", "vice"] },
  { id: "technical", label: "Technical", icon: "CpuIcon", match: ["tech"] },
  { id: "creative", label: "Creative & Design", icon: "PaletteIcon", match: ["design", "creative"] },
  { id: "documentation", label: "Documentation", icon: "FileTextIcon", match: ["document", "documention"] },
  { id: "events", label: "Event Management", icon: "CalendarDotsIcon", match: ["event"] },
  { id: "database", label: "Database", icon: "DatabaseIcon", match: ["database", "data"] },
  { id: "outreach", label: "PR & Publicity", icon: "MegaphoneIcon", match: ["pr", "publicity", "cr"] },
]

const LEAD_WORDS = ["lead", "head", "president", "secretary", "treasury", "vice", "founder"]
const JUNIOR_WORDS = ["jr", "junior"]

function domainIdFor(raw) {
  const value = raw.toLowerCase()
  const found = domains.find((domain) =>
    domain.match.some((needle) => value.includes(needle))
  )
  return found ? found.id : "core"
}

function rankFor(raw) {
  const value = raw.toLowerCase()
  if (JUNIOR_WORDS.some((word) => value.includes(word))) return "Junior"
  if (LEAD_WORDS.some((word) => value.includes(word))) return "Lead"
  return "Member"
}

/** Google Drive share links are not directly embeddable — rewrite to a thumbnail URL. */
function directImageUrl(url) {
  if (!url) return null
  if (url.startsWith("/") || url.startsWith("data:") || (url.startsWith("http") && !url.includes("drive.google.com"))) {
    return url
  }
  const match = url.match(/id=([a-zA-Z0-9_-]+)/)
  if (!match) return url
  return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`
}

function titleCase(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function initialsOf(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}

export const members = teamData
  .filter((row) => row.Name && row.Domain)
  .map((row, index) => {
    const rawDomain = row.Domain.trim()
    const domainId = domainIdFor(rawDomain)
    const rank = rankFor(rawDomain)

    return {
      id: `${index}-${row.Name.trim().toLowerCase().replace(/\s+/g, "-")}`,
      name: titleCase(row.Name),
      initials: initialsOf(row.Name),
      role: titleCase(rawDomain),
      domainId,
      domainLabel: domains.find((d) => d.id === domainId)?.label ?? "Core",
      rank,
      isLead: rank === "Lead",
      photo: directImageUrl(row.Photo),
    }
  })
  // Leads first, then juniors last, alphabetical within each band.
  .sort((a, b) => {
    const order = { Lead: 0, Member: 1, Junior: 2 }
    if (order[a.rank] !== order[b.rank]) return order[a.rank] - order[b.rank]
    return a.name.localeCompare(b.name)
  })

export const leads = members.filter((member) => member.isLead)

/** Domains that actually have people in them, with their headcount. */
export const domainStats = domains
  .map((domain) => ({
    ...domain,
    count: members.filter((member) => member.domainId === domain.id).length,
  }))
  .filter((domain) => domain.count > 0)

export const memberCount = members.length
