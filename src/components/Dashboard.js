import React from 'react'
import data from './employeesData';

class Dashboard extends React.Component{
    render(){

        return(
            <div>
               {
                   data.user.map((x,i)=>{
                       return(
                           <div key={i}>
                               <ul style={{border:"1px solid black"}}>
                                   <span>{x.id}</span><br></br>
                                   <span>{x.name}</span><br></br>
                                   <span>{x.age}</span><br></br>
                                   <span>{x.gender}</span><br></br>
                                   <span>{x.email}</span><br></br>
                                   <span>{x.phoneNo}</span><br/><br/>
                               </ul>
                               </div>
                       )
                   })
               }
            </div>
        )
    }
}
export default Dashboard;