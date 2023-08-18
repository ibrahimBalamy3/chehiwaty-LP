import { useState } from "react"
import Container from "../../components/container/Container"
import List from "../../components/list/List";
import "./Header.css"

export const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const listTitles = ["home", "menu", "about us", "reservations", "contact us"]

    const listItems = listTitles.map((listTitle, index) => <List key={index} title={listTitle} />)

    const handleClick= ()=> setIsActive(prevState => !prevState);
    
  return (
    <header className="header">
        <Container>
            <h1>
                <a href="#home">chehiwaty</a>
            </h1>
            <nav>
                <ul className={`${isActive ? "active" :""}`}>{listItems}</ul>
                <div className={`icon-container ${isActive ? "active" :""}`} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </Container>
    </header>
  )
}

export default Header
