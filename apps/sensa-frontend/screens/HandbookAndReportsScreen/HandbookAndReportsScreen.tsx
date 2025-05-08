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
    <Box marginLeft={8} marginBottom={6}>
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
          label={i18n.t.about.rolesAndFunctionsHeader}
          id="accordion-1"
          visibleContent={<>{i18n.t.about.rolesAndFunctionsText}</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard
          label={i18n.t.about.parliamentaryRulesAndProceduresHeader}
          id="accordion-2"
          visibleContent={<>{i18n.t.about.parliamentaryRulesAndProceduresText}</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard
          label={i18n.t.about.publicParticipationAndInfluenceHeader}
          id="accordion-3"
          visibleContent={<>{i18n.t.about.publicParticipationAndInfluenceText}</>}
        >
          <></>
        </AccordionCard>
      </Box>
      <Box marginBottom={6}>
        <AccordionCard
          label={i18n.t.about.accessToInformationAndResourcesHeader}
          id="accordion-4"
          visibleContent={<>{i18n.t.about.accessToInformationAndResourcesText}</>}
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
            <Text variant='h4'>{i18n.t.about.handbookHeader}</Text>
          </Box>
          <Box marginBottom={2}>
            <Text>
              {i18n.t.about.handbookText}
            </Text>
          </Box>
          <Box marginBottom={2}>
            <TopicCard href={i18n.t.routes.wip} tag="pdf" colorScheme="blue">
              {i18n.t.about.handbookName}
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <Button 
              colorScheme="default"
              variant="ghost"
            >
              {i18n.t.about.viewOlderHandbooks} +
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
              {i18n.t.about.guideName}
            </TopicCard>
          </Box>
          <Box marginBottom={2}>
            <Button 
              colorScheme="default"
              variant="ghost"
            >
              {i18n.t.about.viewOlderGuides} +
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
              {i18n.t.about.loadMore} +
            </Button>
          </Box>
        </AccordionCard>
      </Box>
      <Box marginBottom={2}>
        <AccordionCard label={i18n.t.about.otherReportsAndMaterials} id="accordion-7">
          <></>
        </AccordionCard>
      </Box>
    </Box>
  )
}

export default HandbookAndReportsScreen
