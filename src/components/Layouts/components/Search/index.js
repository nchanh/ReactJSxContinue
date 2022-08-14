import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Poppers';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/SearchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const refKeyword = useRef();

  const debounced = useDebounce(keyword, 500);

  useEffect(() => {
    if (!debounced) {
      setSearchResult([]);
      return;
    }

    setShowLoading(true);

    /* Example 1 *
    request
      .get('users/search', { q: debounced, type: 'less' })
      .then((res) => {
        setSearchResult(res.data);
        setShowLoading(false);
      })
      .catch((err) => {
        setShowLoading(false);
      });
    */

    /* Example 2 *
    const fetchAPI = async () => {
      try {
        const res = await request.get('users/search', { q: debounced, type: 'less' });

        setSearchResult(res.data);
        setShowLoading(false);
      } catch (error) {
        setShowLoading(false);
      }
    };

    fetchAPI();
    */

    /* Example 3 */
    const fetchAPI = async () => {
      setShowLoading(true);

      const res = await searchService.search(debounced);
      setSearchResult(res);

      setShowLoading(false);
    };

    fetchAPI();
  }, [debounced]);

  const handleClear = () => {
    setKeyword('');
    refKeyword.current.focus();
  };

  const handleClickOutside = () => {
    setShowResult(false);
  };

  const handleChangeKeyword = (keyword) => {
    const keySpace = /\s/g;
    if (keyword.length === 1 && keySpace.test(keyword)) {
      return;
    }

    setKeyword(keyword);
  };

  return (
    <TippyHeadless
      interactive
      visible={searchResult.length > 0 && showResult}
      onClickOutside={handleClickOutside}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h5 className={cx('search-result-title')}>Account</h5>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('search')}>
        <input
          ref={refKeyword}
          placeholder="Search accounts and videos..."
          spellCheck={false}
          value={keyword}
          onChange={(e) => handleChangeKeyword(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!keyword && !showLoading && (
          <button className={cx('btn-clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
        )}
        {showLoading && <FontAwesomeIcon icon={faSpinner} className={cx('spinner')} />}

        <button className={cx('btn-search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} fill="currentColor" />
        </button>
      </div>
    </TippyHeadless>
  );
}

export default Search;
