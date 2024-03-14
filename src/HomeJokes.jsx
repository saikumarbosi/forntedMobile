import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const HomeJokes = () => {
    const [data, setData] = useState([])

    const handleData = async () => {
        try {
            const response = await fetch("https://v2.jokeapi.dev/endpoints")
            const result = await response.json()
            setData(result)
        }
        catch (e) {
            console.log("Err:", e)
        }
        
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div>
            {data.map((item) => {
                return(
                    <ul className='jokes-list'>
                        <li>{`Name: ${item.name}`}</li>
                        <li>{`Description: ${item.description}`}</li>
                    </ul>
                )
            })}
            <div className='jokes-conatiner'>
                <Link to = "/login">
                <button className='btn'>Logout</button>
                </Link>
            </div>
        </div >
    )
}

export default HomeJokes
