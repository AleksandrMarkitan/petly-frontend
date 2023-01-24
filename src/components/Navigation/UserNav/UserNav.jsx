import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import {
  AccountBtn,
  BtnAvatar,
  DivInfo,
  DivAvatar,
  UserCircle,
  UserCircleAvatar,
  Email,
} from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  const user = useSelector(selectUser);
  const { name, email, avatarURL } = user;

  return (
    <>
      {/* <AccountBtn to="/user" onClick={onClose}>
        <UserCircle />
        Account
      </AccountBtn> */}
      <BtnAvatar to="/user" onClick={onClose}>
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
      </BtnAvatar>
    </>
  );
};
