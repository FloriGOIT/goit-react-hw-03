import css from "../ImageSearch.module.css"
import { Blocks } from "react-loader-spinner"

export function Loader ()
{return (<div className={css.loaderWrapper}>  
            <Blocks height="300"  width="300"  color="#4fa94d"
               ariaLabel="blocks-loading"  wrapperStyle={{}}
               wrapperClass="blocks-wrapper" visible={true}  className={css.loader}/>
         </div>)
        
}