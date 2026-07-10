import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewp = () => {
    const [data, ChangeData] = useState([])

const fetchData =()=>{


    axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(

        (Response)=>{

            ChangeData(Response.data)
        }
    ).catch()
}
  useEffect(

    ()=>{


        fetchData()
    },[]
    
  )


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="row g-3">

                            {data.map(

                                (value, index) => {

                                    return (

                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-4">

                                            <div className="card">

                                                <img src={value.image}
                                                    className="card-img-top"

                                                 height="350"/>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">{value.carId}</li>
                                                    <li className="list-group-item">{value.brand}</li>
                                                    <li className="list-group-item">{value.model}</li>
                                                    <li className="list-group-item">{value.fuelType}</li>
                                                    <li className="list-group-item">{value.transmission}</li>
                                                    <li className="list-group-item">{value.price}</li>
                                                    <li className="list-group-item">{value.color}</li>
                                                    <li className="list-group-item">{value.year}</li>

                                                </ul>
                                            </div>

                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewp