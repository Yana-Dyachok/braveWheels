import React, { useState, ChangeEvent } from 'react';
import Button from 'components/ui/btn/btn';
import './_bike-builder.scss';
import './_builder-box.scss';
import './_builder-icons.scss';

const BikeBuilder = () => {
  const [value, setValue] = useState<number | string>(150);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue: string = e.target.value;
    if (!isNaN(Number(numericValue))) {
      const numericInt: number = parseInt(numericValue, 10);
      setValue(numericInt);
    } else {
      setValue(''); 
    }
  };

  const inputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    if (inputValue === '' || +inputValue < 150|| +inputValue >200) {
      handleInputChange({ target: { value: '150' } } as ChangeEvent<HTMLInputElement>);
    }
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericInt: number = parseInt(e.target.value, 10);
    setValue(numericInt);
  };

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
                  <div className='builder-box__row flex ai-center jc-btw'>
                    <div className='builder-box__btn builder-icon builder-icon--road-bike'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='bikeType'
                        id='bikeType[1]'
                      />
                      <label
                        className='builder-box__label bike-type__label'
                        htmlFor='bikeType[1]'
                      >
                        Шосейний
                      </label>
                    </div>
                    <div className='builder-box__btn builder-icon builder-icon--mountain-bike'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='bikeType'
                        id='bikeType[2]'
                      />
                      <label
                        className='builder-box__label bike-type__label'
                        htmlFor='bikeType[2]'
                      >
                        Гірський
                      </label>
                    </div>
                    <div className='builder-box__btn builder-icon builder-icon--city-bike'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='bikeType'
                        id='bikeType[3]'
                      />
                      <label
                        className='builder-box__label bike-type__label'
                        htmlFor='bikeType[3]'
                      >
                        Міський
                      </label>
                    </div>
                    <div className='builder-box__btn builder-icon builder-icon--electric-bike'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='bikeType'
                        id='bikeType[4]'
                      />
                      <label
                        className='builder-box__label bike-type__label'
                        htmlFor='bikeType[4]'
                      >
                        Електро
                      </label>
                    </div>
                  </div>
                </div>
                <div className='builder-box__group'>
                  <h3 className='builder-box__title'>Діаметр колес</h3>
                  <div className='builder-box__row flex ai-center jc-btw'>
                    <div className='builder-box__btn builder-icon builder-icon--wheel-one'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='wheelSize'
                        id='wheelSize[sm]'
                      />
                      <label
                        className='builder-box__label'
                        htmlFor='wheelSize[sm]'
                      >
                        26ʼʼ
                      </label>
                    </div>
                    <div className='builder-box__btn builder-icon builder-icon--wheel-two'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='wheelSize'
                        id='wheelSize[md]'
                      />
                      <label
                        className='builder-box__label'
                        htmlFor='wheelSize[md]'
                      >
                        28ʼʼ
                      </label>
                    </div>
                    <div className='builder-box__btn builder-icon builder-icon--wheel-three'>
                      <input
                        className='sr-only builder-box__input'
                        type='radio'
                        name='wheelSize'
                        id='wheelSize[lg]'
                      />
                      <label
                        className='builder-box__label'
                        htmlFor='wheelSize[lg]'
                      >
                        29ʼʼ
                      </label>
                    </div>
                  </div>
                </div>
                <div className='builder-box__height'>
                  <div className='builder-box__block'>
                    <h3 className='builder-box__title  builder-icon--human'>Який ваш зріст?</h3>
                    <input
                      className={`builder-box__input-height ${+value< 150||+value > 200||isNaN(+value)? 'incorrect' : ''}`}
                      type='number'
                      value={value}
                      onChange={handleInputChange}
                      onInput={handleInputChange}
                      onBlur={inputBlur}
                    />
                    <span className='builder-box__span'>см</span>
                  </div>
                  <div className='builder-box__block-range'>
                    <span className='builder-box__span'>150</span>
                    <input
                      className='builder-box__range'
                      type='range'
                      value={value}
                      onChange={handleRangeChange}
                      min={150}
                      max={200}
                      step={1}
                    />
                     <span className='builder-box__span'>200</span>
                  </div>
                </div>
                <Button classNames='builder-box__submit block-center'>
                  Підібрати
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikeBuilder;
