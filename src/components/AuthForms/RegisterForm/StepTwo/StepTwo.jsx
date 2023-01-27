import AsyncSelect from 'react-select/async';
import { Input, Label } from '../../Forms.styled';
import cities from '../../../../data/cities.json';

import { FormError } from '../../LoginForm/LoginForm';

export const StepTwo = ({ setFieldValue, values }) => {
  // console.log('test', AsyncSelect);
  // handleChange,setFieldValue
  const handleChange = ({ label }) => {
    console.log('info', label);
    // const { value, name } = evt.target;
    setFieldValue('city', label);
    console.log('values', values);
  };
  // console.log('props', props);
  const testCity = cities.map(({ city, admin_name }, idx) => ({
    value: idx,
    label: `${city}, ${admin_name}`,
  }));
  const filterCities = inputValue => {
    return testCity
      .filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
      .slice(0, 30);
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterCities(inputValue));
    }, 500);
  };

  return (
    <>
      <Label>
        <Input name="name" placeholder="Name" required />
        <FormError name="name" />
      </Label>
      <Label>
        {/* <Input name="city" type="text" placeholder="City, region" required /> */}
        <AsyncSelect
          name="city"
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={handleChange}
          // value={props.values.city}
        />
        {/* {touched.city && errors.city && <div>{errors.city}</div>} */}
        {/* <FormError name="city" /> */}
      </Label>
      <Label>
        <Input name="phone" placeholder="Mobile phone" required />
        <FormError name="phone" />
      </Label>
    </>
  );
};
