import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import {
  Center,
  Image,
  HStack,
  Text,
  Heading,
  Code,
  Link,
  VStack,
  Button,
  AspectRatio,
  Box,
} from 'native-base'
import { ColorModeSwitch } from '../../components'

export function HomeScreen() {
  return (
    <Center
      flex={1}
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
    >
      <VStack alignItems="center" space="md">
        <AspectRatio w={40} ratio={1}>
          <Image
            rounded="full"
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1534837615848849413/6uNTjzMu_400x400.jpg',
            }}
            alt="NextJS Logo"
            resizeMode="contain"
          />
        </AspectRatio>
        <Heading>NativeBase + Solito ❤️</Heading>
        <Text>
          Edit <Code>packages/app/home/screen.tsx</Code> and save to reload.
        </Text>
        <HStack alignItems="center" space="sm">
          <Link href="https://solito.dev/" isExternal>
            <Text
              _light={{ color: 'gray.700' }}
              _dark={{ color: 'gray.400' }}
              underline
              fontSize={'xl'}
            >
              Learn Solito
            </Text>
          </Link>
          <Text>/</Text>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              Learn NativeBase
            </Text>
          </Link>
        </HStack>
      </VStack>
      <ColorModeSwitch />
      <Box mt="6">
        <SolitoLink href="/user/NativeBase">
          <Button pointerEvents="none" variant="outline" colorScheme="coolGray">
            Open User Detail
          </Button>
        </SolitoLink>
      </Box>
    </Center>
  )
}
