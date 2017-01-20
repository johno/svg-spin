import React from 'react'

export default ({ className = '', ...props }) => {
  const scx = 'pa3'
  const wcx = 'fl w-50 w-25-m w-20-l'
  const cx = `${className} ${wcx} ${scx}`

  return (
    <div
      className={cx}
      {...props}
    />
  )
}
