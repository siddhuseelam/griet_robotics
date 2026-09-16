import * as React from "react"
import { useSearchParams } from "react-router-dom"
import {
  GridFourIcon,
  MagnifyingGlassIcon,
  RowsIcon,
  UserIcon,
  UsersThreeIcon,
  XIcon,
} from "@phosphor-icons/react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "./ui/item"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Icon } from "@/lib/icons"
import { cn } from "cn"
import { domainStats, members } from "@/lib/team"
import { ResponsiveModal } from "./responsive-modal"
import { SectionHeading } from "./section-heading"
import TeamMemberCard from "./TeamMemberCard"

const sortOptions = [
  { value: "rank", label: "Leads first" },
  { value: "name", label: "Name (A–Z)" },
  { value: "domain", label: "Domain" },
]

/** Detail view shown when a card is tapped. */
function MemberProfile({ member, onOpenChange }) {
  return (
    <ResponsiveModal
      open={Boolean(member)}
      onOpenChange={onOpenChange}
      title={member?.name ?? ""}
      description={member ? `${member.role} · ${member.domainLabel}` : ""}
      className="sm:max-w-md"
    >
      {member && (
        <div className="flex flex-col items-center gap-4 p-6 pt-2 text-center">
          <Avatar size="lg" className="size-24">
            <AvatarImage src={member.photo ?? undefined} alt={member.name} />
            <AvatarFallback className="text-lg font-medium">
              {member.initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">{member.domainLabel}</Badge>
            <Badge variant={member.isLead ? "default" : "outline"}>
              {member.rank}
            </Badge>
          </div>

          <Separator />

          <p className="text-sm leading-relaxed text-muted-foreground">
            {member.isLead
              ? `${member.name.split(" ")[0]} leads the ${member.domainLabel.toLowerCase()} team, coordinating projects and mentoring members through the club's workshops.`
              : `${member.name.split(" ")[0]} is part of the ${member.domainLabel.toLowerCase()} team, working on club projects, events and workshops.`}
          </p>
        </div>
      )}
    </ResponsiveModal>
  )
}

/** Compact row used by the list layout. */
function MemberRow({ member, onSelect }) {
  return (
    <Item
      variant="outline"
      render={<button type="button" onClick={() => onSelect(member)} />}
      className="w-full text-left"
    >
      <ItemMedia>
        <Avatar>
          <AvatarImage src={member.photo ?? undefined} alt={member.name} />
          <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent className="gap-0.5">
        <ItemTitle className="flex items-center gap-1.5">
          {member.name}
        </ItemTitle>
        <ItemDescription>{member.role}</ItemDescription>
      </ItemContent>
      <ItemActions className="hidden sm:flex">
        <Badge variant="secondary">{member.domainLabel}</Badge>
      </ItemActions>
    </Item>
  )
}

export default function Members() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = React.useState("")
  const [sort, setSort] = React.useState("rank")
  const [layout, setLayout] = React.useState("grid")
  const [selected, setSelected] = React.useState(null)

  // The domain filter lives in the URL so the command palette and the home
  // page can link straight to a filtered roster.
  const domain = searchParams.get("domain") ?? "all"
  const setDomain = (next) => {
    const params = new URLSearchParams(searchParams)
    if (next === "all") params.delete("domain")
    else params.set("domain", next)
    setSearchParams(params, { replace: true })
  }

  const visible = React.useMemo(() => {
    const needle = query.trim().toLowerCase()

    const filtered = members.filter((member) => {
      const matchesDomain = domain === "all" || member.domainId === domain
      const matchesQuery =
        !needle ||
        member.name.toLowerCase().includes(needle) ||
        member.role.toLowerCase().includes(needle) ||
        member.domainLabel.toLowerCase().includes(needle)
      return matchesDomain && matchesQuery
    })

    const sorted = [...filtered]
    if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === "domain")
      sorted.sort(
        (a, b) =>
          a.domainLabel.localeCompare(b.domainLabel) || a.name.localeCompare(b.name)
      )
    return sorted
  }, [domain, query, sort])

  const activeDomain = domainStats.find((item) => item.id === domain)
  const hasFilters = domain !== "all" || query.trim().length > 0

  const clearFilters = () => {
    setQuery("")
    setDomain("all")
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Roster"
          title="Meet the team"
          description={`${members.length} students across ${domainStats.length} domains keep the Robotics Club running.`}
          align="center"
        />

        {/* ---------- Controls ---------- */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <InputGroup className="sm:max-w-sm">
              <InputGroupAddon>
                <MagnifyingGlassIcon />
              </InputGroupAddon>
              <InputGroupInput
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, role or domain"
                aria-label="Search members"
              />
              {query && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    aria-label="Clear search"
                    onClick={() => setQuery("")}
                  >
                    <XIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>

            <div className="flex items-center gap-2 sm:ml-auto">
              <Select items={sortOptions} value={sort} onValueChange={setSort}>
                <SelectTrigger size="sm" className="flex-1 sm:w-40 sm:flex-none">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <ToggleGroup
                variant="outline"
                spacing={0}
                value={[layout]}
                onValueChange={(next) => next[0] && setLayout(next[0])}
                className="shrink-0"
              >
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <ToggleGroupItem value="grid" aria-label="Grid view" size="sm" />
                    }
                  >
                    <GridFourIcon className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent>Grid</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <ToggleGroupItem value="list" aria-label="List view" size="sm" />
                    }
                  >
                    <RowsIcon className="size-4" />
                  </TooltipTrigger>
                  <TooltipContent>List</TooltipContent>
                </Tooltip>
              </ToggleGroup>
            </div>
          </div>

          {/* Domain chips swipe sideways on a phone and wrap once there is room. */}
          <div className="-mx-4 overflow-x-auto px-4 pb-1 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
            <ToggleGroup
              variant="outline"
              value={[domain]}
              onValueChange={(next) => setDomain(next[0] ?? "all")}
              className="w-max lg:w-full lg:flex-wrap"
            >
              <ToggleGroupItem value="all" size="sm" className="gap-1.5">
                <UsersThreeIcon className="size-4" />
                All
                <Badge variant="secondary" className="ml-0.5">
                  {members.length}
                </Badge>
              </ToggleGroupItem>
              {domainStats.map((item) => (
                <ToggleGroupItem
                  key={item.id}
                  value={item.id}
                  size="sm"
                  className="gap-1.5"
                >
                  <Icon name={item.icon} className="size-4" />
                  {item.label}
                  <Badge variant="secondary" className="ml-0.5">
                    {item.count}
                  </Badge>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>
              Showing {visible.length} of {members.length}
              {activeDomain ? ` in ${activeDomain.label}` : ""}
            </span>
            {hasFilters && (
              <Button variant="ghost" size="xs" onClick={clearFilters}>
                Clear filters
                <XIcon data-icon="inline-end" className="size-3" />
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-6" />

        {/* ---------- Results ---------- */}
        {visible.length === 0 ? (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <UserIcon />
              </EmptyMedia>
              <EmptyTitle>No members found</EmptyTitle>
              <EmptyDescription>
                Nothing matches “{query}”{activeDomain ? ` in ${activeDomain.label}` : ""}.
                Try a different search or clear the filters.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </EmptyContent>
          </Empty>
        ) : layout === "grid" ? (
          <div
            className={cn(
              "grid gap-4",
              "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            )}
          >
            {visible.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onSelect={setSelected}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {visible.map((member) => (
              <MemberRow key={member.id} member={member} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>

      <MemberProfile
        member={selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </div>
  )
}
