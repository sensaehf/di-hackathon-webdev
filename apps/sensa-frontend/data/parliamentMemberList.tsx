import React, { FC } from 'react';
import parliamentData from './parliamentData.json';
import parliamentDataShort from './data.json';
import { ParliamentData, ParliamentMember, ParliamentMemberShort } from './types';

export const ParliamentMemberList: FC = () => {
    const members: ParliamentMember[] = parliamentData.parliamentMembers

    return (
        <>
        {members.map((member) => (
            <li key={member.id}>
              {member.name.fullName} {member.constituency} {member.constituencyNumber} {member.party}
            </li>
          ))}
        </>
    )
}


