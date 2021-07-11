import React from 'react';
import classes from '../css/ProductPreview.css';

const ProductPreview = (props) => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = ["ProductImage"]
        if (pos === props.currentPreviewImagePos) {
            classArr.push("SelectedProductImage");
        }
        return (
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
        );
    })

    return (
        <div>
            <div className="ProductPreview">
                <img src={props.currentPreviewImage} alt="Product Preview" />
                <img src="img/veg.png" alt=".." style={{ 'height': '15px', 'width': '15px', 'float': 'left' }} />
                <div className="ProductsData">
                    <h3 className="SectionHeading">Select Color</h3>
                    <div>
                        {colorOptions}
                    </div>
                </div>

                {
                    props.currentSelectedFeature === 1 ?
                        <div className="HeartBeatSection">
                            <i className="fas fa-heartbeat"></i>
                            <p>78</p>
                        </div>
                        :

                        <div className="TimeSection">
                            <p>{`${currentHours}:${currentMinutes}`}</p>
                        </div>
                }

            </div>
        </div>
    );
}

export default ProductPreview;