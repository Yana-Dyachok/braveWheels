import './_benefits.scss';
import './_benefits-list.scss';
import './_benefit-card.scss';

const Benefits = () => {
  return (
    <section className='section benefits'>
      <div className='container'>
        <h2 className='title'>Чому обирають нас?</h2>
        <div className='benefits__inner grid'>
          <ul className="benefits-list">
            <li className="benefits-list__item">
              <div className="benefit-card icon icon--fast">
                <p className="benefit-card__name">Відправка в той же день</p>
                <p className="benefit-card__text">При замовленні до 17:00 відправимо сьогодні.</p>
              </div>
            </li>
            <li className="benefits-list__item">
              <div className="benefit-card icon icon--delivery">
                <p className="benefit-card__name">Безкоштовна доставка.</p>
                <p className="benefit-card__text">Замовлення від 15 000 грн доставляються безкоштовно. </p>
              </div>
            </li>
            <li className="benefits-list__item">
              <div className="benefit-card icon icon--sale">
                <p className="benefit-card__name">Знижка -10%</p>
                <p className="benefit-card__text">Ви отримаєте знижку - 10% на наступне замовлення.</p>
              </div>
            </li>
          </ul>
          <ul className="benefits-list">
            <li className="benefits-list__item">
              <div className="benefit-card icon icon--support">
                <p className="benefit-card__name">Служба підтримки 24/7</p>
                <p className="benefit-card__text">Наші консультанти завжди раді вам допомогти.</p>
              </div>
            </li>
            <li className="benefits-list__item">
              <div className="benefit-card icon icon--return">
                <p className="benefit-card__name">Повернення замовлення.</p>
                <p className="benefit-card__text">Ви можете повернути ваше замовлення протягом 30 днів.</p>
              </div>
            </li>
            <li className="benefits-list__item">
              <div className="benefit-card icon icon--garancy">
                <p className="benefit-card__name">Гарантія</p>
                <p className="benefit-card__text">Ви отримаєте рік гарантії на наші велосипеди.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
