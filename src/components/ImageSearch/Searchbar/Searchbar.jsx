import css from "../ImageSearch.module.css"

export function Searchbar ({searchInput, searcItem})
{ let sitePartial = `https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal&&per_page=12&page=1&q=`; 
   
  const handleSearchInput = (e) => {let input = e.target.value;
                                    searchInput(input)};

  const handleSubmitInput = (e) => {e.preventDefault();
                                    let input = e.currentTarget.elements.input.value;
                                    let siteFull = sitePartial + input;
                                    searcItem(siteFull);}
                                    
  return (
  <header className={css.searchbarWrapper}>
    <form onSubmit={handleSubmitInput}>
      <button type="submit">🔍</button>
      <input  type="text"
              name="input"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos" onChange={handleSearchInput}/>
    </form>
  </header>
)}