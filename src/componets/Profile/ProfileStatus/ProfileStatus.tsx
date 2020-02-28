import React, {ChangeEvent, Component} from 'react';
import s from '.././Profile.module.css';

type PropsType ={
    status:string
    updateStatus:(newStatus:string)=>void
}
type StateType ={
    editMode:boolean
    status:string
}

class ProfileStatus extends React.Component<PropsType,StateType>{

    state = {
        editMode: false,
        status: this.props.status
     };




    activateEditMode=()=>{
      this.setState({
          editMode:true
      });

    };

   deactivateEditMode=()=>{
        this.setState({
            editMode:false,
        });
        this.props.updateStatus(this.state.status);
   };

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status : e.currentTarget.value
        })
        //this.props.updateStatus(this.state.status);

    };

    componentDidUpdate(prevProps:PropsType, prevState:StateType, snapshot:any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    // render(props:PropsType) {
    //     let val = this.state.status;
    //     return (
    //         <div>
    //             {!this.state.editMode &&
    //                 <div>
    //                     <span onDoubleClick={this.activateEditMode} >{this.props.status || "---------"}</span>
    //                 </div>
    //             }
    //             {this.state.editMode &&
    //                 <div>
    //                     <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={val}/>
    //                 </div>
    //             }
    //         </div>
    //     );
    // }
}

export default ProfileStatus;