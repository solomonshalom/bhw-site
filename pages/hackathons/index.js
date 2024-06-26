import { Box, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import ForceTheme from '../../components/force-theme'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Slack from '../../components/hackathons/features/slack'
import Icon from '../../components/icon'
import Landing from '../../components/hackathons/landing'
import Overview from '../../components/hackathons/overview'
import KeepExploring from '../../components/hackathons/keep-exploring'

const Feature = ({ icon, color, name, desc, children, sx, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridGap: [0, 4],
      gridTemplateColumns: [null, 'auto 1fr'],
      alignItems: 'start',
      justifyContent: 'start',
      bg: 'rgba(224, 230, 237, 0.25)',
      p: [3, 4],
      mt: [1, 1],
      borderRadius: 'extra',
      span: { transform: 'none', width: 'min-intrinsic' },
      svg: { color: 'white' },
      ...sx
    }}
  >
    {children || (
      <Box
        as="span"
        sx={{
          width: 'fit-content',
          bg: color,
          borderRadius: 18,
          lineHeight: 0,
          p: 2,
          mb: 1,
          display: 'inline-block',
          transform: ['scale(0.75)', 'none'],
          transformOrigin: 'bottom left',
          boxShadow:
            'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon glyph={icon} size={48} />
      </Box>
    )}
    <Box>
      <Heading as="h3" variant="headline" mb={2} mt={0}>
        {name}
      </Heading>
      <Text
        as="p"
        variant="subtitle"
        sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
      >
        {desc}
      </Text>
    </Box>
  </Box>
)

export default function Hackathons({ data }) {
  return (
    <>
      <Box as="main" key="main">
        <Nav />
        <ForceTheme theme="light" />
        <Meta
          as={Head}
          title="Hackathons"
          description="Welcome to the high school hackathon. It's not an extracurricular or a club. It's not a class or a lecture. Hackathons are a playground to build things for fun and meet others doing the same."
          image="https://cloud-hkscyg8sg-hack-club-bot.vercel.app/0og-image.png"
        />
        <Box as="main">
          <Landing />

          <Overview />

          <Box as="section" sx={{ py: [4, 5, 6], color: 'black' }}>
      <Container
        sx={{
          maxWidth: [null, 'copyUltra'],
          svg: { filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.125))' }
        }}
      >
        <Box as="header" sx={{ textAlign: [null, 'center'], pb: [4, 5] }}>
          <Text as="p" variant="eyebrow">
            Got Questions?
          </Text>
          <Heading as="h2" variant="title">
            Here's some cool{' '}
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 2,
                mx: [-2, 0],
                bg: 'rgb(91, 255, 205)',
                color: '#095365',
                display: 'inline-block',
                whiteSpace: ['wrap', 'nowrap']
              }}
            >
              FAQs!
            </Text>
          </Heading>
        </Box>
        <Grid
          columns={[null, 1]}
          gap={[2, 3]}
          sx={{ alignItems: 'end', span: { color: 'white' } }}
        >
          <Feature
            icon="send-fill"
            color="#5d114c"
            name="How can I apply and join the community"
            desc={
              <>
                you can apply by clicking here or through the (numerous) "Apply"
                or "Join Us" buttons scattered across the site!
                <br />
                <br />
                Once done, you can join our <Link href="/discord">Discord community</Link>, where you’ll be
                able ask questions & chat, share projects, & (WIP) live events
              </>
            }
          />
          <Feature
            icon="bolt"
            color="green"
            name="Will we get swag?"
            desc={
              <>
                Yes! At EOD, builders will walk away with a collection of artifacts from the event (Regardless if you win :D)! 
                (P.S You may get some rare, one-off, special edition swags too ;D)

              </>
            }
          ></Feature>
          <Feature
            icon="docs"
            color="red"
            name="Meeting content"
            desc={
              <>
                Yep! You will have access to over 10+ workshops and many talks that will get you up and running
                in no time, no matter if your a beginner or a experience hackathon machine, there's something for everyone!
              </>
            }
          ></Feature>
          <Feature
            name="When, where, and how?"
            desc={
              <>
                It's happening on the 25th of this June at the{' '} <a href="https://bethelagindia.org">Bethel AG Church</a>, Malayalam!
                <br />
                The event will take place as a hybrid, with a in-person and online event happening simultaneously
              </>
            }
            icon="event-code"
            color="blue"
          ></Feature>
          <Feature
            icon="purse"
            color="orange"
            name="I don't have a machine or the required tech to participate, what can I do?"
            desc={
              <>
                DW! if you don't have a machine or the required tech, we will try sourcing and providing you them! 
                All you have to do is to send us a request through this{' '}
                <a href="#">form</a>!
              </>
            }
          />
        </Grid>
        <Feature
          icon="welcome"
          color="rgb(255,88,88)"
          name="Will I be supported during the hackathon?"
          desc={
            <>
              Absolutely! In addition to the workshops conducted, you will also have the oppertunity to seek help 
              from designers, musicians, engineers, and as such!
            </>
          }
          as="aside"
          sx={{
            display: 'grid',
            gridGap: [0, 4],
            gridTemplateColumns: [null, 'auto 1fr'],
            alignItems: 'start',
            justifyContent: 'start',
            bg: 'rgba(255,88,88,0.125)',
            p: [3, 4],
            mt: [3, 4],
            borderRadius: 'extra',
            span: { transform: 'none', width: 'min-intrinsic' },
            svg: { color: 'white' }
          }}
        />
      </Container>
    </Box>
    <Slack />

          <KeepExploring />
        </Box>
      </Box>
      <Footer key="footer" />
    </>
  )
}
export async function getStaticProps() {
  let data
  try {
    const res = await fetch(
      'https://hackathons.hackclub.com/api/events/upcoming'
    )
    if (res.ok) {
      data = await res.json()
    } else {
      data = []
    }
  } catch (error) {
    data = []
  }

  return {
    props: {
      data
    },
    revalidate: 10
  }
}
