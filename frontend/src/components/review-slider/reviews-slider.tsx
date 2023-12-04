import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './../ui/reviewCard/review-card';
import BtnAction from 'components/ui/btnAction/btnAction';

import 'swiper/css';
import 'swiper/css/navigation';
import './_reviews-slider.scss';

import reviewsArray from 'mockAPI/reviews';

const ReviewsSlider = () => {

  return (
    <div className="reviews-slider">
      <Swiper 
        modules={[Navigation]} 
        navigation={{
          nextEl: '.reviews-slider__nav--next', 
          prevEl: '.reviews-slider__nav--prev'
        }}
        spaceBetween={25} 
        slidesPerView={2}
      >
        {reviewsArray.map(
        (review: {
          reviewPictureURI: string;
          reviewName: string;
          reviewStars: number;
          reviewText: string;
        }) => (
          <SwiperSlide>
            <ReviewCard
              reviewPictureURI={review.reviewPictureURI}
              reviewName={review.reviewName}
              reviewStars={review.reviewStars}
              reviewText={review.reviewText}
            />
          </SwiperSlide>
        ),
      )}
        
      </Swiper>
      <div className="reviews-slider__actions">
      <BtnAction 
        classNames='reviews-slider__nav reviews-slider__nav--next icon icon--next'

      />
      <BtnAction 
        classNames='reviews-slider__nav reviews-slider__nav--prev icon icon--prev'

      />
    </div>
    </div>
  )
}

export default ReviewsSlider;