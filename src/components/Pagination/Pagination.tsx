import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import RenderNumberedButtons from 'components/RenderNumberedButtons/RenderNumberedButtons';

import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

const Pagination = ({ currentPage, totalPages, onNextClick, onPreviousClick }: PaginationProps): JSX.Element => {
  const onPageClick = useCallback(
    (event) => {
      console.log('You clicked:', event.currentTarget);
    },
    [currentPage],
  );

  return (
    <ul className={styles.paginationList}>
      <li className={styles.item}>
        <button className={styles.button} onClick={onPreviousClick}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
      </li>
      <RenderNumberedButtons currentPage={currentPage} totalPages={totalPages} onPageClick={onPageClick} />
      <li>
        <button className={styles.button} onClick={onNextClick}>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
