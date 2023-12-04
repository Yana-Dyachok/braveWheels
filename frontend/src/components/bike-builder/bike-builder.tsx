import Button from 'components/ui/btn/btn';
import './_bike-builder.scss';
import './_builder-box.scss';

const BikeBuilder = () => {
  return (
    <>
      <section className='section bike-builder'>
        <div className='container'>
          <h2 className='title bike-builder__title'>Підбір велосипеда</h2>
          <div className='bike-builder__inner'>
            <div className='builder-box'>
              <form className='builder-box__form' action='' name='builder-form'>
                <div className='builder-box__group'>
                  <h3 className='builder-box__title'>Тип велосипеда</h3>
                  <div className="builder-box__row flex ai-center jc-btw">
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='bikeType' id='bikeType[1]'/>
                      <label className='builder-box__label' htmlFor='bikeType[1]'>Шосейний</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='bikeType' id='bikeType[2]'/>
                      <label className='builder-box__label' htmlFor='bikeType[2]'>Гірський</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='bikeType' id='bikeType[3]'/>
                      <label className='builder-box__label' htmlFor='bikeType[3]'>Міський</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='bikeType' id='bikeType[4]'/>
                      <label className='builder-box__label' htmlFor='bikeType[4]'>Електро</label>
                    </div>
                  </div>
                </div>
                <div className='builder-box__group'>
                  <h3 className='builder-box__title'>Зріст</h3>
                  <div className="builder-box__row flex ai-center jc-btw">
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='userHeight' id='userHeight[low]'/>
                      <label className='builder-box__label' htmlFor='userHeight[low]'>160-170</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='userHeight' id='userHeight[mid]'/>
                      <label className='builder-box__label' htmlFor='userHeight[mid]'>170-180</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='userHeight' id='userHeight[tall]'/>
                      <label className='builder-box__label' htmlFor='userHeight[tall]'>180-190</label>
                    </div>
                  </div>
                </div>
                <div className='builder-box__group'>
                  <h3 className='builder-box__title'>Діаметр колес</h3>
                  <div className="builder-box__row flex ai-center jc-btw">
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='wheelSize' id='wheelSize[sm]'/>
                      <label className='builder-box__label' htmlFor='wheelSize[sm]'>26</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='wheelSize' id='wheelSize[md]'/>
                      <label className='builder-box__label' htmlFor='wheelSize[md]'>28</label>
                    </div>
                    <div className='builder-box__btn'>
                      <input className='sr-only builder-box__input' type='radio' name='wheelSize' id='wheelSize[lg]'/>
                      <label className='builder-box__label' htmlFor='wheelSize[lg]'>29</label>
                    </div>
                    
                  </div>
                </div>
                <Button classNames='builder-box__submit block-center'>Підібрати</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikeBuilder;
