import { NavLink } from "react-router";
import DropDownProfile from "./DropDownProfile";
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux";
export default function Header() {
    const {user}  = useSelector((state) => state.userSlice);
  
    return (
        <div className="bg-gray-200 px-5 py-2 flex items-center justify-between">
            <h1 className="text-xl font-bold">BuyZon</h1>

        {user ? <DropDownProfile user={user} /> : <div className="space-x-5 " >
                <NavLink to={'/login'}>
                    <Button variant="link" >Login</Button>
                </NavLink>
                
                <NavLink to={'/register'} >
                    <Button>Register</Button>
                </NavLink>
            </div>
      }
      </div>
    )
}
