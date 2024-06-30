import ImageComponent from "./ImageComponent"
import Summary from "./Summary"

function Header() {
    return (
        <div className="header">
            <Summary/>
            <ImageComponent/>
        </div>
    )
}

export default Header
