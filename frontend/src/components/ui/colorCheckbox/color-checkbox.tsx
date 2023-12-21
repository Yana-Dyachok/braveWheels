import './_colorCheckbox.scss';

type ColorCheckboxTypes = {
  color: string;
  isChecked: boolean;
  onChange: () => void;
};

const ColorCheckbox = ({ color, isChecked, onChange }: ColorCheckboxTypes) => {

  console.log('isCHECKED', isChecked)
  return (
    <div className='color-checkbox' >
      <input
        className='sr-only color-checkbox__input'
        type='checkbox'
        checked={isChecked}
        onChange={onChange}
        name={'colorName[' + color + ']'}
        id={'colorName[' + color + ']'}
        value={color}
      />
      <label
        className='color-checkbox__label'
        style={{ backgroundColor: color }}
        htmlFor={'colorName[' + color + ']'}
        aria-label={'Обрати колір ' + color}
      ></label>
    </div>
  );
};

export default ColorCheckbox;
