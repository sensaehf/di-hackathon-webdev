export type ParliamentMember = {
  id: number
  name: {
    firstName: string
    lastName: string
    fullName: string
    abbreviation: string
  }
  constituency: string
  constituencyEn: string
  constituencyNumber: string
  constituencyNumberEn: string
  bio: string
  bioEn: string
  dateOfBirth: string
  email: string
  phone: string
  socialMedia: SocialMediaLink[]
  party: string
  partyEn: string
  image: Image
  ministry: string
  ministryEn: string
  roles: {
    id: number
  }[]
  committees: {
    current: {
      committeeId: number
      roleId: number
    }
    previous: {
      committeeId: number
      roleId: number
    }
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
  id: number
  name: string
  nameEn: string
}

export type Committee = {
  id: number
  name: string
  nameEn: string 
}

export type BreadcrumbItem = {
  title: string
  href: string
}

export type SearchItem = {
  label: string
  value: string
}
