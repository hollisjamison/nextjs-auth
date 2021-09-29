const LoginLogout = ({ login, logout, user }) => {
  return (
    <>
      {!user && <li className="btn" onClick={login}>Login/Signup</li>}
      {user && <li>{user.email}</li>}
      {user && <li className="btn" onClick={logout}>Logout</li>}
    </>
    
  )
}

export default LoginLogout;