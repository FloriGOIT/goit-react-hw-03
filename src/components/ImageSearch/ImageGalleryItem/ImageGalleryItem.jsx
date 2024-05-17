import css from "../ImageSearch.module.css"

export default function ImageGalleryItem({itemsHits})
{
  return (<>
           {itemsHits !== null && itemsHits.map( (elem) => <li className={css.galleryItem} key={elem.id}>
                                                              <img src={elem.webformatURL} alt={elem.tags}/>
                                                           </li> )}

          </>)
}

