const userDetails = {
    name:"",
    email:"",
    phone:"",
    password:""
}

const Login_Singup_Reducer = (state={userDetails},action) =>{
    if(action.type === "SIGNUP"){
        return{
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            phone:action.payload.phone,
            password:action.payload.password
        }
    }


    return state;
}
export default Login_Singup_Reducer;