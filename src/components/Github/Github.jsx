import React, { useState , useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/saurabhkuntal110')
    //   .then(response => response.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <> 
        <div className='bg-gray-700 text-white text-center text-3xl p-4 m-4'> Github Profile: {data.login} </div>
        <div className='bg-gray-500 text-white text-left text-2xl p-4 m-4'>
            <p>
                <img src={data.avatar_url} alt='git pic' height={80}/>
                User Name: {data.name} <br/>
                Bio: {data.bio} <br/>
                Company: {data.company} <br/>
                Followers: {data.followers} <br/>
                Following: {data.following} <br/>
                Repositories: {data.public_repos}

            </p>    
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/saurabhkuntal110')
    return response.json()
}