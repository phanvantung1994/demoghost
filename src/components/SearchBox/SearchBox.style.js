import styled from 'styled-components'
import { Input } from 'antd'
import { themeGet } from '@styled-system/theme-get'
const { Search } = Input

const SearchBoxWrapper = styled.div`
  width: 35%;
`

const SearchCustom = styled(Search)`
  button {
    background: ${themeGet('colors.primary')};
    border: 1px solid ${themeGet('colors.primary')};
    color: ${themeGet('colors.white')} !important;
    border-left-color: ${themeGet('colors.primary')} !important;
    border-radius: 0 6px 6px 0 !important;
  }

  button:hover {
    border: 1px solid ${themeGet('colors.primary')};
    background: ${themeGet('colors.primary')};
  }

  input {
    border-top-left-radius: ${themeGet('radius.3')}px;
    border-bottom-left-radius: ${themeGet('radius.3')}px;
  }

  input:hover {
    border-color: ${themeGet('colors.primary')} !important;
  }

  input:focus {
    border-color: ${themeGet('colors.primary')} !important;
    box-shadow: none;
  }
`
export { SearchBoxWrapper, SearchCustom }
