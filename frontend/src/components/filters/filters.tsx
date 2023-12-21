import ColorCheckbox from 'components/ui/colorCheckbox/color-checkbox';
import './_filters.scss';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const Filters = () => {
  const colorsArr = ['red', 'blue', 'green', 'yellow', 'crimson', 'gold', 'aqua'];
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [colorChecked, setColorChecked] = useState(false);

  const handleColorChange = (color:any) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updatedColors);
    console.log('SelectedColor: ', selectedColors);
    if(selectedColors.includes(color)) {
      setColorChecked(prev => !prev)
    }
    console.log('IS TRUE?  ', selectedColors.includes(color))
  };

  // const handleInputCheck = (color: any) => selectedColors.includes(color);
  
  return (
    <>
      <div className='filters'>
        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Категорія товару</legend>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='bikeCategory[mountain]'
              name='bikeCategory[mountain]'
              value='mountain'
            />
            <label htmlFor='bikeCategory[mountain]'>Гірський</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='bikeCategory[road]'
              name='bikeCategory[road]'
              value='road'
            />
            <label htmlFor='bikeCategory[road]'>Шосейний</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='bikeCategory[city]'
              name='bikeCategory[city]'
              value='city'
            />
            <label htmlFor='bikeCategory[city]'>Міський</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='bikeCategory[electric]'
              name='bikeCategory[electric]'
              value='electric'
            />
            <label htmlFor='bikeCategory[electric]'>Електро</label>
          </div>
        </fieldset>

        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Акції</legend>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='promotional[isPromo]'
              name='promotional[isPromo]'
              value='isPromo'
            />
            <label htmlFor='promotional[isPromo]'>З акцією</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='promotional[noPromo]'
              name='promotional[noPromo]'
              value='noPromo'
            />
            <label htmlFor='promotional[noPromo]'>Без акції</label>
          </div>
        </fieldset>

        <fieldset className='filter-group'>
          <legend className='filter-group__title'>Ціна</legend>

          <div className='range-slider'>
            <div className='range-slider__fields'>
              <input type='text' />
              <input type='text' />
            </div>
            <Slider range />
          </div>
        </fieldset>

        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Матеріал</legend>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='matherial[aluminium]'
              name='matherial[aluminium]'
              value='aluminium'
            />
            <label htmlFor='matherial[aluminium]'>Алюміній</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='matherial[carbon]'
              name='matherial[carbon]'
              value='carbon'
            />
            <label htmlFor='matherial[carbon]'>Карбон</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='matherial[titanium]'
              name='matherial[titanium]'
              value='titanium'
            />
            <label htmlFor='matherial[titanium]'>Титан</label>
          </div>
        </fieldset>

        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Розмір колес</legend>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='wheelSize[26]'
              name='wheelSize[26]'
              value='26'
            />
            <label htmlFor='wheelSize[26]'>26 ’’</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='wheelSize[28]'
              name='wheelSize[28]'
              value='28'
            />
            <label htmlFor='wheelSize[28]'>28 ’’</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='wheelSize[29]'
              name='wheelSize[29]'
              value='29'
            />
            <label htmlFor='wheelSize[29]'>29 ’’</label>
          </div>
        </fieldset>

        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Розмір колес</legend>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='wheelSize[26]'
              name='wheelSize[26]'
              value='26'
            />
            <label htmlFor='wheelSize[26]'>26 ’’</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='wheelSize[28]'
              name='wheelSize[28]'
              value='28'
            />
            <label htmlFor='wheelSize[28]'>28 ’’</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='wheelSize[29]'
              name='wheelSize[29]'
              value='29'
            />
            <label htmlFor='wheelSize[29]'>29 ’’</label>
          </div>
        </fieldset>
        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Колір</legend>
          <div className="flex wrap">
          {colorsArr.map((color) => (
            <ColorCheckbox
              key={color}
              color={color}
              isChecked={colorChecked}
              onChange={() => handleColorChange(color)}
            />
          ))}
          </div>
        </fieldset>
        <fieldset className='filter-group'>
          <legend className='filters-group__title'>Тип рами</legend>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='frameType[open]'
              name='frameType[open]'
              value='open'
            />
            <label htmlFor='frameType[open]'>Відкрита</label>
          </div>
          <div className='filter-group__check'>
            <input
              type='checkbox'
              className='filter-input'
              id='frameType[closed]'
              name='frameType[closed]'
              value='closed'
            />
            <label htmlFor='frameType[closed]'>Закрита</label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Filters;
