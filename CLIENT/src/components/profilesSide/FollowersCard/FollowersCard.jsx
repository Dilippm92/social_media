import React, { useEffect, useState } from "react";

import './FollowersCard.css'
import { Followers } from '../../../Data/FollowersData'
import { getAllUser } from "../../../api/UserRequest";

import User from '../../User/User'
import { useSelector } from "react-redux";

const FollowersCard = () => {
    const [persons,setPersons] =useState([]);
    const { user } = useSelector((state) => state.authREducer.authData);

    useEffect(()=>{
        const fetchPersons = async()=>{
            const {data} =await getAllUser();
        setPersons(data)
        
        }
        fetchPersons();
    },[])
  return (
    <div className="FollowersCard">
        <h3>People you may know</h3>
        {persons.map((person,id)=>{
            if(person._id!==user._id){
                return (
                    <User person ={person} key ={id} />
                 )
            }
           
        })}
    </div>
  )
}

export default FollowersCard
