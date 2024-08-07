import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Card,
  Grid,
  Heading,
  Image,
  Text,
  Flex
} from 'theme-ui'
import NextLink from 'next/link'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Nav from '../components/nav'
import SlideUp from '../components/slide-up'
import Why from '../components/ship/why.mdx'
import Icon from '../components/icon'
import Posts from '../components/posts'
import Footer from '../components/footer'
import { timeSince } from '../lib/dates'
import { orderBy, filter, take, map, uniq, reverse } from 'lodash'
import { keyframes } from '@emotion/react'
import { thousands } from '../lib/members'

const ShipBadge = props => (
  <Badge
    as="mark"
    sx={{
      bg: '#FF62DC',
      color: 'inherit',
      fontSize: 'inherit',
      display: 'inline-block',
      borderRadius: 'default',
      px: [2, 3],
      py: 1,
      ...props.sx
    }}
    {...props}
  />
)

const waves = keyframes({
  '0%': { backgroundPositionX: '0' },
  '100%': { backgroundPositionX: '-100%' }
})

const ShipPage = ({ posts = [] }) => (
  <>
    <Meta
      as={Head}
      name="Ship"
      description={`Hack Clubbers ship projects: a real-time list of the projects created by the Hack Club high school community in the last month.`}
      image="https://assets.hackclub.com/log/2020-05-22-ship.png"
      script={[
        {
          defer: true,
          src: "https://cloud.umami.is/script.js",
          "data-website-id": "57b3767b-b825-4b2a-bed8-4afe9d8f9af1"
        }
      ]}
    />
    <Nav />
    <Box
      as="header"
      sx={{
        bg: 'blue',
        backgroundImage: t =>
          `linear-gradient(to bottom, ${t.colors.cyan}, ${t.colors.blue})`,
        color: 'white',
        textAlign: 'center',
        py: [5, 6]
      }}
    >
      <Container
        sx={{
          maxWidth: [null, null, 'copyPlus', 'copyUltra'],
          p: { fontSize: [2, 3, 4], maxWidth: 'copy', mx: 'auto' }
        }}
      >
        <Text variant="eyebrow" sx={{ color: 'white', opacity: 0.875 }}>
          All aboard!
        </Text>
        <Heading as="h1" variant="ultratitle" sx={{ mb: [3, 4] }}>
          Bethel Builders focus on one thing: <ShipBadge>shipping.</ShipBadge>
        </Heading>
        <Text as="p" variant="subtitle">
          After building a project, like an app or website, “shipping” is
          publishing & sharing it online.
        </Text>
      </Container>
      <SlideUp duration={750}>
        <Grid
          as="section"
          columns={[null, null, 2]}
          gap={[3, 4]}
          variant="layout.container"
          sx={{
            mt: [3, 4, 5],
            textAlign: 'left',
            div: { p: [3, 4] },
            h2: { variant: 'text.headline', color: 'blue', mt: 0, mb: 2 },
            p: { fontSize: 2, my: 0 }
          }}
        >
          <Why />
        </Grid>
      </SlideUp>
    </Box>
    <Box
      as="section"
      sx={{
        color: 'black',
        bg: 'white',
        py: [4, 5]
      }}
    >
      <Container variant="copy" sx={{ textAlign: 'center' }}>
        <Icon glyph="message-new" size={72} sx={{ color: 'blue' }} />
        <Heading as="h2" variant="headline" mt={0}>
          Want to ship your own projects?
        </Heading>
        <Text variant="subtitle" sx={{ lineHeight: 'caption', mb: 3 }}>
          The #ship channel on the Bethel Buildathon Discord is where many
          from around the world share what they’re working on & help
          each other.
        </Text>
        <NextLink href="" passHref>
          <Button variant="cta" sx={{ py: 2, px: 3, fontSize: 2 }} as="a">
            Join our Discord
          </Button>
        </NextLink>
      </Container>
    </Box>
    <Footer />
  </>
)

export default ShipPage
