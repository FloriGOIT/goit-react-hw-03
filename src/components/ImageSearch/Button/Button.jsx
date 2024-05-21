import css from "../ImageSearch.module.css"


export function Button ({numberItems, addNewItems})
{
    return  (<div className={css.loadMoreButtonWrapper}>
               <button className={css.loadMoreButton} type="button" onClick={addNewItems}>
                   Load more
               </button>
            </div>)
}