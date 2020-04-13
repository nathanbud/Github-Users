import React from 'react'


function Card(props) {
        const profile = props;
       
            return(
                <>
                    <div>
                        <img src={profile.avatar_url}/>
                    </div>
                    <div>
                        <h6>Name:{profile.id}</h6>
                        <h6>Name:{profile.name}</h6>
                        <h6>Info:</h6>
                        <p></p>
                    </div>
                </>
              ) 
        }
        
      

  


export default Card