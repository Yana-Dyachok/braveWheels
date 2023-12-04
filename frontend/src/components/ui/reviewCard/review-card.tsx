import './_review-card.scss';

type ReviewCardTypes = {
  id?: number;
  reviewName: string;
  reviewPictureURI: string;
  reviewStars: number;
  reviewText: string;
};

const ReviewCard = ({
  reviewName,
  reviewPictureURI,
  reviewStars,
  reviewText,
}: ReviewCardTypes) => {
  return (
    <div className='review-card'>
      <div className='review-card__picture'>
        <img className='review-card__img' src={reviewPictureURI} alt={'фото ' + reviewName} width='200' height='200'/>
      </div>
      <div className='review-card__content'>
        <h3 className='review-card__name'>{reviewName}</h3>
        <div className='review-card__rating' data-stars={reviewStars}></div>
        <p className='review-card__text'>{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
