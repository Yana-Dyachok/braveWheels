import { useState } from 'react';
import Select from 'react-select';

import './_sorting.scss';

const Sorting = ({ options }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='sorting'>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className='select'
        classNamePrefix='select'
        placeholder='Сортувати за'
      />
    </div>
  );
};

export default Sorting;
