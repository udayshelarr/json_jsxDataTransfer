import React from "react"

const Student=(props)=>{
    let dat=props.data;
    return(
        <>
            <table border={"2px"}style={{textAlign:"center",fontWeight:"bolder"}}>
                <tr>
                    <th>Name</th>
                    <th>Education</th>
                    <th>Email</th>
                    <th>Phone no</th>
                    <th>Age</th>
                </tr>
                    {
                        dat.map((x)=>{
                            return <tr>
                                <td>{x.name}</td>
                                <td>{x.Eduction}</td>
                                <td>{x.Email}</td>
                                <td>{x.Phno}</td>
                                <td>{x.Age}</td>
                            </tr>
                        })
                    }
            </table>
        </>
    )
}
export default Student
