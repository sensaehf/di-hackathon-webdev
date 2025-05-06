import React, { FC } from 'react'
import parliamentData from './parliamentData.json'
import parliamentDataShort from './data.json'
import {
  ParliamentData,
  ParliamentMember,
  ParliamentMemberShort,
} from './types'
import { Webreader } from '../components/Webreader'

export const ParliamentMemberList: FC = () => {
  const members: ParliamentMember[] = parliamentData.parliamentMembers

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
