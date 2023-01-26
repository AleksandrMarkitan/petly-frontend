import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import {
  AccountBtn,
  UserCircle,
  // BtnAvatar,
  // DivInfo,
  // Email,
} from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  const user = useSelector(selectUser);
  const { name, avatarURL } = user;

  return (
    <>
      {/* -----Стандартна кнопка з макету----- */}

      <AccountBtn to="/user" onClick={onClose}>
        <div>
          {avatarURL ? <img src={avatarURL} alt="Account" /> : <UserCircle />}
        </div>
        {name ? name : 'Account'}
      </AccountBtn>

      {/* ------------Нова кнопка------------- */}

      {/* <BtnAvatar to="/user" onClick={onClose}>
        <DivAvatar>
          {!avatarURL && <UserCircleAvatar />}
          {avatarURL && <img src={avatarURL} alt="Account" />}
        </DivAvatar>
        <span>
          <DivInfo>
            <p>{name}</p>
            <Email>{email}</Email>
          </DivInfo>
        </span>
      </BtnAvatar> */}
    </>
  );
};
