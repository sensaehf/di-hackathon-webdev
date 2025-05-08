import { Box, CategoryCard, Breadcrumbs, Text } from '@island.is/island-ui/core'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import { useI18n } from 'apps/sensa-frontend/i18n'

const AboutScreen = () => {
  const i18n = useI18n()

  return (
    <Box marginLeft={8}>
      <Box  marginBottom={2}>
        <Breadcrumbs
          items={[
            { title: i18n?.t.home.title ?? '', href: '/' },
            {
              title: i18n?.t.menu.about ?? '',
              href: i18n?.t.routes.about,
            },
          ]}
        />
      </Box>
      <Box marginY={2}>
        <h1>{i18n.t.menu.about}</h1>
      </Box>
      <Box marginY={2}>
        <Webreader />
      </Box>
      <Box marginBottom={2}>
        <CategoryCard
          heading={i18n?.t.about.howItWorksHeader}
          text={i18n?.t.about.howItWorksText}
          href={i18n.t.routes.handbooksAndReports}
        ></CategoryCard>
      </Box>
      <Box marginBottom={2}>
        <CategoryCard
          heading={i18n?.t.about.peopleStructuresAndGovernanceHeader}
          text={i18n?.t.about.peopleStructuresAndGovernanceText}
          href={i18n.t.routes.wip} 
        ></CategoryCard>
      </Box>
      <Box marginBottom={2}>
        <CategoryCard
          heading={i18n?.t.about.publicEngagementAndEducationalResourcesHeader}
          text={i18n?.t.about.publicEngagementAndEducationalResourcesText}
          href={i18n.t.routes.wip} 
        ></CategoryCard>
      </Box>
    </Box>
  )
}

export default AboutScreen
