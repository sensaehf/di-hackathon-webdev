export type ParliamentData = {
  parliamentMembersShort: ParliamentMemberShort[]
  parliamentMembers: ParliamentMember[]
  roles: Role[]
  committees: Committee[]
}

export type ParliamentMemberShort = {
    name: string
    abbreviation: string
    constituency: string
    constituencyNumber: string
    party: string
}

export type ParliamentMember = {
  id: number
  name: {
    firstName: string
    lastName: string
    fullName: string
    abbreviation: string
  }
  constituency: string
  constituencyNumber: string
  bio: string
  dateOfBirth: string
  email: string
  phone: string
  socialMedia: SocialMediaLink[]
  party: string
  image: Image
  ministry: string
  roles: {
    id: string
  }[]
  committees: {
    current: Committee[]
    previous: Committee[]
  }
}

export type SocialMediaLink = {
  type: string
  link: string
}

export type Image = {
  url: string
}

export type Role = {
  id: string
  name: string
}

export type Committee = {
  id: string
  name: string
}

export type BreadcrumbItem = {
  title: string
  href: string
}
