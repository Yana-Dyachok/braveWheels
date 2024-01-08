// import Button from 'components/ui/btn/btn';
import PageLink from 'components/ui/pageLink/pageLink';
import './_hero.scss';

const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='container hero__inner'>
        <div className='hero__content'>
          <h1 className='sr-only'>Магазин велосипедів BraveWeels: підбір та консультація</h1>
          <p className="hero__slogan">Розкрий свій шлях.</p>
          <p className='hero__text'>Підбери велосипед, створенний для твоїх досягнень!</p>
          <PageLink classNames='hero__btn' href='#next'>
            Підібрати
          </PageLink>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;
