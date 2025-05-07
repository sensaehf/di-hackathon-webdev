import React, { FC } from 'react'
import {
  ParliamentMember  
} from './types'
import { Webreader } from '../components/Webreader'
import { getAllParliamentMembers } from './endpoints'

export const ParliamentMemberList: FC = () => {
  const members = getAllParliamentMembers() as ParliamentMember[]

  return (
    <>
      <Webreader readId="members" />
      <ul id="members">
        {members.map((member) => (
          <li key={member.name.fullName}>
            {member.name.fullName} {member.constituency}{' '}
            {member.constituencyNumber} {member.party}
          </li>
        ))}
      </ul>
    </>
  )
}
