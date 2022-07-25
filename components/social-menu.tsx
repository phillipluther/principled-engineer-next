import { BsTwitter, BsEnvelopeFill, BsRssFill } from 'react-icons/bs';
import { PrimaryNavItemProps } from './primary-nav';

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
  <ul>
    {socialItems.map(({ label, href, icon: Icon }) => (
      <li key={href}>
        <a href={href} title={label}>
          <Icon aria-label={label} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialMenu;
