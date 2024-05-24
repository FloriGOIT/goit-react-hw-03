import css from "./Filter.module.css";
import PropTypes from "prop-types"



export function Filter({valueFilter})
{ const handleFilterInput = (e) => {let inputFilter = e.target.value;
                                    valueFilter(inputFilter)}

  return (<div className={css.filterWrapper}>
                      <label htmlFor="filterId">Find contacts by name:</label><br/>
                      <input type="text" id="filterId" onChange={handleFilterInput}/>
                   </div>)} 

Filter.propTypes = {valueFilter: PropTypes.func}