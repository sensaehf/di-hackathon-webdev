import { CategoryCard } from 'apps/sensa-frontend/components/CategoryCard/CategoryCard'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'
import { useI18n } from 'apps/sensa-frontend/i18n'

export interface MemberCardProps {
  src?: string
  member: ParliamentMember
}

const MemberCard = ({ member }: MemberCardProps) => {
  const i18n = useI18n()

  const heading = (member: ParliamentMember) => {
    return member.name.fullName
  }

  const tags = [
    { label: 'label' },
    { label: 'label' },
    { label: 'label' },
  ]
  return (
    <>
      <CategoryCard
        alt=""
        src={member.image.url}
        text={i18n.t.home.locale === "is" ? member.party : member.partyEn} 
        heading={`${member.name.fullName} (${member.name.abbreviation})`} 
        tags={tags}
        href={`${i18n.t.routes.member}/${member.id}`}
      />
    </>
  )
}

export default MemberCard