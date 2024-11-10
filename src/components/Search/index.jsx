import React from 'react'

import s from './Search.module.scss'
import { SearchContext } from '../../App'

function Search() {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  return (
    <div className={s.root}>
        <img src="search.png" alt="" />
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Поиск пиццы...'/>
    </div>
  )
}

export default Search