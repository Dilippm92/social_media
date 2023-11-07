
import * as UploadApi from '../api/UploadREquest'
export const uploadImage = (data)=> async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data);
    } catch (error) {
        console.log(error);
    }
}
export const uploadPost =(data)=> async(dispatch)=>{
    dispatch({type:"UPLOAD_START"});        
    try {
       const newPost = await UploadApi.uploadPost(data);
       console.log("new post:",newPost);
        dispatch({type:"UPLOAD_SUCCESS",data:newPost.data});
    } catch (error) {
        console.log(error);
        dispatch({type:"FAIL"});
    }
}