import './_social.scss';

type SocialTypes = {
  classNames?: string;
}

const Social = ({classNames}:SocialTypes) => {

  const newClassName = classNames ? `social ${classNames}` : 'social';

  return (
    <ul className={newClassName}>
      <li className='social__item'>
        <a
          className='social__link social__link--fb'
          href='https://fb.com'
          title='Перейти в фейсбук'
          aria-label='Фейсбук'
        ></a>
      </li>
      <li className='social__item'>
        <a
          className='social__link social__link--google'
          href='https://fb.com'
          title='Перейти в гугл'
          aria-label='гугл'
        ></a>
      </li>
      <li className='social__item'>
        <a
          className='social__link social__link--instagram'
          href='https://fb.com'
          title='Перейти в інстаграм'
          aria-label='Інстаграм'
        ></a>
      </li>
      <li className='social__item'>
        <a
          className='social__link social__link--tg'
          href='https://fb.com'
          title='Перейти в телеграм'
          aria-label='телеграм'
        ></a>
      </li>
    </ul>

  )

}

export default Social;