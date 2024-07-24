import { Box, Container, Heading, Text } from 'theme-ui'
import {
  PillHolder,
  AuthorPill,
  DatePill
} from '../components/announcements/pills'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import ForceTheme from '../components/force-theme'
import Footer from '../components/footer'
import ElonCopy from '../components/announcements/prep.mdx'
import SlackCTA from '../components/announcements/cta'
import AnnouncementHolder from '../components/announcements/holder'

const PrepPage = () => (
  <>
    <Meta
      as={Head}
      title="Configuring your workstation for the Buildathon!"
      description="Configuring your workstation for the buildathon!"
      image="https://assets.hackclub.com/log/HC-500k@1080w.png"
      script defer src="https://cloud.umami.is/script.js" data-website-id="57b3767b-b825-4b2a-bed8-4afe9d8f9af1"
    />
    <ForceTheme theme="light" />
    <Nav />
    <Box
      as="section"
      sx={{
        pt: [5, 6],
        pb: [4, 5],
        bg: 'rgb(104, 41, 205)',
        backgroundImage: theme => theme.util.gx('yellow', 'green')
      }}
    >
      <Container sx={{ textAlign: 'center', color: 'white' }}>
        <Heading
          as="h1"
          variant="title"
          sx={{
            fontSize: [5, 6, null, 7],
            span: {
              WebkitTextStroke: 'currentColor',
              WebkitTextStrokeWidth: ['2px', '3px'],
              WebkitTextFillColor: 'transparent'
            }
          }}
        >
          When we work, we work. When we pray, <span>“God works”</span>{' '}
        </Heading>
        <Text variant="headline">—James Hudson Taylor</Text>
      </Container>
    </Box>
    <AnnouncementHolder>
      <PillHolder>
        <AuthorPill
          firstName="Solomon"
          tag="Solomon Shalom Lijo, host"
          image="https://hackclub.com/team/zach.jpg"
        />
        <DatePill tag="September X, 2K24" />
      </PillHolder>
      <ElonCopy />
    </AnnouncementHolder>
    <SlackCTA />
    <Footer />
  </>
)

export default PrepPage
