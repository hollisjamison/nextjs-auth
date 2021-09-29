const LoginLogout = ({ login, logout, user }) => {
  if (user !== null) {
    return (
      <li className="btn" onClick={logout}>Logout</li>
    )
  }

  return (
    <li className="btn" onClick={login}>Login/Signup</li>
  );
}

export default LoginLogout;