import { Box, Btn } from './Alert.styled';

export const Alert = () => {
  return (
    <Box>
      <h2>Доброго вечора! Ми з України!</h2>
      <p>Вам потрібно авторизуватися!</p>
      <p>Перейти на сторінку авторизації?</p>
      <div>
        <Btn>Відміна</Btn>
        <Btn>Згоден</Btn>
      </div>
    </Box>
  );
};
