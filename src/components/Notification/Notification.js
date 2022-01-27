import { NotificationText } from './Notification.styled';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <NotificationText>{message}</NotificationText>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
