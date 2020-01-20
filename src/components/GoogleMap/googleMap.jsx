import React from 'react';
class Header extends React.Component{
    render() {

        return (
            <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "200px", width:"50%"}}>
                <iframe title={'googleMaps'} src={`https://maps.google.com/maps?q=${(this.props.address).replace(/\s/g, '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                        frameBorder="0"
                        style={{border:"0"}} allowFullScreen>
                </iframe>
            </div>
        )
    }
}


export default Header;