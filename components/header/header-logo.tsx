import { Box, VisuallyHidden } from '@chakra-ui/react';
import NextLink from 'next/link';
import NextImage from 'next/image';

export const headerLogoSize = {
  width: 130,
  height: 64,
};

const HeaderLogo = ({ as = 'h1' }: { as?: keyof JSX.IntrinsicElements }) => (
  <Box
    as={as}
    height={`${headerLogoSize.height}px`}
    width={`${headerLogoSize.width}px`}
    marginRight="600"
  >
    <NextLink href="/" passHref>
      <a>
        <VisuallyHidden>The Principled Engineer</VisuallyHidden>
        <NextImage
          src="/images/principled-engineer-header-logo.svg"
          width={headerLogoSize.width}
          height={headerLogoSize.height}
          aria-hidden
          alt=""
        />
      </a>
    </NextLink>
  </Box>
);

export default HeaderLogo;
