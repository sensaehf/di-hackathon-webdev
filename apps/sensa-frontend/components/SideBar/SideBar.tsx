
import {
  Box,
  Navigation
} from '@island.is/island-ui/core'
import { useContext } from 'react';
import { I18nContext } from '../../i18n/I18n';

const SideBar = () => {
  
  const aboutText = () => {
    return i18n?.t.menu.about + ' ' + i18n?.t.home.title 
  }

  const i18n = useContext(I18nContext)

  const items = [
    {
      active: true,
      href: i18n?.t.routes.peopleAndCommittees,
      title: i18n?.t.menu.peopleAndCommittees,
      items: [
        {
          href: i18n?.t.routes.membersOfParliament,
          title: i18n?.t.menu.membersOfParliament
        },
        {
          href: '/',
          title: 'Menypunkt 2'
        },
        {
          href: '/',
          title: 'Menypunkt 3'
        },
      ]
    },
    {
      title: i18n?.t.menu.sessionsAndBills,
      href: i18n?.t.routes.sessionsAndBills
    },
    {
      title: i18n?.t.menu.laws,
      href: '/'
    },
    {
      title: i18n?.t.menu.resolutions,
      href: '/'
    },
    {
      title: aboutText(),
      href: '/'
    }
    ,
    {
      title: i18n?.t.menu.news,
      href: '/'
    }
  ]

  return (
    <Box>
      <Navigation
        baseId=''
        activeItemTitle=""
        colorScheme="blue"
        items={items}
        title={i18n?.t.menu.menu}
      />
    </Box>
  );
};

export default SideBar