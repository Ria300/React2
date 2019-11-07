import React ,{Component} from 'react'
class Usergreeting extends Component
{ constructor(props){
    super(props)
this.state={
    isLoggedin:true
}
}
render ()
{        
    //3 ternary
    return(
        this.state.isLoggedin ?(
        <div>WELCOME RIA</div>
        ) : (
        <div>WELCOME GUEST</div>
        )
    )
    //2.
 //   let message
   // if(this.state.isLoggedin){
     //   message=<div>Welcome RIA!!</div>
    //}
      //  else{
        {/*    message=<div>
                Welcome Guest!!!!
            </div>
        }
        return <div>{message}</div>
    }*/}
         //  1.     if(this.state.isLoggedin){
           //     return <div>Hello RIA!!</div>
             //   }
               // else{
                //return <div>Hello Guest!!</div>
                //}
}
}

export default Usergreeting;