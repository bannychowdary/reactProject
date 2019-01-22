import React from 'react';
import FriendCard from './friendcard';
import axios from 'axios';

class FriendComponent extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
            friendState:[]
        }
    }

    componentWillMount(){
        this.getRemoteData()
    }
    getRemoteData(){
        axios.get("http://localhost:1234/all").then((response)=>{
            console.log(response.data)
            console.log("Before")
            console.log(this.state.friendState)
            this.setState(
                {
                    friendState:response.data
                }
            )

        }
        
        )
    }


    displayFriendCard(){

        return this.state.friendState.map((onefriend)=>{
            return(
                <FriendCard 
                title={onefriend.title} desc={onefriend.description} link={onefriend.link}  picture={onefriend.image} >
                </FriendCard>
            )
        })
       }

    render() {
        return (
            <div>
                <div class="row">
                    {this.displayFriendCard()}
                </div> 


                




            </div>
        );
    }
}

export default FriendComponent;