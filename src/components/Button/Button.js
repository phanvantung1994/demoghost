import React from 'react'
import PropTypes from 'prop-types'
import { ButtonCustom } from './Button.style'

const Button = (props) => {
  const { title, className, style, variant, size, shape, onClick } = props

  return (
    <ButtonCustom
      className={className}
      style={style}
      variant={variant}
      shape={shape ?? 'round'}
      size={size ?? 'large'}
      onClick={onClick}
    >
      {title}
    </ButtonCustom>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
