import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Center, Container, Text, VisuallyHidden } from '@chakra-ui/react';

export const siteDescription =
  'blog about building modern web applications with JavaScript, CSS and HTML';

export const siteTitle = 'The Principled Engineer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={`The Principled Engineer is a ${siteDescription}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        width="100vw"
        bgGradient="linear(to-br, gray.900, gray.700, gray.800)"
        color="gray.100"
        paddingTop="240px"
        paddingBottom={{ base: 800, md: 900 }}
        paddingX={{ base: 600, md: 700 }}
        zIndex="0"
        position="relative"
      >
        <Center>
          <Link href="/">
            <a>
              <Image
                src="/images/principled-engineer-logo-reverse.svg"
                width={804}
                height={382.5}
                alt=""
                aria-hidden
              />
            </a>
          </Link>
        </Center>
        <Center marginTop={{ base: 700, md: 800 }} textAlign="center" color="gray.200">
          <VisuallyHidden as="h2">{siteTitle}</VisuallyHidden>
          <Text fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }} fontStyle="italic">
            A {siteDescription}
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
      </Box>

      <Container size="lg">
        <p>Regular ol' content</p>
      </Container>
    </>
  );
};

export default Home;
