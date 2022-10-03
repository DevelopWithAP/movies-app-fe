import { useMemo } from 'react';

const DOTS = '...';

type UsePaginationProps = {
  totalPageCount: number;
  siblingCount?: number;
  currentPage: number;
};

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const usePagination = ({ totalPageCount, siblingCount = 1, currentPage }: UsePaginationProps): (string | number)[] | undefined => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    /**
     * Case 1:
     * Number of pages < nmuber of pages shown in component -> return range [1...totalPageCount]
     */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    /**
     * Calculate left & right sibling index
     * Must be within range [1, totalPageCount]
     */

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    /**
     * No DOTS appear if there is just one page number to be inserted between the extremes of sibling and the page limits
     * i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
     */

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /**
     * Case 2:
     * No left dots to show, but right dots appear
     */

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /**
     * Case 3:
     * No right dots to show, but left dots appear
     */

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    /**
     * Case 4:
     * Dots appear on both sides
     */

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPageCount, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
