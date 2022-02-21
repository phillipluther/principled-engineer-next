import { useRouter } from 'next/router';
import Link from 'next/link';
import PrimaryNav from '../primary-nav';
import Logo from './principled-engineer-logo.svg';

const Header = () => {
  const router = useRouter();
  const TitleTag = router.pathname === '/' ? 'h1' : 'p';

  return (
    <header>
      <TitleTag>
        <Link href="/">
          <a>
            <Logo className="h-48px" alt="" aria-hidden />
            <span className="sr-only">The Principled Engineer | Home</span>
          </a>
        </Link>
      </TitleTag>

      <PrimaryNav showHome={false} />
    </header>
  );
};

export default Header;
