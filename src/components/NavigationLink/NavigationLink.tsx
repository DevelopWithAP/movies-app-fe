import { NavLink } from 'react-router-dom';

import styles from './NavigationLink.module.css';

type NavigationLinkProps = {
  to: string;
  name: string;
  // styles?: string[];
};

const NavigationLink = ({ to, name }: NavigationLinkProps): JSX.Element => {
  return (
    <div>
      <NavLink className={styles.navLink} to={to}>
        {name}
      </NavLink>
    </div>
  );
};

export default NavigationLink;
