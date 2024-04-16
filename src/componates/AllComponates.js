import AddPost from "./AddPost";
import Posts from "./Posts";
import SectionLeft from "./SectionLeft";

export default function AllComd() {
    return(
        
            <div className='container' >
                <div style={{display: "-webkit-box"}}>
                    <SectionLeft/>
                    <div  className='d-flex flex-column' style={{marginLeft:35}}>
                        <AddPost/>
                        <Posts flex="center"/>  
                    </div>
                </div>
            </div>
        
    )
}