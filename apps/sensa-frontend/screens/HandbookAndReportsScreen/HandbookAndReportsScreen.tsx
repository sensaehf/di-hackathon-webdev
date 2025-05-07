import {
  AccordionCard,
  Box,
  Breadcrumbs,
  Text,
  TopicCard,
  Button
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
          <Box marginBottom={2}>
            <Text variant='h4'>AlÞingi Handbook</Text>
          </Box>
          <Box marginBottom={2}>
            <Text>
              The AlÞingi Handbook is published after each parliamentary election and was first issued in 1984. Since 1999, it has also been available electronically. The handbook provides an overview of Parliament’s work, including details of recent elections, the composition of Parliament, and records about its members. It contains biographies, statistics, and information on parties and committees. Appendices cover the staff of the AlÞingi Secretariat, parliamentary parties, and related institutions.
            </Text>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip} tag="pdf" colorScheme="blue">
              AlÞingi Handbook 2017
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <Button 
              colorScheme="default"
              variant="ghost"
            >
              View older handbooks +
            </Button>
          </Box>
          <Box marginBottom={2}>
            <Text variant='h4'>Guide for Members of Parliament</Text>
          </Box>
          <Box marginBottom={2}>
            <Text>
            The publication Háttvartur Þingmanð contains information about work at parliamentary sessions and in parliamentary committees, about the preparation and handling of parliamentary matters, and about MPs' working conditions and terms of employment; furthermore, information about the activities of the office and the services it provides to MPs.
            </Text>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip} tag="pdf" colorScheme="blue">
              Guide for Members of Parliament 2024
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <Button 
              colorScheme="default"
              variant="ghost"
            >
              View older guides +
            </Button>
          </Box>
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
          <Box marginBottom={2}>
            <Button 
              colorScheme="default"
              variant="ghost"
            >
              Load more reports +
            </Button>
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
