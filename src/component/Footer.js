import react from "react";

export default function Footer() {

    var date = new Date();
    var year = date.getFullYear();
    return(<div className="footer">
   <p> copyright ⓒ {year} </p>
    </div>)
}