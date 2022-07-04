import { BsTwitter, BsEnvelopeFill, BsRssFill } from 'react-icons/bs';
import { HStack, IconButton } from '@chakra-ui/react';
import { PrimaryNavItemProps } from './nav-menu';

export type SocialMenuItemProps = PrimaryNavItemProps & {
  icon: React.FC;
};

export const socialItems: SocialMenuItemProps[] = [
  {
    label: '@principledeng on Twitter',
    href: 'https://twitter.com/principledeng',
    icon: BsTwitter,
  },
  {
    label: 'hello@principled.engineer',
    href: 'mailto:hello@principled.engineer',
    icon: BsEnvelopeFill,
  },
  { label: 'Subscribe with RSS', href: '/feed.xml', icon: BsRssFill },
];

const SocialMenu = () => (
  <HStack spacing="2">
    {socialItems.map(({ label, href, icon: Icon }) => (
      <IconButton
        as="a"
        icon={<Icon />}
        aria-label={label}
        variant="link"
        fontSize="24px"
        padding="12px"
        color="inherit"
        href={href}
        key={href}
      />
    ))}
  </HStack>
);

export default SocialMenu;
