import React from 'react';
import SeconderyMenu from "./SeconderyMenu";

class MainLine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeMenu:null,
            isOpen:false
        }
    };
    changeActiveMenu = (index,activeMenu) => {
        this.setState({
            activeMenu: activeMenu === index ? -1 : index,
            isOpen:true,
        })
    };

    handelOpen = () => {
        this.setState({isOpen:!this.state.isOpen})
    };
    render() {
        const {activeMenu} = this.state;
        const item = this.props;
        const ButtonTitle = item.mainTitle;
        let index = this.props.index;
        return (
            <li className={'nav-item'}>
                <a id={'text'} href="/" onMouseOver={() => this.changeActiveMenu(index,activeMenu)}
                   onMouseLeave={() => this.changeActiveMenu(-1,activeMenu)}>
                    {ButtonTitle}
                </a>
                <SeconderyMenu item={item.menuContent} value={item} index={index} handelOpen={this.handelOpen} />

            </li>
        )
    }
}

export default MainLine;