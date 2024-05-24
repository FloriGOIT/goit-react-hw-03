import css from "../ImageSearch.module.css"
import PropTypes from "prop-types"

export default function ImageGalleryItem({itemsHits, openLargeImage, pageNumber})
{
  return (<>
           {itemsHits !== null && itemsHits.map( (elem) => <li className={css.galleryItem} key={elem.id} onClick = {() => openLargeImage(elem.largeImageURL)}>
                                                              <img src={elem.webformatURL} alt={elem.tags}/>
                                                           </li> )}

          </>)
}

ImageGalleryItem.propTypes = {itemsHits: PropTypes.array, openLargeImage:PropTypes.func}