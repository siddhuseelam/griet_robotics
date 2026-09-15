import {
  BrainIcon,
  BuildingsIcon,
  CalendarBlankIcon,
  CalendarDotsIcon,
  CertificateIcon,
  CpuIcon,
  CrownIcon,
  DatabaseIcon,
  EnvelopeSimpleIcon,
  FileTextIcon,
  HouseIcon,
  InfoIcon,
  InstagramLogoIcon,
  LightbulbIcon,
  LinkedinLogoIcon,
  MegaphoneIcon,
  PaletteIcon,
  RobotIcon,
  RocketLaunchIcon,
  SparkleIcon,
  StudentIcon,
  TicketIcon,
  TrophyIcon,
  UsersThreeIcon,
  WrenchIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react"

/**
 * Data files reference icons by name so they stay serialisable.
 * Only the icons listed here are bundled — never `import * as`.
 */
const registry = {
  BrainIcon,
  BuildingsIcon,
  CalendarBlankIcon,
  CalendarDotsIcon,
  CertificateIcon,
  CpuIcon,
  CrownIcon,
  DatabaseIcon,
  EnvelopeSimpleIcon,
  FileTextIcon,
  HouseIcon,
  InfoIcon,
  InstagramLogoIcon,
  LightbulbIcon,
  LinkedinLogoIcon,
  MegaphoneIcon,
  PaletteIcon,
  RobotIcon,
  RocketLaunchIcon,
  SparkleIcon,
  StudentIcon,
  TicketIcon,
  TrophyIcon,
  UsersThreeIcon,
  WrenchIcon,
  YoutubeLogoIcon,
}

export function Icon({ name, ...props }) {
  const Component = registry[name] ?? SparkleIcon
  return <Component {...props} />
}
