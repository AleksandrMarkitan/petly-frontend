import {
  MUST_AUTHORIZED,
  MUST_AUTHORIZED_QUESTION,
} from '../../../helpers/constants';
import { BackDropAlert, Box, Btn, BtnOK } from './Alert.styled';

export const Alert = ({ onClose }) => {
  return (
    <BackDropAlert>
      <Box>
        <h2>Доброго вечора! Ми з України!</h2>
        <p>
          <b>{MUST_AUTHORIZED}</b>
        </p>
        <p>{MUST_AUTHORIZED_QUESTION}</p>
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
