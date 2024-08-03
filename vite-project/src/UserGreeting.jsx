import PropTypes from 'prop-types';


UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string

  }

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
  }
function UserGreeting(props) {

    const welcomeMessage =<h2 className='welcome-message'>
                            Welcome{props.username}
                         </h2>

    const loginMessage = <h2 className='login-message'>
                            Please login{props.username}
                         </h2>
    return (
        <div className="UserGreeting">
            {props.isLoggedIn ? welcomeMessage : loginMessage}
        </div>
    );





}
    

export default UserGreeting;