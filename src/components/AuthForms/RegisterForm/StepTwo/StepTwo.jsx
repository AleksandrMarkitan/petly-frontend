import AsyncSelect from 'react-select/async';
import { Input, Label } from '../../Forms.styled';
import cities from '../../../../data/cities.json';

import { FormError } from '../../LoginForm/LoginForm';

export const StepTwo = ({
  setFieldTouched,
  setFieldError,
  setFieldValue,
  values: { city },
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
  const valueCity = listCity.find(({ label }) => label === city);

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
                borderWidth: state.isFocused ? '1px' : '1px',
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
                primary25: 'rgba(245, 146, 86, 0.5)', // фон ховера опций
                primary: '#f59256',
                neutral0: '#fdf7f2', // фон списка опций
                neutral80: '#111111',
                neutral50: 'rgba(17, 17, 17, 0.6)', // текст плейсхолдера

                neutral20: 'rgba(245, 146, 86, 0.5)', // стрелочка
                neutral40: '#f59256',

                neutral30: '#f59256', // hover
                neutral60: '#c28813', // active стрелочки
                neutral70: '#fffb1b',
                neutral5: '#283eff',
                neutral10: '#ff28a5',
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
        <Input name="phone" placeholder="Mobile phone" maxLength="13" />
        <FormError name="phone" />
      </Label>
    </>
  );
};
