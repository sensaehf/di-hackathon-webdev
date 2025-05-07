import { Box, Divider, Icon, Text } from '@island.is/island-ui/core'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'
import * as styles from './BioFrame.css'
const BioFrame = ({ member }: { member: ParliamentMember }) => {
  return (
    <Box className={styles.bioFrame}>
      <Box className={styles.biography}>
        {/* {Bio box} */}
        <Box className={styles.bioLines}>
          {/* Bio Lines */}
          <BioLine />
          <BioLine />
          <BioLine />
          <BioLine />
        </Box>
        <Box width='full'>
        <Divider />
        </Box>
        {/* Contact */}
        <Box className={styles.contactBox}>
          <ContactLine member={member} />
          <ContactLine member={member} />
          <ContactLine member={member} />
        </Box>
        <Box width='full'>
        <Divider />
        </Box>

        {/* Social media */}
        <Box className={styles.socialMedia}>
          <SocialMediaLine img='/facebook.png'/>
          <SocialMediaLine img='/instagram.svg'/>
          <SocialMediaLine img='/x.svg'/>

        </Box>
      </Box>
      <img className={styles.img} src={member.image.url} alt="" />
    </Box>
  )
}

export default BioFrame

const BioLine = ({ member }: { member?: ParliamentMember }) => {
  return (
    <Box className={styles.bioLine}>
      <Text fontWeight="semiBold">Position</Text>
      <Text>Parliament party leader</Text>
    </Box>
  )
}

const ContactLine = ({ member }: { member?: ParliamentMember }) => {
  return (
    <Box className={styles.contactLine}>
      <Icon icon="mail" type="outline" />
      <Text>{member?.email}</Text>
    </Box>
  )
}
const SocialMediaLine = ({
  member,
  img,
}: {
  member?: ParliamentMember
  img?: string
}) => {
  return (
    <Box className={styles.socialMediaLine}>
      <img src={img} />
      <Text>asfd</Text>
    </Box>
  )
}
