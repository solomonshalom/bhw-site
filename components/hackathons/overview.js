import { Box, Heading, Container, Text, Grid, Flex } from 'theme-ui'
import Photo from '../photo'

export default function Overview() {
  return (
    <>
      <Box as="section" sx={{ py: [4, 5], color: 'black' }}>
        <Container sx={{ width: '95vw' }}>
          <Heading
            sx={{
              fontSize: [36, 50, 50, 50, 48],
              mb: 3,
              color: 'purple'
            }}
          >
            A buildathon is a social coding marathon where people{' '}
            <Highlight>come together</Highlight> to{' '}
            <Highlight>build projects</Highlight> for a weekend and{' '}
            <Highlight>share them with the world</Highlight>.
          </Heading>
          <Grid columns={[null, null, 2]} gap={[3, 4]}>
            <Text as="p" variant="subtitle">
              <Box sx={{ color: 'blue', fontSize: 28, mb: 2 }}>
                The best way to learn is by <b>building</b>.
              </Box>
              A buildathon is a space that helps give makers everything they need
              to start building–mentors, collaborators, inspiration, and a goal
              to work towards. Builders will leave a buildathon with a project of
              their own, ready and excited to keep hacking once they get home.
            </Text>
            <Text as="p" variant="subtitle">
              <Box sx={{ color: 'green', fontSize: 28, mb: 2 }}>
                We're at our best when we're <b>making</b>.
              </Box>
              Bethel Buildathon is a community of hundreds of
              makers. We're organizers, coders, builders, painters, engineers,
              musicians, writers, volunteers. Our primary goal is to glorify God through
              what we build!
            </Text>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

function Highlight({ children }) {
  return (
    <Text
      as="span"
      sx={{
        bg: 'yellow',
        borderRadius: 'default',
        px: 1,
        color: '#5d114c',
        lineHeight: '1.3'
      }}
    >
      {children}
    </Text>
  )
}
