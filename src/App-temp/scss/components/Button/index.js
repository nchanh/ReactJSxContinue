import clsx from 'clsx'
import style from './Button.module.scss'

function Button({ colorSuccess, disabled }) {
  const classes = clsx(style.btn, {
    [style.colorSuccess]: colorSuccess,
    [style.disabled]: disabled,
  }) 

  return (
    <>
      <button className={classes}>Click</button>
    </>
  )
}

export default Button