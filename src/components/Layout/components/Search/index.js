import React, {useEffect, useRef, useState} from 'react';

import {Wrapper as PopperWrapper} from "../../../Popper";
import AccountItem from "../../../AccountItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import style from "./Search.module.scss"
import useDebounce from "../../../../hooks/useDebounce";
import * as searchService from "../../../../apiServices/searchService";


const cx = classNames.bind(style)

function Search(props) {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)
  const debouced = useDebounce(searchValue, 500)
  const inputRef = useRef()
  useEffect(() => {
    if (!debouced.trim()) {
      setSearchResult([])
      return;
    }
    const fetchApi = async () => {
      setLoading(true)
      const result = await searchService.search(debouced);
      setSearchResult(result)

      setLoading(false)


    }
    fetchApi()

  }, [debouced])
  const handleClear = () => {
    setSearchValue("")
    inputRef.current.focus()
  }
  const handleHideResult = () => {
    setShowResult(false)
  }
  return (
    <Tippy
      interactive={true}
      animation={false}
      visible={showResult && searchResult.length > 0}

      render={attrs => (

        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map(result => (
              <AccountItem key={result.id} data={result}/>
            ))}
          </PopperWrapper>
        </div>

      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder={"search accounts and videos"}
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (

          <button className={cx("clear")} onClick={handleClear}>
            {/*  clear*/}
            <FontAwesomeIcon icon={faCircleXmark}/>

          </button>
        )}
        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner}/>}
        {/*  Loading*/}

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          {/*  search*/}
        </button>


      </div>
    </Tippy>
  );
}

export default Search;