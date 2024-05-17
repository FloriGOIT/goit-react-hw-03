componentDidMount()
   {
      let sitePartial = `https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal&q=`; 
   }

    
<ImageGallery items={this.state.itemsHits} />


export function ImageGallery ({children})
{   
    return (<ul className={css.listComponent}>
              {children}
            </ul>)        
} 



export function ImageGalleryItem({items}) {
    
    return (
      <> 
        {items.map((item) => <li className={css.galleryItem} key="66666">
                                    <img alt={item.tags} src={item.webformatURL} />
                             </li>)}
      </>
    );
  }


  export function ImageGallery({items}) {
 
  return (
    <ul className={css.listComponent}>
      {items !== null && items.map((item) => <li className={css.galleryItem} key={item.id}>
                                    <img alt={item.tags} src={item.webformatURL} />
                             </li>)}
    </ul>
  );
}

export default ImageGallery;
