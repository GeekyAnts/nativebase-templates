import { createParam } from 'solito'
import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import { Center, Heading, Button, Box, ChevronLeftIcon } from 'native-base'
import { ColorModeSwitch } from '../../components'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  return (
    <Center
      flex="1"
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <Heading>{`Hey there, ${id}! 👋`}</Heading>
      <Box mt="6">
        <SolitoLink href="/">
          <Button
            pointerEvents="none"
            leftIcon={<ChevronLeftIcon size="xs" />}
            variant="outline"
            colorScheme="coolGray"
          >
            Go Back
          </Button>
        </SolitoLink>
      </Box>
      <ColorModeSwitch />
    </Center>
  )
}
