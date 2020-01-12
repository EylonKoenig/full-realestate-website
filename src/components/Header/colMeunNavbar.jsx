import React from 'react';
class ColMeunNavbar extends React.Component{
    render() {

        const item = this.props;
        const arrray = this.props.menuContent;
        return (
            <div>
                <h3>{item.title}</h3>
                <ul id={'second-nav'}>
                    {arrray.map((value,index) => {
                        return (
                            <li key={index}><a href={value.herfLink}>{value.title}</a></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ColMeunNavbar;
