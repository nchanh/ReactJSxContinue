import clsx from 'clsx'
import style from './Button.module.css'

function Button({ colorSuccess }) {
  const classes = clsx(style.btn, {
    [style.colorSuccess]: colorSuccess
  }) 

  return (
    <>
      <button className={classes}>Click 1</button>
    </>
  )
}

export default Button