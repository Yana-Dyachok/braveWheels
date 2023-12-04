import './_address.scss';

type AddressTypes = {
  classNames?: string;
}

const Address = ({classNames}:AddressTypes) => {
  const newClassName = classNames ? `address ${classNames}` : 'address';
  return (
    <address className={newClassName}>
            <div className='address__group'>
              <a className='address__link' href='tel:0445007050'>
                044 500 70 50
              </a>
              <div className='address__text'>
                Оформлення замовлення:
                <div>
                  <time dateTime='T09:00'>9:00</time>-
                  <time dateTime='T21:00'>21:00</time>
                </div>
              </div>
            </div>
            <div className='address__group'>
              <a className='address__link' href='tel:0445008060'>
                044 500 80 60
              </a>
              <div className='address__text'>
                Служба підтримки:
                <p>Цілодобово</p>
              </div>
            </div>
          </address>
  )
}

export default Address;