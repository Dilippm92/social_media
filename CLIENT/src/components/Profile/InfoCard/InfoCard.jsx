import React,{useState,useEffect} from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../../ProfileModal/ProfileModal.jsx'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import * as UserApi from '../../../api/UserRequest'
import { logOut } from "../../../actions/AuthActiom";

const InfoCard = () => {
  const [modalOpened, setModalOpened] =useState(false)
  const dispatch =useDispatch()
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authREducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
    
      } else {
      
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        
      }
    };
    fetchProfileUser();
  }, [user]);
function handleLogout(){
    dispatch(logOut())
}
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Profile Info</h4>
            {user._id===profileUserId ?(<div>
            <UilPen width='2rem'height='1.2rem' onClick ={()=>setModalOpened(true)} />
            <ProfileModal modalOpened={modalOpened} setModalOpened ={setModalOpened} data={user}/>

            </div>) : ""}
            
        </div>
        <div className="info">
          <span> <b>Status :   </b> </span>
          <span> {profileUser.relationship}</span>
        </div>
        <div className="info">
          <span> <b>Livs in :   </b>   </span>
          <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
          <span> <b>Works at : </b> </span>
          <span>{profileUser.worksAt}</span>
        </div>

        <button className='button logout-button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default InfoCard
