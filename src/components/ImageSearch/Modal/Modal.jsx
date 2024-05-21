import css from "../ImageSearch.module.css"

export function Modal ({largeImage, closeImg})

{  
    function handelCloseImg(e){let tagName =  e.target.tagName; closeImg(tagName)}

    return (<div className={css.largeImageWrapper} onClick={handelCloseImg}>
                <img src={largeImage} alt="selectedPhoto"/>
            </div>)
}