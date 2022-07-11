import type { NextPage } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Center, Container, Text, VisuallyHidden } from '@chakra-ui/react';
import Seo, { defaultTitle as title, defaultDescription as description } from '../components/seo';

const HomePage: NextPage & { customHeader?: React.FC } = () => {
  return (
    <>
      <Seo>
        <meta
          name="description"
          content={`The Principled Engineer is ${description.toLowerCase()}`}
        />
      </Seo>

      {/* <Box
        width="100vw"
        bgGradient="linear(to-br, gray.900, gray.700, gray.800)"
        color="gray.100"
        paddingX={{ base: 600, md: 700 }}
        paddingTop={{ base: '240px', md: '180px' }}
        paddingBottom="800"
        zIndex="0"
        position="relative"
      >
        <Center>
          <NextLink href="/">
            <a>
              <Image
                src="/images/principled-engineer-logo-reverse.svg"
                width={804}
                height={382.5}
                alt=""
                aria-hidden
              />
            </a>
          </NextLink>
        </Center>
        <Center marginTop={{ base: 700, md: 800 }} textAlign="center" color="gray.200">
          <VisuallyHidden as="h2">{title}</VisuallyHidden>
          <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }} fontStyle="italic">
            {description}
          </Text>
        </Center>
        <Box
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          bgImage="url('/images/texture-tile.png')"
          opacity={0.5}
          zIndex={-1}
          aria-hidden
        />
      </Box> */}

      <Container size="lg">
        <p>Regular ol' content</p>
      </Container>
    </>
  );
};

export default HomePage;
