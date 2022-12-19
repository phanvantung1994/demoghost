import React from 'react'
import { SearchBoxWrapper, SearchCustom } from './SearchBox.style'
import PropTypes from 'prop-types'

const SearchBox = (props) => {
  const { className, style, placeholder, loading, size } = props

  return (
    <SearchBoxWrapper className={className} style={style}>
      <SearchCustom
        placeholder={placeholder}
        loading={loading ?? false}
        size={size ?? 'large'}
        shape={'round'}
      />
    </SearchBoxWrapper>
  )
}

SearchBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool
}

export default SearchBox
