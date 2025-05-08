import React from 'react'
import Menu from '../Menu/Menu'

interface AlthingiMenuProps {
  menuButton: React.ReactElement
}

const AlthingiMenu: React.FC<AlthingiMenuProps> = ({ menuButton }) => {
  return (
    <Menu
      baseId="mainMenu"
      menuButton={menuButton}
      mainTitle="Main Menu"
      mainLinks={[
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
      ]}
      asideTopLinks={[
        {
          text: 'About Alþingi',
          href: '/services',
          sub: [
            { text: 'Alþingi and how it works', href: '/services/consulting' },
            { text: 'People, Structures and Governance', href: '/services/dev' },
            { text: 'Public Engagement and Educational Resources', href: '/services/dev' },
          ],
        },
        {
          text: 'News and announcements',
          href: '/contact',
        },
      ]}
      asideBottomTitle="Tengdar síður"
      asideBottomLinks={[
        { text: 'island.is', href: '/terms' },
        { text: 'Ríkisstjórn Íslands', href: '/privacy' },
        { text: 'Landskjörstjórn', href: '/privacy' },
      ]}

    />
  )
}

export default AlthingiMenu
