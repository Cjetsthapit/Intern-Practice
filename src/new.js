import React from  'react';
import N from './n';
// class New extends React.Component{
//     render(props){
//         return(
//             <div>
//                 {this.props.value}
//             </div>

//         )
//     }
// }
const New =(props)=>{
    return(
        <div>
            <N v={props.value} />
        </div>
    )
}
// function New(){
//     return(
//         <div>
//             Hello 
//         </div>
//     )
// }
export default New;
