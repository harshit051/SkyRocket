import react from "react";
import Header from "../component/Header";
import LogoutHooks from "../component/LogoutHook";

 export default function WelcomePage() {
     return(<div>
         <Header/>
         <h1>WelcomePage</h1>
         <LogoutHooks/>
     </div>);
 }