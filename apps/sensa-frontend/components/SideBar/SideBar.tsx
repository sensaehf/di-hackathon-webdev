import useIsMobile from 'libs/application/ui-shell/src/hooks/useIsMobile' 
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
  const { isMobile } = useIsMobile()

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
          href: i18n?.t.routes.wip  ?? '',
          title: i18n?.t.menu.parties ?? ''
        },
        {
          href: i18n?.t.routes.wip ?? '',
          title: i18n?.t.menu.constituencies ?? ''
        },
        {
          href: i18n?.t.routes.wip ?? '',
          title: i18n?.t.menu.committees ?? ''
        },
        {
          href: i18n?.t.routes.wip ?? '',
          title: i18n?.t.menu.speaker ?? ''
        },
        {
          href: i18n?.t.routes.wip ?? '',
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
        title: i18n?.t.about.peopleStructuresAndGovernanceHeader ?? '',
        href: i18n?.t.routes.wip ?? '',
      },
      {
        title: i18n?.t.about.publicEngagementAndEducationalResourcesHeader ?? '',
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
        isMenuDialog={isMobile}
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