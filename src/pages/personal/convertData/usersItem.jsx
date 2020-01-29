import React from 'react';

class UesrDetails extends React.Component {

    render() {
        return (
            <tr>
                {Object.values(this.props.user).map(function (userDetalis, i) {
                return <td key={i} style={{width:i === 6 && '300px'}}>{userDetalis}</td>
                })}
            </tr>
        )
    }
}

export default UesrDetails;