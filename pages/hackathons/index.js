import { Box, Container, Grid, Heading, Link, Text } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import ForceTheme from '../../components/force-theme'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import Slack from '../../components/hackathons/features/slack'
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
            Hit the ground running
          </Text>
          <Heading as="h2" variant="title">
            Get your club{' '}
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
              going & growing
            </Text>
            with Hack&nbsp;Club.
          </Heading>
        </Box>
        <Grid
          columns={[null, 1]}
          gap={[2, 3]}
          sx={{ alignItems: 'end', span: { color: 'white' } }}
        >
          <Feature
            icon="slack-fill"
            color="#5d114c"
            name="Chat with 100s of club leaders"
            desc={
              <>
                In our <Link href="/slack">Slack community</Link>, you’ll be
                invited to a space for Hack&nbsp;Club leaders to ask questions &
                chat, share projects, & attend weekly live events.
              </>
            }
          />
          <Feature
            icon="bolt"
            color="green"
            name="Tools to hack on"
            desc={
              <>
                We build tools, such as{' '}
                <a href="https://sprig.hackclub.com">Sprig</a>, that your
                members can use to make projects with in meetings! Build more of
                them with us in our <Link href="/slack">Slack community</Link>.
              </>
            }
          ></Feature>
          <Feature
            icon="docs"
            color="red"
            name="Meeting content"
            desc={
              <>
                Come prepared to every meeting with over 100{' '}
                <a href="https://workshops.hackclub.com">workshops</a> (3 years’
                worth!) and 19 <a href="https://jams.hackclub.com">Jams</a> that
                guide your club members through making fun, creative projects.
              </>
            }
          ></Feature>
          <Feature
            name="Stickers"
            desc={
              <>
                Get <Link href="/stickers">amazing stickers</Link> for marketing
                your club shipped directly to you & your club members.
              </>
            }
            color="purple"
            icon="sticker"
          ></Feature>
          <Feature
            icon="bank-account"
            color="black"
            name="A nonprofit fund"
            desc={
              <>
                Use our 501(c)(3) status and a restricted fund with{' '}
                <Link href="/fiscal-sponsorship">HCB</Link> to fundraise, accept donations, and
                buy things!
              </>
            }
          />
          <Feature
            name="Weekly events"
            desc={
              <>
                From <Link href="/night">Hack Night</Link> to{' '}
                <Link href="/amas">AMAs</Link>
                {' to '}
                <a href="https://twitter.com/hackclub/status/1300494921997193217?s=21">
                  weirder events
                </a>
                , the Slack community has live events for leaders & members
                alike every week.
              </>
            }
            icon="event-code"
            color="blue"
          ></Feature>
          <Feature
            icon="purse"
            color="orange"
            name="A basket of free tools"
            desc={
              <>
                We're always building new tools for leaders, such as{' '}
                <a href="https://sprig.hackclub.com">Sprig</a>! We've also got
                free subscriptions to Figma Pro, Postman, and more for running a
                great computer science club club.
              </>
            }
          />
        </Grid>
        <Feature
          icon="welcome"
          color="rgb(255,88,88)"
          name="Existing clubs welcome"
          desc={
            <>
              When established Computer Science clubs join, they get all the Hack&nbsp;Club
              benefits: Zoom&nbsp;Pro, stickers, our Slack community,{' '}
              <a href="https://workshops.hackclub.com/">workshops</a>, the
              works. They’re welcome to use the “Hack&nbsp;Club” name or keep
              their existing one.
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
