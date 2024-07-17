import { Button, Box, Container, Heading, Text, Link } from 'theme-ui'
import usePrefersMotion from '../../../lib/use-prefers-motion'
import useHasMounted from '../../../lib/use-has-mounted'
import NextLink from 'next/link'

const Content = () => (
  <Container
    sx={{
      textAlign: 'center',
      zIndex: 999,
      py: 6,
      color: 'white',
      'h2,p': { textShadow: 'text' },
      textAlign: [null, 'center'],
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <Text as="p" variant="eyebrow" sx={{ color: 'white', opacity: 0.75 }}>
      The Bethel Hacks Community
    </Text>
    <Heading as="h2" variant="title">
      A buildathon particpant's{' '}
      <Text
        as="span"
        sx={{
          borderRadius: 'default',
          px: 2,
          mx: [-2, 0],
          whiteSpace: 'nowrap',
          color: 'currentColor',
          bg: 'green'
        }}
      >
        best friend
      </Text>
      .
    </Heading>
    <Text as="p" variant="lead" sx={{ maxWidth: 'copyPlus', mx: 'auto' }}>
      The{' '}
      <Box
        as="span"
        sx={{
          bg: 'rgb(245, 233, 181, .3)',
          px: 1,
          borderRadius: 5
        }}
      >
        <Link
          href="#"
          sx={{ textDecoration: 'none', color: 'currentColor' }}
          target="_blank"
        >
          #buildathon
        </Link>
      </Box>{' '}
      channel is where participants ask questions and share their
      own experiences—from finding a team to solving a problem!
    </Text>
    <NextLink href="/discord" passHref>
      <Button
        as="a"
        variant="ctaLg"
        sx={{
          background: 'linear-gradient(-132deg, #338eda 14%, #33d6a6 82%)'
        }}
      >
        Join us on Discord
      </Button>
    </NextLink>
  </Container>
)

const Cover = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage: t => t.util.gx('cyan', 'purple'),
      opacity: 0.825,
      zIndex: 1
    }}
  />
)

const Static = ({
  // screenshot of messages from #buildathon-organizers
  img = 'https://cloud-8611bon87-hack-club-bot.vercel.app/0screen_shot_2022-08-05_at_2.27.38_pm.png'
}) => (
  <Box
    as="section"
    id="slack"
    sx={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover'
    }}
  >
    <Cover />
    <Content />
  </Box>
)

const Slack = () => {
  const hasMounted = useHasMounted()
  const prefersMotion = usePrefersMotion()
  if (hasMounted && prefersMotion) {
    return (
      <Box
        as="section"
        id="slack"
        sx={{ overflow: 'hidden', position: 'relative' }}
      >
        <Box
          as="video"
          autoPlay
          muted
          loop
          playsInline
          // screenshot of messages from #buildathon-organizers
          poster="https://cloud-iwkoq2544-hack-club-bot.vercel.app/0screen_shot_2022-07-30_at_9.03.43_am.png"
          duration={2000}
          sx={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            zIndex: -1,
            width: '100vw',
            objectFit: 'cover'
          }}
        >
          <source
            src="https://cloud-hsc3k1am6-hack-club-bot.vercel.app/0screen_recording_2022-08-03_at_9.50.26_am.mp4"
            type="video/mp4; codecs=hevc"
          />
          <source
            src="https://cloud-azjxx4vqu-hack-club-bot.vercel.app/0have-finally-figured-it-out-hell-yeah.webm"
            type="video/webm; codecs=vp9,opus"
          />
          <source
            src="https://cloud-hsc3k1am6-hack-club-bot.vercel.app/0screen_recording_2022-08-03_at_9.50.26_am.mp4"
            type="video/quicktime"
          />
        </Box>
        <Cover />
        <Content />
      </Box>
    )
  } else {
    return <Static />
  }
}

export default Slack
