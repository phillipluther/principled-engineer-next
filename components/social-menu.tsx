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

const SocialMenu = ({ onDark = false }) => (
  <HStack spacing="2">
    {socialItems.map(({ label, href, icon: Icon }) => (
      <IconButton
        as="a"
        icon={<Icon />}
        aria-label={label}
        variant="link"
        fontSize="24px"
        padding="12px"
        href={href}
        key={href}
        color={onDark ? 'gray.200' : 'gray.600'}
        _hover={{ color: onDark ? 'gray.100' : 'gray.900' }}
      />
    ))}
  </HStack>
);

export default SocialMenu;
