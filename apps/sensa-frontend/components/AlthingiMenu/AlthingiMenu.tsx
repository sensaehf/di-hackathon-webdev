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
          text: 'Um Alþingi',
          href: '/services',
          sub: [
            { text: 'Alþingi og hvernig það virkar', href: '/services/consulting' },
            { text: 'Fólk, skipulag og stjórnkerfi', href: '/services/dev' },
            { text: 'Samráð við almenning og fræðsluefni', href: '/services/dev' },
          ]

        },
        {
          text: 'Fréttir og tilkynningar',
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
