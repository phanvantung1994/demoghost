import styled from 'styled-components'
import { Button } from 'antd'

import { buttonStyle } from '../../theme/customVariant'
import { themeGet } from '@styled-system/theme-get'

const ButtonCustom = styled(Button)(
  {
    appearance: 'none',
    fontFamily: 'inherit'
  },
  buttonStyle,
  {
    border: '1px solid',
    borderColor: themeGet('colors.primary'),
    fontSize: `${themeGet('fontSizes.1')} !important`,

    '&:hover': {
      borderColor: themeGet('colors.primary')
    },

    '&:focus': {
      border: '1px solid'
    }
  }
)

export { ButtonCustom }
