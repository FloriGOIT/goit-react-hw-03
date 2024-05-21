import css from "../ImageSearch.module.css"

export default function ImageGalleryItem({itemsHits, openLargeImage})
{
  return (<>
           {itemsHits !== null && itemsHits.map( (elem) => <li className={css.galleryItem} key={elem.id} onClick = {() => openLargeImage(elem.largeImageURL)}>
                                                              <img src={elem.webformatURL} alt={elem.tags}/>
                                                           </li> )}

          </>)
}

