import Link from 'next/link';

const navLinks = [
  {
    name: 'home',
    label: 'Home',
    href: '/',
  },
  {
    name: 'posts',
    label: 'Blog Posts',
    href: '/posts',
  },
  {
    name: 'about',
    label: 'About',
    href: '/about',
  },
  {
    name: 'contact',
    label: 'Contact',
    href: '/contact',
  },
];

const PrimaryNav = ({
  showHome = true,
  className,
  ...props
}: {
  showHome?: boolean;
  className?: string;
}) => (
  <nav>
    <ul className="flex flex-wrap">
      {navLinks.map(({ name, label, href }) => {
        return name === 'home' && showHome === false ? null : (
          <li key={name}>
            <Link href={href}>
              <a className="block px-2">{label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default PrimaryNav;
