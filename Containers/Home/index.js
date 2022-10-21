import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {setUser} from "./actions";

const Home  = (props) => {
    const{ user }=useSelector((state)=>state.homeReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!user){
            dispatch(setUser())
        }
    },[user])
    console.log("home props",props)
    return(<div>
        <h1>Home</h1>
        <p>this is a home view</p>
        <p>{user && user.name+" "+user.lastName}</p>
    </div>)
}


export default Home;