import { VisuallyHidden } from 'react-aria';
import classnames from 'classnames';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';
import Flourish from '../flourish';

import styles from './footer.module.css';
import { padded, textified, contained } from '../style-utils.module.css';

const Footer = () => (
  <footer className={classnames(padded, contained, styles.footer)}>
    <VisuallyHidden elementType="h2">Site Footer</VisuallyHidden>

    <section className={classnames(styles.centered, styles.nav)}>
      <VisuallyHidden elementType="h3">Supplemental Navigation</VisuallyHidden>
      <nav>
        <PrimaryNav />
      </nav>
    </section>

    <section className={classnames(styles.centered, styles.social)}>
      <VisuallyHidden elementType="h3">Never Miss a Post!</VisuallyHidden>
      <SocialMenu onDark />
    </section>

    <section className={classnames(styles.legal, padded, textified)}>
      <VisuallyHidden elementType="h3">Legal Information and Disclaimers</VisuallyHidden>
      <p>
        All Principled Engineer content is Copyright &copy; {new Date().getFullYear()} by Phillip
        Luther unless otherwise specified.
      </p>
      <p>
        The opinions expressed on the Principled Engineer belong to me, Phillip Luther, and do not
        necessarily reflect the views or opinions of any associated organizations or corporate
        entities.
      </p>
    </section>
  </footer>
);

export default Footer;
