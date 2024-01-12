import BikeSlider from 'components/bike-slider/bike-slider';
import './_recommendation.scss';

const Recommendations = () => {
  return (<section className='section recommendation'>
    <div className="container recommendation__container">
      <h2 className="title recommendation__title">Рекомендації</h2>
      <BikeSlider />
    </div>
  </section>);
};

export default Recommendations;
