import React from 'react';
import ImageForm from '../imageForm';


class UploadImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image:[1,2,3,4,5],
            images:[],
    }
}
    componentDidMount() {

        if (this.state.images) {
            this.setState({ images: this.props.images })
        }
    }

    handleSubmit = e => {
        e.preventDefault();

    }


    render() {
        return (
            <div className={'container-fluid images-cover'}>
                <div className={"row "} onClick={this.props.handleChildClick()}>
                    <div className="col-md-5 mx-auto">
                        <div id={'image-form'} className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Upload Images</h1>
                                </div>
                            </div>
                                {this.state.image.map((image, index) => {
                                    return (
                                        <ImageForm key={index} imageChange={this.props.imageChange} index={index + 2} imageUrl={this.props.images[index]}/>
                                    )})}
                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn tx-tfm" onClick={this.props.handleShow}>DONE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UploadImages;
