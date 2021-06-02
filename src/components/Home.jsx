import { useEffect, useState } from "react"
import "./Home.css"


export function Home(){
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://dummyapi.io/data/api/user",{
            method: "GET",
            headers: {
                "app-id": "60b6023c98e5768341aefad0"
            }
        }).then((res) => res.json()).then((res) => setData(res.data))
    },[])
    
    const handleSearch = () => {
        
    }

    const handleOnChange = (e) => {
        setInput(e.target.value)
        
    }
    return (
        <div>
            <div className="nav-container">
                <input type="text" placeholder="Enter name" onChange={handleOnChange} value={input}/>
            </div>
            <div className="users-container">
                {input === "" ? data.map(el => {
                    return  (
                        <div key={el.id} className="user-container">
                            <div className="img-container">
                                <img style={{borderRadius: "50%"}} src={el.picture} alt={el.firstName} />
                            </div>
                            <h2 className="name">{`${el.firstName} ${el.lastName}`}</h2>
                            <h4 className="email">{el.email}</h4>
                        </div>
                    )
                }) :
                data.map(el => {
                    if(el.firstName.toLowerCase().includes(input) || el.lastName.toLowerCase().includes(input)){
                        return (
                            <div key={el.id} className="user-container">
                                <div className="img-container">
                                    <img style={{borderRadius: "50%"}} src={el.picture} alt={el.firstName} />
                                </div>
                                <h2 className="name">{`${el.firstName} ${el.lastName}`}</h2>
                                <h4 className="email">{el.email}</h4>
                            </div>
                        )
                    }
                })}
            </div>
            
        </div>
    )
}