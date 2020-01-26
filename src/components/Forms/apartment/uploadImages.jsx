import React from 'react';
import ImageForm from '../imageForm';

import api from '../../../server-api/api'

class UploadImages extends React.Component {
    constructor(props) {
        super(props);
        const limitImages = 5
        this.state = {
            image: Array(limitImages).fill(null),
            images: [],
            imagesId: [],
        }
    }
    async componentDidMount() {
        if (this.state.images) {
            this.setState({ images: this.props.images })
        }
        if (this.props.type === 'edit') {
            const data = await api.getImagesById(this.props.apartmentId);
            this.setState({ imagesId: data.data })
        }
    }

    handleSubmit = e => {
        e.preventDefault();

    }


    render() {
        return (
            <div className={'container-fluid images-cover'} onClick={this.props.handleShow}>
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
                                    <ImageForm key={index}
                                        imageChange={this.props.imageChange}
                                        Wtype={this.props.type}
                                        index={index + 2}
                                        imageUrl={this.props.images[index]}
                                        imageId={this.state.imagesId[index]} />
                                )
                            })}
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
