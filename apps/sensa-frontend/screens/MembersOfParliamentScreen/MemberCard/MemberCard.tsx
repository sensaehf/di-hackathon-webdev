import { CategoryCard } from 'apps/sensa-frontend/components/CategoryCard/CategoryCard'
import { ParliamentMember } from 'apps/sensa-frontend/data/types'

export interface MemberCardProps {
  src?: string
  member: ParliamentMember
}

// name.abbreat


const MemberCard = ({ member }: MemberCardProps) => {
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
        text={member.bio}
        heading={member.name.fullName}
        tags={tags}
        href={`/work/peopleAndCommittees/membersOfParliament/member/${member.id}`}
      />
    </>
  )
}

export default MemberCard