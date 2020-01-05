import React from 'react';
import ColMeunNavbar from "./colMeunNavbar";
class SeconderyMenu extends React.Component{
    render() {
        const {item} = this.props;
        if ( this.props.value.mainTitle !== 'My Home'){
        return (
            <div  className={'insidenav'}>
                {item.map((item,i) => {
                    return (
                        <ColMeunNavbar {...item} key = {i}/>
                    )
                })}
            </div>
        ) } return null;
    }
}

export default SeconderyMenu;