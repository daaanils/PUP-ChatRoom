import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="m-7 flex items-center justify-center">
            <img className="w-40 h-40" src="./src/components/PUPLogo.png" alt="" />
          </div>
          <h1 className="text-white text-5xl font-bold">Hello BSIT 3-4! 👋🏻</h1>
          <p className="py-6">
          Join the conversation, meet your classmates, and make connections in one shared room.
          </p>
          <button onClick={handleLogin} className="bg-red-950 btn">Login With Google</button>
        </div>
      </div> 
    </div>
  );
};

export default Login;
