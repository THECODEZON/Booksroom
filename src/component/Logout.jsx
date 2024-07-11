import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const[authUser,setAuthUser]=useAuth ();
  const handleLogOut=()=>{
    try{
setAuthUser({
  ...authUser,
  user:null
})
localStorage.removeItem("Users");
toast.success("Logout successfully");

setTimeout(() => {
  window.location.reload();

}, 3000);

    }catch(error){
      toast.error("error: "+error);
      setTimeout(()=>{},3000);
    }
  };
  return (
    <div>
  <button
  className="text-zinc-700 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700"
onClick={handleLogOut}>
  Logout
</button>

    </div>
  )
}
export default Logout;