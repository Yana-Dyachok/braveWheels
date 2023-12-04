import ReviewsSlider from 'components/review-slider/reviews-slider';
import './_reviews.scss';

const Reviews = () => {

  return (
    <section className="section reviews">
      <div className="container">
        <h2 className="title">Відгуки</h2>
          <ReviewsSlider/>
      </div>
    </section>
  )
}

export default Reviews;