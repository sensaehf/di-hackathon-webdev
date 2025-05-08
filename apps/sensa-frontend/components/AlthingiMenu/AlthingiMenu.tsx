import { Menu } from '@island.is/island-ui/core'
import React from 'react'

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
            { text: 'Development', href: '/services/dev' },
          ],
        },
        {
          text: 'Contact',
          href: '/contact',
        },
      ]}
      asideBottomTitle="Related sites"
      asideBottomLinks={[
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
      ]}
    />
  )
}

export default AlthingiMenu
