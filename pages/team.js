import { Box, Container, Flex, Grid, Text } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Bio from '../components/bio'
import ForceTheme from '../components/force-theme'

export default function Team({ team }) {
  return (
    <>
      <Box as="main" key="main">
        <ForceTheme theme="light" />
        <Nav light />
        <Meta
          as={Head}
          title="Team"
          description="Meet the team that runs Hack Club, a global nonprofit network of high school computer science clubs."
          script={[
            {
              defer: true,
              src: "https://cloud.umami.is/script.js",
              "data-website-id": "57b3767b-b825-4b2a-bed8-4afe9d8f9af1"
            }
          ]}
        />
        <Box
          pt={6}
          pb={5}
          px={[2, 4]}
          sx={{
            backgroundImage:
              'radial-gradient(ellipse farthest-corner at top left,rgb(36 181 165 / 70%),rgb(30 151 137 / 70%)), url(https://cloud-6b7atvvf8-hack-club-bot.vercel.app/0hack_club_team_-_july_2023.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: '25% 15%'
          }}
        >
          <Container>
            <Text variant="ultratitle" color="snow">
              By the students,
              <br /> for the students.
            </Text>

            <Text
              as="div"
              variant="lead"
              color="smoke"
              sx={{ maxWidth: '650px' }}
            >
              We believe in a world where every young person is empowered to be
              the change they want to see around them. At Hack Club, we’re
              working hard to make it reality.
            </Text>
          </Container>
        </Box>
        <Box bg="#f9f9fa" py={4}>
          <Container>
            <Flex
              sx={{
                bg: 'rgb(51 142 218 / 40%)',
                p: 3,
                borderRadius: '20px',
                mb: 3,
                gap: 3,
                flexWrap: ['wrap', null, null, 'nowrap']
              }}
            >
              <Text
                variant="headline"
                as="h3"
                sx={{
                  textAlign: 'center',
                  fontSize: 3,
                  writingMode: [null, null, null, 'vertical-rl'],
                  mr: [0, 0, 0, 1],
                  transform: [null, null, null, 'rotate(180deg)'],
                  width: ['100%', null, null, 'fit-content'],
                  my: [
                    '0px!important',
                    '0px!important',
                    '0px!important',
                    3
                  ]
                }}
              >
                Board & Advisors
              </Text>
              <Box sx={{ flexGrow: 1 }}>
                <Grid columns={[1, null, 2]} gap={2} mb={2}>
                  <Bio
                    img="/team/zach.jpg"
                    name="Zach Latta"
                    teamRole="Founder"
                    text="Zach dropped out of high school after his freshman year to work in the technology industry and had over 5 million people using his software by the time he turned 17. He founded Hack Club to build the program he wish he had in high school and has been awarded the Thiel Fellowship and Forbes 30 Under 30 for his work."
                    pronouns="he/him"
                    email="zach"
                  />
                  <Bio
                    img="/team/christina.jpg"
                    name="Christina Asquith"
                    teamRole="Co-founder and COO"
                    text="With more than a decade of experience in starting and leading organizations, Christina has built global teams and raised millions of dollars. She has 20 years experience as a journalist, including reporting for The New York Times from Iraq. She has an MA in education, and taught as a public school teacher in 2000, which inspired her book “The Emergency Teacher.”"
                    pronouns="she/her"
                    email="christina"
                  />
                </Grid>
                <Grid columns={[1, null, 3]} gap={2}>
                  <Bio
                    img="https://cloud-80nhjzldl-hack-club-bot.vercel.app/0.jpeg"
                    name="Tom Preston-Werner"
                    teamRole={<>Board Member</>}
                    subrole="Co-Founder, GitHub"
                    pronouns="he/him"
                    href="https://github.com/mojombo"
                  />
                  <Bio
                    img="https://philanthropy.hackclub.com/_next/image?url=/quinn.png&w=1200&q=75"
                    name="Quinn Slack"
                    teamRole={<>Board Member</>}
                    subrole="CEO, Sourcegraph"
                    pronouns="he/him"
                    href="https://github.com/sqs"
                  />
                  <Bio
                    img="https://media.licdn.com/dms/image/C5603AQFum8zxW-IEEA/profile-displayphoto-shrink_800_800/0/1517058384850?e=2147483647&v=beta&t=-oM8no3Zc7xUzCDBsHxajD_joBkQi8Ge5iPaeF5p0gM"
                    name="John Abele"
                    teamRole={<>Board Advisor</>}
                    href="https://en.wikipedia.org/wiki/John_Abele"
                    subrole="Founder, Boston Scientific"
                    pronouns="he/him"
                  />
                </Grid>
              </Box>
            </Flex>
            <Grid columns={[1, null, null, 2]} gap={3}>
              <Box>
                <Box
                  sx={{
                    bg: 'rgb(51 214 166 / 40%)',
                    p: 3,
                    borderRadius: '20px'
                  }}
                >
                  <Text
                    variant="headline"
                    mt={2}
                    mb={3}
                    as="h3"
                    sx={{ textAlign: 'center', fontSize: 4 }}
                  >
                    Builder Resources Team
                  </Text>
                  <Grid columns={[1, null, 2]} gap={2}>
                    {team.current
                      ?.filter(member => member.department === 'HQ')
                      .map(member => (
                        <Bio
                          img={member.avatar}
                          name={member.name}
                          teamRole={member.role}
                          text={member.bio}
                          pronouns={member.pronouns}
                          email={member.email}
                          key={member.name}
                        />
                      ))}
                  </Grid>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    bg: 'rgb(236 55 80 / 40%)',
                    p: 3,
                    borderRadius: '20px'
                  }}
                >
                  <Text
                    variant="headline"
                    mt={2}
                    mb={3}
                    as="h3"
                    sx={{ textAlign: 'center', fontSize: 4 }}
                  >
                    HCB Team
                  </Text>
                  <Grid columns={[1, null, 2]} gap={2}>
                    {team.current
                      ?.filter(member => member.department === 'HCB')
                      .map(member => (
                        <Bio
                          img={member.avatar}
                          name={member.name}
                          teamRole={member.role}
                          text={member.bio}
                          pronouns={member.pronouns}
                          email={member.email}
                          key={member.name}
                        />
                      ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Box
              sx={{
                bg: 'rgb(166 51 214 / 40%)',
                p: 3,
                borderRadius: '20px',
                mt: 3
              }}
            >
              <Text
                variant="headline"
                mt={2}
                mb={3}
                as="h3"
                sx={{ textAlign: 'center', fontSize: 4 }}
              >
                Community Team
              </Text>
              <Grid columns={[1, 2, null, 4]} gap={2}>
                {team.current
                  ?.filter(member => member.department === 'Community')
                  .map(member => (
                    <Bio
                      img={member.avatar}
                      name={member.name}
                      teamRole={member.role}
                      text={member.bio}
                      pronouns={member.pronouns}
                      email={member.email}
                      key={member.name}
                    />
                  ))}
              </Grid>
            </Box>
            <br />
            <Box sx={{ textAlign: 'center', mt: 2, mb: [3, 4] }}>
              <Text
                variant="title"
                color="orange"
                sx={{ lineHeight: '1em', fontSize: [4, 5, 6] }}
                as="h2"
              >
                Acknowledgements
              </Text>
              <Text
                variant="title"
                color="text"
                sx={{
                  lineHeight: '1.2',
                  fontSize: [1, 3, 4],
                  my: [3, 0, 0],
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
                as="h2"
              >
                Hack Club is a 501(c)(3) nonprofit. We are incredibly grateful
                for the support of our donors, who make this work possible.
              </Text>
              <Text
                variant="title"
                color="text"
                sx={{
                  lineHeight: '1.2',
                  fontSize: [1, 3, 4],
                  my: [3, 0, 0],
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
                as="h2"
              >
                Our generous donors include Elon Musk, GitHub, Stripe, and more.
              </Text>
              <Text
                variant="title"
                color="text"
                sx={{
                  lineHeight: '1.2',
                  fontSize: [1, 3, 4],
                  my: [3, 0, 0],
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
                as="h2"
              >
                Thank you for believing in the future of our movement.
              </Text>
              <Text
                variant="title"
                color="text"
                sx={{
                  lineHeight: '1.2',
                  fontSize: [1, 3, 4],
                  my: [3, 0, 0],
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
                as="h2"
              >
                You inspire us every day to keep pushing forward.
              </Text>
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
