import React, { useEffect, useState, useRef } from 'react';
import * as s from './index.styled';
import * as i from './index.interface';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchGlobalSearchMoviesAction } from '../../app/search/index.action';
import { selectGlobalSearchMovies, selectGlobalSearchStatus } from '../../app/search/index.selector';

const StbInputSearch: React.FC<i.InputSearch> = (props) => {
  const selfContainer = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectGlobalSearchStatus);
  const movies = useAppSelector(selectGlobalSearchMovies);
  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchGlobalSearchMoviesAction({ q: props.value, page: 1 }))
  }, [dispatch, props.value]);

  useEffect(() => {
    const closeAutocomplete = (e: any): void => {
      if (selfContainer.current && !selfContainer.current.contains(e.target)) {
        setIsOpenAutocomplete(false);
      }
    }  

    document.addEventListener('mousedown', closeAutocomplete);
    return () => document.removeEventListener('mousedown', closeAutocomplete); 
  }, []);

  return (
    <form action="/search" ref={selfContainer}>
      <s.InputSearch className="relative">
        <s.Input
          name="q"
          type="text"
          className="py-2 px-4"
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          onClick={() => setIsOpenAutocomplete(true)}
        />

        {
          isOpenAutocomplete && props.value.length > 0 &&
          <>
            {
              ((status === 'loading') || (status === 'idle' && movies.length > 0)) &&
              <div className="InputSearch__autocomplete">
                <div className="absolute top-0 left-0 right-0 mt-12 w-full border bg-white shadow-xl rounded">
                  <div className="p-3">
                    <div className="divide-y">
                      {
                        status !== 'idle' &&
                        <div className="block py-2">
                          <span className="text-center block">Searching...</span>
                        </div>
                      }
                      {
                        status === 'idle' &&
                        movies.map((movie, index) => (
                          <Link
                            to={`/v/${movie.imdbID}`}
                            onClick={() => setIsOpenAutocomplete(false)}
                            className="block py-2" key={index}>
                            <span>{movie.Title}</span>
                            <svg x-show="suggestion.item.directLink" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
        }

        <s.Button type="submit">
          <s.SearchIcon />
        </s.Button>
      </s.InputSearch>
    </form>
  );
}

export default StbInputSearch;