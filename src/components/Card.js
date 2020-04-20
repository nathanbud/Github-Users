import React from 'react'


function Card(props) {
        const profile = props;
       
            return(
                <div key={profile.id}>
                    <div>
                        <img src={profile.avatar_url}/>
                    </div>
                    <div>
                        <h2>Name:{profile.name}</h2>
                        <hr/>
                        <p>Bio {profile.bio}</p>
                        <p>Company: {profile.company}</p>
                        <p>Email: {profile.email}</p>
                        <p>Blog: {profile.blog}</p>
                        <p>Location: {profile.location}</p>
                    </div>
                </div>
              ) 
        }
        
      

  


export default Card