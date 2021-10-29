import React from 'react';
import Spinner from 'react-spinkit';
import * as s from './index.styled';
import * as i from './index.interface';

const StbInfiniteScrollPagination: React.FC<i.StbInfiniteScrollPaginationProps> = ({ children, status, currentPage, total, totalInResponse, handleLoadMore, containerClassname = '' }) => {
  const infiniteScrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const isScrolling = (): void => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const avaibleNextRequest = status === 'idle' && (scrollTop + clientHeight >= scrollHeight) && total < totalInResponse;

      if (avaibleNextRequest) {
        handleLoadMore(currentPage + 1);
      }
    }

    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, [status, total, totalInResponse, currentPage, handleLoadMore]);

  return (
    <React.Fragment>
      <s.InfiniteScroll className={containerClassname} ref={infiniteScrollRef}>
        {children}
      </s.InfiniteScroll>
      <MemoLoading isLoading={status === 'loading'} />
    </React.Fragment>
  );
}

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <React.Fragment>
      {
        isLoading &&
          <s.Loader>
            <Spinner name="line-scale" fadeIn="none" />
          </s.Loader>
      }
    </React.Fragment>
  );
}
const MemoLoading = React.memo(Loading);

export default React.memo(StbInfiniteScrollPagination);