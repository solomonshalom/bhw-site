import Meta from '@hackclub/meta'
import Head from 'next/head'
import { Container, Heading, Text } from 'theme-ui'
import { useRef } from 'react'
import 'react-horizontal-scrolling-menu/dist/styles.css'

import Channels from '../components/slack/channels'
import Join from '../components/slack/join'
import Footer from '../components/footer'
import ForceTheme from '../components/force-theme'
import Nav from '../components/nav'
import Header from '../components/slack/header'

const DiscordPage = () => {
  const nameInputRef = useRef(null)
  
  return (
    <>
      <style css>
        {/*this hides the horizontal scrollbar in the projects gallery*/}
        {` 
        ::-webkit-scrollbar {
          width:0px;
        }

          ::-webkit-scrollbar-track {
          background:transparent;
        }

          ::-webkit-scrollbar-thumb {
          background:transparent;
        }`}
      </style>
      <Meta
        as={Head}
        name="Join our Discord"
        description={`The Bethel Buildathon Discord is a community of builders around the world. Chat, meet new friends, code together, share your work.`}
      />
      <ForceTheme theme="light" />
      <Nav slack={true} />
      {/* <Box sx={{ position: 'fixed', mt: 5, maxWidth: '1024px', backgroundColor: 'red', zIndex: 100 }}>
        <Text>Bethel Buildathon Discord</Text>
      </Box>*/}
      <Header nameInputRef={nameInputRef} />
      <Container sx={{ pt: [4, 5], pb: 4 }}>
        <Heading
          as="h2"
          variant="title"
          sx={{ mt: [4, 5], color: 'black', maxWidth: 'copyUltra' }}
        >
          No commitments, just exploration...
        </Heading>
        <Text as="p" variant="subtitle" sx={{ fontSize: [2, 3], mt: 3 }}>
          Across 10+ public channels, find the community for your favorite
          programming language, ask for advice, or just hang out. Find the
          worlds that suit you.
        </Text>
        <Channels />
      </Container>

      <Container sx={{ py: [4, 5] }}>
        <Join />
      </Container>
      <Footer />
    </>
  )
}

function disableScroll() {
  document.body.style.overflowAnchor = 'hidden'
}

function enableScroll() {
  document.body.style.overflowAnchor = 'scroll'
}

export default DiscordPage
