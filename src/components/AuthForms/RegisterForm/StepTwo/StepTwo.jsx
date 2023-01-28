import AsyncSelect from 'react-select/async';
import { Input, Label } from '../../Forms.styled';
import cities from '../../../../data/cities.json';

import { FormError } from '../../LoginForm/LoginForm';

export const StepTwo = ({
  setFieldTouched,
  setFieldError,
  setFieldValue,
  values,
}) => {
  const NAME_INPUT_CITY = 'city';

  const handleChange = evt => {
    setFieldTouched(NAME_INPUT_CITY);

    setFieldError(NAME_INPUT_CITY, true);

    setFieldValue(NAME_INPUT_CITY, evt.label);
  };

  const listCity = cities.map(({ city, admin_name }, idx) => ({
    value: idx,
    label: `${city}, ${admin_name}`,
  }));

  const filterCities = inputValue => {
    return listCity
      .filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
      .slice(0, 30);
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterCities(inputValue));
    }, 300);
  };
  const valueCity = listCity.find(({ label }) => label === values.city);

  const noOptionsMessage = () => 'Sorry, your city was not found';

  return (
    <>
      <Label>
        <Input name="name" placeholder="Name" />
        <FormError name="name" />
      </Label>
      <Label>
        <AsyncSelect
          styles={{
            control: (baseStyles, state) => {
              return {
                ...baseStyles,
                borderRadius: '40px',
                backgroundColor: '#fdf7f2',
                padding: '8px 10px 8px 24px',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '25px',
                letterSpacing: '0.04em',
                fontFamily: 'Manrope',

                // borderWidth: '1px',
                borderWidth: state.isFocused ? '1px' : '1px',

                // color: '#111111',
                outline: 'none',
                borderColor: state.isFocused
                  ? '#f59256'
                  : 'rgba(245, 146, 86, 0.5)',
              };
            },
          }}
          theme={theme => {
            return {
              ...theme,
              // borderRadius: '20px',
              // borderRadius: '40px',

              colors: {
                ...theme.colors,
                primary25: 'rgba(245, 146, 86, 0.5)',
                primary: '#f59256',
                neutral0: '#fdf7f2',
                neutral80: '#111111',
                neutral50: 'rgba(17, 17, 17, 0.6)', // текст плейсхолдера

                neutral20: 'rgba(245, 146, 86, 0.5)', // стрелочка
                // neutral20: 'rgba(56, 255, 156, 0.849)',

                neutral40: '#f59256',

                neutral30: '#f59256', // hover

                neutral60: '#c28813', // active стрелочки
                neutral70: '#fffb1b',

                // neutral90: '#ff2828',

                // primary50: '#ff2828',
                // primary25: '#ff2828',
                // neutral0: '#ff2828',
                // neutral5: '#ff2828',
                // neutral10: '#ff2828',

                // neutral90: '#ff2828',
                // neutral90: '#ff2828',
                // neutral90: '#ff2828',
                // neutral90: '#ff2828',
                // neutral90: '#ff2828',

                // neutral80: 'rgba(17, 17, 17, 0.6)',
              },
            };
          }}
          name={NAME_INPUT_CITY}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={handleChange}
          // isClearable
          value={valueCity}
          noOptionsMessage={noOptionsMessage}
          placeholder="Choose your city"
          // unstyled={true}
        />
        <FormError name={NAME_INPUT_CITY} />
      </Label>
      <Label>
        <Input name="phone" placeholder="Mobile phone" />
        <FormError name="phone" />
      </Label>
    </>
  );
};
