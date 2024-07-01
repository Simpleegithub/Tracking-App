import ImageComponent from "./ImageComponent"
import Summary from "./Summary";
import  '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <Summary/>
            <ImageComponent/>
        </div>
    )
}

export default Header
