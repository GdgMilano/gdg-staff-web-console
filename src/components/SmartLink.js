import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SmartLink = ({ href, children, ...others }) => {
  const isExternalLink = href.startsWith('http')

  if (isExternalLink) {
    return <a target="_blank" href={href} {...others}>{children}</a>
  }

  return <Link to={href} {...others}>{children}</Link>
}

SmartLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}
export default SmartLink