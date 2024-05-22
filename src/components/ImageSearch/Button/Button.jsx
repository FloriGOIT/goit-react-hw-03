import css from "../ImageSearch.module.css"
import PropTypes from "prop-types"

export function Button ({ addNewItems})
{
    return  (<div className={css.loadMoreButtonWrapper}>
               <button className={css.loadMoreButton} type="button" onClick={addNewItems}>
                   Load more
               </button>
            </div>)
}

Button.propTypes = {addNewItems: PropTypes.func}