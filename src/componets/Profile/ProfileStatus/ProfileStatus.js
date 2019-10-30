import React, {Component} from 'react';
import s from '.././Profile.module.css';



class ProfileStatus extends React.Component{

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
        console.log(this.state)
       this.props.updateStatus(this.state.status);
   };

    onStatusChange = (e) =>{
        this.state.status = " ";
        this.setState({
            status : e.currentTarget.value
        })

        this.props.updateStatus(this.state.status);
    };

    render(props) {
        let val = this.state.status;
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || "---------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={val}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;