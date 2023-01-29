import { BackDropAlert, Box, Btn, BtnOK } from './Alert.styled';

export const Alert = ({ textInfo, textQuestion, onClose }) => {
  return (
    <BackDropAlert>
      <Box>
        <h2>Доброго вечора! Ми з України!</h2>
        <p>
          <b>{textInfo}</b>
        </p>
        <p>{textQuestion}</p>
        <div>
          <BtnOK to="/login" onClick={onClose}>
            OK
          </BtnOK>
          <Btn onClick={onClose}>Cancel</Btn>
        </div>
      </Box>
    </BackDropAlert>
  );
};
