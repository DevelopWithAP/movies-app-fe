import { addMultipleClassNames } from 'utilities/addMultipleClassNames';

import usePagination from '../../hooks/usePagination';
import styles from './RenderNumberedButtons.module.css';

type PaginatedButtonsProps = {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
};

const RenderNumberedButtons = ({ currentPage, totalPages, onPageClick }: PaginatedButtonsProps): JSX.Element => {
  const pagination = usePagination({ totalPageCount: totalPages, currentPage });
  console.log(typeof pagination);

  const renderNumberedButtons = () => {
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
  };

  return <>{renderNumberedButtons()}</>;
};

export default RenderNumberedButtons;
