import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { AccountBtn, UserCircle } from './UserNav.styled';

export const UserNav = ({ onClose }) => {
  const user = useSelector(selectUser);
  const { name, avatarURL } = user;

  return (
    <>
      <AccountBtn to="/user" onClick={onClose}>
        <div>
          {avatarURL ? <img src={avatarURL} alt="Account" /> : <UserCircle />}
        </div>
        {name ? name : 'Account'}
      </AccountBtn>
    </>
  );
};
