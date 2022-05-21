
import React, { FC } from 'react';
import './headerStyles.css'
interface menuItemProps {
    text: string,
    onClick: (isCalendar: boolean | any) => void;
}
const MenuItem: FC<menuItemProps> = ({ text, onClick }) => {
    return <li className='menu-item' onClick={() => onClick(text.toLowerCase() === 'calendar')}>{text}</li>
}
type headerProps = {
    onClick: (isCalendar: boolean | any) => void;
}
const defaultProps = {
    onClick: undefined
}
const Header: FC<headerProps> = (props) => {
    var myMenu = ['Calendar', 'Input'];
    return (
        <div>
            <button className='hamburger'>m</button>
            <ul className='menu'>
                {myMenu.map(item => {
                    return <MenuItem key={item} text={item} onClick={props.onClick} />
                })}
            </ul>
        </div>
    );
}
Header.defaultProps = defaultProps;

export default Header;
