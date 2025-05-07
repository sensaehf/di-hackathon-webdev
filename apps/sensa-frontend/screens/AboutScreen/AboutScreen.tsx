import { Box, CategoryCard, Breadcrumbs, Text } from '@island.is/island-ui/core'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import { useI18n } from 'apps/sensa-frontend/i18n'

const AboutScreen = () => {
  const i18n = useI18n()

  return (
    <>
      <Box marginBottom={2}>
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
          heading="AlÞingi and How It Works"
          text="General information abouth AlÞingi, parliamentary functions and official published content."
          href={i18n.t.routes.handbooksAndReports}
        ></CategoryCard>
      </Box>
      <Box marginBottom={2}>
        <CategoryCard
          heading="People, Structures and Governance"
          text="Parliamentary institutions, committees, secretariat, and administrative structure."
          href={i18n.t.routes.wip} 
        ></CategoryCard>
      </Box>
      <Box marginBottom={2}>
        <CategoryCard
          heading="Public Engagement and Educational Resources"
          text="Visits, outreach, education materials and public interaction."
          href={i18n.t.routes.wip} 
        ></CategoryCard>
      </Box>
    </>
  )
}

export default AboutScreen
