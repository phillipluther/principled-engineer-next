import type { NextPage } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import { Box, Center, Container, Heading, Text, VisuallyHidden } from '@chakra-ui/react';
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

      <Container size="lg">
        <p>Regular ol' content</p>
      </Container>
    </>
  );
};

export default HomePage;
