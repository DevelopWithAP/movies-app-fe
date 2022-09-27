import usePagination from 'hooks/usePagination';
import { addMultipleClassNames } from 'utilities/addMultipleClassNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

const Pagination = ({ currentPage, totalPages, onNextClick, onPageClick, onPreviousClick }: PaginationProps): JSX.Element => {
  const pagination = usePagination({ totalPageCount: totalPages, currentPage });

  const renderNumberedButtons = () =>
    pagination?.map((item, index) => {
      const isDots = typeof item === 'string';

      const style = isDots ? styles.paginationPadding : item === currentPage ? addMultipleClassNames([styles.item, styles.active]) : styles.item;

      const handlePageClick = () => {
        if (typeof item === 'number') {
          onPageClick(item);
        }
      };

      return (
        <li className={style} key={index}>
          {isDots ? (
            item
          ) : (
            <button className={styles.button} onClick={handlePageClick}>
              {item}
            </button>
          )}
        </li>
      );
    });

  return (
    <ul className={styles.paginationList}>
      <li className={styles.item}>
        <button className={styles.button} onClick={onPreviousClick}>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
      </li>
      {renderNumberedButtons()}
      <li className={styles.item}>
        <button className={styles.button} onClick={onNextClick}>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
