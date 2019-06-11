import React from 'react';
import './SideDrawer.css';
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Media</a></li>
                <li><a href="/">Merch</a></li>
                <li><a href="/">Tour Dates</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}
export default sideDrawer;