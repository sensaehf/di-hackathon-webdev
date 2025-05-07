import members from './members.json'
import roles from './roles.json'
import committees from './committees.json'

import {
    Role,
    ParliamentMember,
    Committee,
  } from './types'

  export const getAllParliamentMembers = (): ParliamentMember[] => {
    return members as unknown as ParliamentMember[];
  };

  export const getParliamentMemberById = (id: number): ParliamentMember | undefined => {
    return getAllParliamentMembers().find(item => item.id === id);
  };