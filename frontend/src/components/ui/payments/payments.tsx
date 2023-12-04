import './_payments.scss';

type PaymentTypes = {
  classNames?: string;
}

const Payments = ({classNames}:PaymentTypes) => {
  console.log('CLASSNAMES: ', classNames)
  const newClassName = classNames ? `payments ${classNames}` : 'payments';

  return (
    <ul className={newClassName}>
      <li className='payments__item payments__item--gpay'></li>
      <li className='payments__item payments__item--apay'></li>
      <li className='payments__item payments__item--visa'></li>
      <li className='payments__item payments__item--mc'></li>
    </ul>
  )
}

export default Payments;