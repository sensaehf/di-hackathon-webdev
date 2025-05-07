import { useRouter } from 'next/router'
import { useContext } from 'react';
import { I18nContext } from '../../i18n/I18n';
import * as styles from './SideBar.css'
import {
  Box,
  Navigation
} from '@island.is/island-ui/core'


const SideBar = () => {
  const router = useRouter()
  const i18n = useContext(I18nContext)

  const aboutText = () => {
    return i18n?.t.home.about + ' ' + i18n?.t.home.title
  }

  const isActive = (path: string | undefined) => {
    if(path === undefined) return false;
    return router.asPath === path || router.asPath.startsWith(path + '/');
  }

  const items = [
    {
      active: isActive(i18n?.t.routes.peopleAndCommittees ?? ''),
      href: i18n?.t.routes.peopleAndCommittees ?? '',
      title: i18n?.t.menu.peopleAndCommittees ?? '',
      items: [
        {
          active: isActive(i18n?.t.routes.membersOfParliament ?? ''),
          href: i18n?.t.routes.membersOfParliament ?? '',
          title: i18n?.t.menu.membersOfParliament ?? ''
        },
        {
          active: isActive(i18n?.t.routes.parties ?? ''),
          href: i18n?.t.routes.parties ?? '',
          title: i18n?.t.menu.parties ?? ''
        },
        {
          active: isActive(i18n?.t.routes.constituencies ?? ''),
          href: i18n?.t.routes.constituencies ?? '',
          title: i18n?.t.menu.constituencies ?? ''
        },
        {
          active: isActive(i18n?.t.routes.committees ?? ''),
          href: i18n?.t.routes.committees ?? '',
          title: i18n?.t.menu.committees ?? ''
        },
        {
          active: isActive(i18n?.t.routes.speaker ?? ''),
          href: i18n?.t.routes.speaker ?? '',
          title: i18n?.t.menu.speaker ?? ''
        },
        {
          active: isActive(i18n?.t.routes.history ?? ''),
          href: i18n?.t.routes.history ?? '',
          title: i18n?.t.menu.history ?? ''
        },
      ]
    },
    {
      active: isActive(i18n?.t.routes.sessionsAndBills ?? ''),
      title: i18n?.t.menu.sessionsAndBills ?? '',
      href: i18n?.t.routes.sessionsAndBills ?? ''
    },
    {
      title: i18n?.t.menu.sessions ?? '',
      href: i18n?.t.routes.wip ?? '',
    },
    {
      active: isActive(i18n?.t.routes.about ?? ''),
      title: i18n?.t.menu.about ?? '',
      href: i18n?.t.routes.about ?? '',
      items: [
      {
        active: isActive(i18n?.t.routes.handbooksAndReports ?? ''),
        title: i18n?.t.menu.handbooksAndReports ?? '',
        href: i18n?.t.routes.handbooksAndReports ?? '',
      },
      {
        title: 'People, Structures and Governance',
        href: i18n?.t.routes.wip ?? '',
      },
      {
        title: 'Public Engagement and Educational Resources',
        href: i18n?.t.routes.wip ?? '',
      },
    ]
    },
    {
      title: i18n?.t.menu.news ?? '',
      href: i18n?.t.routes.wip ?? '',
    }
  ]

  return (
    <Box className={styles.sidebar}>
      <Navigation
        baseId=''
        activeItemTitle=""
        colorScheme="blue"
        items={items}
        title={i18n?.t.home.title ?? ''}
      />
    </Box>
  );
};

export default SideBar