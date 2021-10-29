import React from 'react';
import Spinner from 'react-spinkit';

const StbLoading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <React.Fragment>
      {
        isLoading &&
          <div className="flex justify-center items-center py-16">
            <Spinner name="line-scale" fadeIn="none" />
          </div>
      }
    </React.Fragment>
  );
}

export default React.memo(StbLoading);