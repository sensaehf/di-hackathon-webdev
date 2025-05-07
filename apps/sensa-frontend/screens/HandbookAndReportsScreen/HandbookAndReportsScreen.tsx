import {
  AccordionCard,
  Box,
  Breadcrumbs,
  Text,
  TopicCard,
} from '@island.is/island-ui/core'
import { Webreader } from 'apps/sensa-frontend/components/Webreader'
import { useI18n } from 'apps/sensa-frontend/i18n'

const HandbookAndReportsScreen = () => {
  const i18n = useI18n()

  return (
    <Box marginBottom={6}>
      <Box marginBottom={2}>
        <Breadcrumbs
          items={[
            { title: i18n?.t.home.title ?? '', href: '/' },
            {
              title: i18n?.t.menu.about ?? '',
              href: i18n?.t.routes.about,
            },
            {
              title: i18n?.t.menu.handbooksAndReports ?? '',
              href: i18n?.t.routes.handbooksAndReports,
            },
          ]}
        />
      </Box>
      <Box marginY={2}>
        <Text variant="h1">{i18n.t.menu.handbooksAndReports}</Text>
      </Box>
      <Box marginY={2}>
        <Webreader />
      </Box>
      <Box marginY={2}>
        <Text variant="h2">{i18n.t.about.infoAboutParliament}</Text>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard
          label="Role and Functions of the AlÞingi"
          id="accordion-1"
          visibleContent={<>Overview of Parliament’s purpose and activities.</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard
          label="Parliamentary Rules and Procedures"
          id="accordion-2"
          visibleContent={<>How AlÞingi operates internally.</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard
          label="Public Participation and Influence"
          id="accordion-2"
          visibleContent={<>How citizens can engage with AlÞingi.</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={6}>
        <AccordionCard
          label="Access to Information and Resources"
          id="accordion-2"
          visibleContent={<>Tools and resources available to the public.</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginY={2}>
        <Text variant="h2">{i18n.t.about.officialPublishedContent}</Text>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard
          label={i18n.t.about.handbookAndMaterials}
          id="accordion-5"
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard label={i18n.t.about.annualReports} id="accordion-6">
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip} tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2023
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2022
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2021
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2020
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2019
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2018
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2017
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2016
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip}  tag="pdf" colorScheme="blue">
              {i18n.t.about.annualReport} 2015
            </TopicCard>
          </Box>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard label="Other Reports and Documents" id="accordion-7">
          <></>
        </AccordionCard>
      </Box>
    </Box>
  )
}

export default HandbookAndReportsScreen
