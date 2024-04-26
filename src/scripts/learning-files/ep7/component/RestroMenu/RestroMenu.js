import { useState } from "react";
import MenuContainer from "./MenuContainer";

export default MenuPage = ({ _menuObject }) => {
    const [showIndex, setShowIndex] = useState(null);
    return <div>
        {
            _menuObject.map((menuSection, index) => {
                return <MenuContainer section={menuSection} showItems={index === showIndex && true} key={index} setIndex={() => setShowIndex(index === showIndex ? null : index)} />
            })
        }
    </div>
}

