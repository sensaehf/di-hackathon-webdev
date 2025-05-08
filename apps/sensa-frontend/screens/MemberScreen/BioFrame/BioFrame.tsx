import { Box, Divider, GridColumn, GridContainer, GridRow, Icon, Text } from '@island.is/island-ui/core'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'
import * as styles from './BioFrame.css'
import { useI18n } from '../../../i18n'
const BioFrame = ({ member }: { member: ParliamentMember }) => {
  const i18n = useI18n()
  return (
    <Box className={styles.bioFrame}>
      <Box className={styles.biography}>
        {/* {Bio box} */}
        <Box className={styles.bioLines}>
          {/* Bio Lines */}
          <BioLine
            label={i18n.t.member?.frame?.position?.label}
            value={i18n.t.member?.frame?.position?.value}
          />
          {member.ministry &&
            <BioLine
              label={i18n.t.member?.frame?.ministry?.label}
              value={i18n.t.home.locale === 'is' ? member.ministry : member.ministryEn}
            />
          }
          {member.constituency &&
            <BioLine
              label={i18n.t.member?.frame?.constituency?.label}
              value={i18n.t.home.locale === 'is' ? member.constituency : member.constituencyEn}
            />
          }

          {member.party &&
            <BioLine
              label={i18n.t.member?.frame?.party?.label}
              value={i18n.t.home.locale === 'is' ? member.party : member.partyEn}
            />
          }

          {member.dateOfBirth &&
            <BioLine
              label={i18n.t.member?.frame?.dob?.label}
              value={member.dateOfBirth}
            />
          }
        </Box>
        <Box width="full">
          <Divider />
        </Box>
        {/* Contact */}
        <Box className={styles.contactBox}>
          <ContactLine member={member} />
          <Box className={styles.contactLine}>
            <Icon icon="call" type="outline" />
            <Text>765-4321</Text>
          </Box>
          <Box className={styles.contactLine}>
            <Icon icon="link" type="outline" />
            <Text>thingmadur.is</Text>
          </Box>
        </Box>
        <Box width="full">
          <Divider />
        </Box>

        {/* Social media */}
        <Box className={styles.socialMedia}>
          <SocialMediaLine media="Facebook" img="/facebook.png" />
          <SocialMediaLine media="Instagram" img="/instagram.svg" />
          <SocialMediaLine media="X/Twitter" img="/x.svg" />
        </Box>
      </Box>
      <img className={styles.img} src={member.image.url} alt="" />
    </Box>
  )
}

export default BioFrame

const BioLine = ({ label, value }: { label: string; value: string }) => {
  return (
    <Box className={styles.bioLine}>
      <GridContainer>
        <GridRow>
          <GridColumn span={"1/2"}>
            <Text fontWeight="semiBold">{label}</Text>
          </GridColumn>
          <GridColumn span={"1/2"}>
            <Text>{value}</Text>
          </GridColumn>
        </GridRow>
      </GridContainer>
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
  media,
}: {
  member?: ParliamentMember
  img?: string
  media: string
}) => {
  return (
    <Box className={styles.socialMediaLine}>
      <img src={img} alt="" />
      <Text>{media}</Text>
    </Box>
  )
}
