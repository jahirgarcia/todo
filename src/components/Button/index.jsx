import cs from 'classnames';
import styles from './styles.module.scss';

export default function Button({ variant, children, className, ...props }) {
  const variantClass = variant ? styles[variant] : null;

  return (
    <button {...props} className={cs(className, styles.button, variantClass)}>
      {children}
    </button>
  )
}
