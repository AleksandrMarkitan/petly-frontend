import { Text } from "./Notification.styled";
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <Text>{message}</Text>
}

Notification.propTypes = {
  message: PropTypes.string,
}
