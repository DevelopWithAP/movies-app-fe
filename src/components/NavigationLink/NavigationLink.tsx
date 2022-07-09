import { NavLink } from 'react-router-dom';

import styles from './NavigationLink.module.css';
import { addMultipleClassNames } from '../../utilities/addMultipleClassNames';


type NavigationLinkProps = {
  to: string;
  name: string;
  styling?: string[];
};

const NavigationLink = ({ to, name, styling = [] }: NavigationLinkProps): JSX.Element => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? addMultipleClassNames([styles.isActive, styles.navLink, ...styling]) : addMultipleClassNames([styles.navLink, ...styling])
        }
        to={to}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default NavigationLink;
