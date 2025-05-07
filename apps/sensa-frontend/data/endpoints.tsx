import members from './members.json'
import roles from './roles.json'
import committees from './committees.json'
import { Role, ParliamentMember, Committee, SearchItem } from './types'

export const getAllParliamentMembers = (): ParliamentMember[] => {
  return members as unknown as ParliamentMember[]
}

export const getAllParliamentMembersAsSearchItem = (): SearchItem[] => {
  return getAllParliamentMembers().map((member) => ({
    label: member.name.fullName ?? '',
    value: member.id.toString() ?? '',
  }))
}

export const getParliamentMemberById = (
  id: number,
): ParliamentMember | undefined => {
  return getAllParliamentMembers().find((item) => item.id === id)
}

export const getAllRoles = (): Role[] => {
  return roles as unknown as Role[]
}

export const getRoleById = (id: number): Role | undefined => {
  return getAllRoles().find((item) => item.id === id)
}

export const getAllCommittees = (): Committee[] => {
  return committees as unknown as Committee[]
}

export const getCommitteeById = (id: number): Role | undefined => {
  return getAllCommittees().find((item) => item.id === id)
}

export function searchMembers(
  members: ParliamentMember[],
  query: string,
): ParliamentMember[] {
  const lowerQuery = query.toLowerCase()

  return members.filter((member) =>
    member.name.fullName.toLowerCase().includes(lowerQuery),
  )
}
