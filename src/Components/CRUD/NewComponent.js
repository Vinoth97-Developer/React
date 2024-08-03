import React, { useState } from "react";

import axios from "axios";


const NewComponent = () => {

    const [value, setValue] = useState("");

    const getvalue = (e) => {

        setValue(e.target.value);

    }

    // post 
    // put
    // get 
    // delete

    // this is for post data 

    const postData = async (newFruit) => {

        await axios.post('https://example.com/api/fruits', { name: newFruit })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
       
    }

    // this is for updated data

    const putData = async (id, updatedFruit) => {
        await axios.put(`https://example.com/api/fruits/${id}`, { name: "vinothkumar" })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    // ths is for getting data 
    const getData = async () => {
        await axios.get('https://example.com/api/fruits')
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    // this is for delete data
    const deleteData = async (id) => {
        await axios.delete(`https://example.com/api/fruits/${id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    const fruits = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
        { id: 6, name: 'Fig' },
        { id: 7, name: 'Grape' },
        { id: 8, name: 'Honeydew' },
        { id: 9, name: 'Kiwi' },
        { id: 10, name: 'Lemon' }
    ];

    return (

        <div style={{ height: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

            <div>
                <input
                    placeholder="Enter your data"
                    value={value}
                    onChange={(e) => { getvalue(e) }}
                />
                <button onClick={postData}>Add data</button>
            </div>

            <div>
            <ul>
               {
                fruits.map((item,i)=>{
                    return(<li key={i}>
                        {item.name}
                        <button onClick={deleteData}>delete</button>
                        <button onClick={putData}>rename</button>
                        </li>)
                })
               }
            </ul>
            </div>


        </div>
    )
}

export default NewComponent;