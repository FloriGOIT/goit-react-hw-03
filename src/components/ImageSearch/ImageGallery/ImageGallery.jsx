import css from "../ImageSearch.module.css";
import PropTypes from "prop-types"



export function ImageGallery ({children})
{
  return (<ul className={css.listComponent}>{children}</ul>)
}
        
ImageGallery.propTypes = {children: PropTypes.node}