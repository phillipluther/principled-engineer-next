import type { NextPage } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Box, Center, VStack, Text, VisuallyHidden } from '@chakra-ui/react';

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
        paddingX={{ base: 600, md: 700 }}
        paddingY={{ base: 800, md: 900 }}
        zIndex="0"
        position="relative"
      >
        <VisuallyHidden as="h1">{siteTitle}</VisuallyHidden>
        <Box>
          <NextLink href="/">
            <NextImage
              src="/images/principled-engineer-logo-reverse.svg"
              // width={536}
              width={804}
              // height={255}
              height={382.5}
              alt=""
              aria-hidden
            />
          </NextLink>
        </Box>
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
    </>
  );
};

export default Home;
