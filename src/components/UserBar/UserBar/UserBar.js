import React from 'react';
import './UserBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserBarTopItems } from '../UserBarItems/UserBarItems';
import { UserBarMiddleItems } from '../UserBarItems/UserBarItems';
import { UserBarBottomItems } from '../UserBarItems/UserBarItems';
class UserBar extends React.Component {
    render() {
        return <div className="user">
            <nav>
                <ul className="userbar--topitems">
                    {UserBarTopItems.map((item, index) => {
                        return (
                            <a href={item.path}> <li id={item.id} key={item.id} className={item.cName}>
                                <FontAwesomeIcon icon={item.icon} fixedWidth /><a href={item.path}><h6>{item.title}</h6></a>
                            </li></a>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--middleitems">
                    {UserBarMiddleItems.map((item, index) => {
                        return (
                            <a href={`${item.path}`}><li key={index} className="item.cName">
                                <a href={item.path}><h6>{item.title}</h6></a>
                            </li></a>
                        )
                    })}
                </ul>
                <br />
                <ul className="userbar--bottomitems">
                    {UserBarBottomItems.map((item, index) => {
                        return (
                            <a href={item.path}><li id={item.id} key={item.id} className="item.cName">
                                <a href={item.path}><h6>{item.title}</h6></a>
                            </li></a>
                        )
                    })}
                </ul>
            </nav >
        </div >
    }
}

export default UserBar;