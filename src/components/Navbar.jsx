import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-red-900 text-white">
      <div className="containerWrap flex justify-between">
        <a className="font=bold btn btn-ghost normal-case text-xl font-bold">BSIT ChatRoom</a>
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  )
}

export default Navbar