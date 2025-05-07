import { CategoryCard } from 'apps/sensa-frontend/components/CategoryCard/CategoryCard'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'
import { useI18n } from 'apps/sensa-frontend/i18n'

export interface MemberCardProps {
  src?: string
  member: ParliamentMember
}

const MemberCard = ({ member }: MemberCardProps) => {
  const i18n = useI18n()

  const tags = [
    { label: 'label', href: '#' },
    { label: 'label', href: '#' },
    { label: 'label', href: '#' },
  ]
  return (
    <>
      <CategoryCard
        alt=""
        src={member.image.url}
        text={i18n.t.home.locale === "is" ? member.bio : member.bioEn} 
        heading={member.name.fullName}
        tags={tags}
        href={`/work/peopleAndCommittees/membersOfParliament/member/${member.id}`}
      />
    </>
  )
}

export default MemberCard