import { Box, Input, Label, Button, Select, Text, Grid } from 'theme-ui'
import { useEffect, useRef, useState } from 'react'
import theme from '@hackclub/theme'
import Icon from '../../icon'
import { keyframes } from '@emotion/react'
import debounce from 'lodash/debounce'

const hideAnimation = keyframes({
  from: { display: 'flex' },
  to: { display: 'none', opacity: 0, padding: 0, position: 'absolute' }
})

const spinAnimation = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
})

function Base({ children, action, target, method, onSubmit, id }) {
  return (
    <Box
      as="form"
      sx={{ display: 'grid', gridTemplateColumns: '1fr' }}
      id={id}
      action={action}
      target={target}
      method={method}
      onSubmit={onSubmit}
    >
      {children}
    </Box>
  )
}

function Field({
  placeholder,
  label,
  name,
  type,
  value,
  onChange,
  required = true,
  loading = false
}) {
  return (
    <Box sx={{ my: 2 }}>
      <Label htmlFor={name} sx={{ color: 'muted', fontSize: 18 }}>
        {label}
      </Label>
      <Box sx={{ position: 'relative' }}>
        {loading && (
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              width: 20,
              height: 20,
              border: '1px solid white',
              borderRightStyle: 'none',
              animation: `${spinAnimation} 1s linear infinite`,
              borderRadius: '50%'
            }}
          ></Box>
        )}
        <Input
          id={name}
          placeholder={placeholder}
          name={name}
          type={type}
          sx={{
            bg: 'dark'
          }}
          onChange={onChange}
          value={value}
          required={required}
        />
      </Box>
    </Box>
  )
}

export default function Signup() {
  const [submitted, setSubmitted] = useState(false)

  const [eventName, setEventName] = useState('')
  const [teamType, setTeamType] = useState('')
  const [teamNumber, setTeamNumber] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const [teamNameLoading, setTeamNameLoading] = useState(false)

  const debouncedTeamNameUpdate = useRef(
    debounce(async teamNumber => {
      try {
        const data = await fetch(
          `/api/first-team?teamNumber=${teamNumber}`
        ).then(res => res.json())

        setTeamNameLoading(false)

        if (data.ok !== false) {
          setEventName(data.nickname)
        } else {
          setEventName('')
        }
      } catch (e) { }
    }, 200)
  )

  useEffect(() => {
    if (teamNumber && teamType === 'FRC') {
      setTeamNameLoading(true)
      debouncedTeamNameUpdate.current(teamNumber)
    } else {
      setEventName('')
    }
  }, [teamType, teamNumber])

  const handleSubmit = async e => {
    e.preventDefault()

    await fetch('/api/fiscal-sponsorship/demo', {
      method: 'POST',
      body: JSON.stringify({
        eventName,
        teamType,
        teamNumber,
        userEmail,
        eventCategory: 'robotics team'
      })
    })

    setSubmitted(true)

    // clear form
    setEventName('')
    setTeamType('')
    setTeamNumber('')
    setUserEmail('')
  }

  return (
    <>
      <Base
        id="form"
        method="POST"
        action="/api/fiscal-sponsorship/demo"
        onSubmit={handleSubmit}
      >
        <Grid sx={{ gridTemplateColumns: '1fr 2fr', alignItems: 'center' }}>
          <Label htmlFor="teamType" sx={{ color: 'muted', fontSize: 18 }}>
            Level
            <Select
              name="teamType"
              defaultValue="Select"
              sx={{ bg: 'dark', w: '500px !important' }}
              onChange={e => setTeamType(e.target.value)}
            >
              <option value="Select" disabled>
                Select
              </option>
              <option value="FLL">FLL</option>
              <option value="FTC">FTC</option>
              <option value="FRC">FRC</option>
            </Select>
          </Label>

          <Field
            label="Team number (optional)"
            name="teamNumber"
            placeholder="12345"
            value={teamNumber}
            loading={teamNameLoading}
            onChange={e => setTeamNumber(e.target.value)}
            required={false}
          />
        </Grid>
        <Field
          label="Team name"
          name="eventName"
          placeholder="Poseidon Robotics"
          value={eventName}
          onChange={e => setEventName(e.target.value)}
        />
        <Field
          label="Email address"
          name="userEmail"
          placeholder="fiona@hackclub.com"
          type="email"
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />
        <Button
          sx={{
            backgroundImage: theme.util.gx('orange', 'red'),
            mt: [2, 3],
            py: 2
          }}
          type="submit"
        >
          Create new account
        </Button>
      </Base>
      {submitted && (
        <Box
          sx={{
            mt: 2,
            px: 2,
            py: 2,
            borderRadius: 'default',
            color: 'white',
            bg: 'green',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            animation: `${hideAnimation} 0s ease-in 15s`,
            animationFillMode: 'forwards'
          }}
        >
          <Icon glyph="send" size={24} />
          <Text>Submitted! Check your email for a sign in link.</Text>
        </Box>
      )}
    </>
  )
}
