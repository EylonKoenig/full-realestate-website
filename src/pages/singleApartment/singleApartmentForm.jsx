import React from 'react';

class ApartmentFrom extends React.Component {
    handleClick(e){
        console.log("sdadsadsa")
        e.stopPropagation();
        e.preventDefault();
        alert('this functionality is not available right now. please try again later.')
    }
    render() {
        console.log(this.props)
        const apartment = this.props.apartment
        return (
            <form>
                <div>More about this property</div>
                <div className="form-group apartment-input">
                    <i className="form-icon fas fa-user-edit"></i>
                    {/*<i className="fas fa-times"></i>*/}
                    <input className="form-control fullName" placeholder="Your Name" title="Your Name"
                           id="primary_lead_name" type="text" name="leads_form_data[name]"
                           autoComplete="name"/>
                </div>
                <div className="form-group apartment-input">
                    <i className="form-icon fas fa-envelope"></i>
                    <input className="form-control email" placeholder="Email" title="Email"
                           id="primary_lead_email" type="email" name="leads_form_data[email]"
                           autoComplete="email"/>
                </div>
                <div className="form-group apartment-input">
                    <i className="form-icon fas fa-phone-alt"></i>
                    <input className="form-control phone" placeholder="Phone" title="Phone"
                           id="primary_lead_phone" type="tel" name="leads_form_data[phone]"
                           autoComplete="tel-national"/>
                </div>
                <div className="form-group apartment-input">
                                    <textarea readOnly
                                    className="form-control message" rows="2" cols="10"
                                              id="primary_lead_message"
                                              style={{paddingLeft:'7px', fontSize:'13px'}}
                                              value={`I'm interested in ${apartment.address}.`}
                                              aria-label="primary-lead-message" name="leads_form_data[message]"/>
                </div>
                <div className={'bottom-from'}>
                    <button  name="commit"
                            className="submit btn btn-block btn-primary"
                            id="primary_lead_submit " onClick={this.handleClick}>
                        <div className="icon-email-container" onClick={this.handleClick}>
                            <span className="email-icon"></span>
                            <span className="" onClick={this.handleClick}>Email Agent</span>
                        </div>
                    </button>
                </div>
            </form>
        )
    }
}

export default ApartmentFrom;


