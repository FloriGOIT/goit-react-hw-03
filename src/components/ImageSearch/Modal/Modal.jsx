import css from "../ImageSearch.module.css"
import PropTypes from "prop-types"

export function Modal ({largeImage, closeImg})

{  
    function handelCloseImg(e){let tagName =  e.target.tagName; closeImg(tagName)}

    return (<div className={css.largeImageWrapper} onClick={handelCloseImg}>
                <img src={largeImage} alt="selectedPhoto"/>
            </div>)
}

Modal.propTypes = {largeImage: PropTypes.string, closeImg: PropTypes.func}