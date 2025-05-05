import React, { FC } from 'react';  
import parliamentData from './parliamentData.json';
import { ParliamentData, ParliamentMember } from './types';

export const ParliamentMemberList: FC = () => {  
    const members: ParliamentMember[] = parliamentData.parliamentMembers  

    return (
        <>
        {members.map((member) => (  
            <li key={member.id}>  
              {member.name.firstName} {member.name.lastName}  
            </li>  
          ))}  
        </>
    )
}


