import React, {useState} from "react"
import {loginUser} from "../lib/auth"
import {useRouter} from "next/router"



const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})
    const router = useRouter()

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!username){
            setError({username:true})
            return null
        }
        if(!password){
            setError({password:true})
            return null
        }
        
        try {
            const response = await loginUser(username, password)
            if (response.data.accessToken !== null){
                localStorage.setItem("accessToken", response.data.accessToken)
                router.push("/home")
            }
        } catch (error) {
            setError({"Password atau Username salah": true})
        }
        
        
        
    }

        return(
            <form className='form-style' onSubmit={handleSubmit}>
                <h5 className='titel'>Silahkan Masuk ke akun Anda</h5>
                <div classname='username'>
                    <label>Username</label>
                    <input className='box' type="username" name="username" placeholder='Masukkan username anda' value={username} onChange={handleChangeUsername} /> </div>
                <div classname='password'>
                    <label>password</label>
                    <input className='box' type="password" name="password" placeholder='Masukkan password anda' value={password} onChange={handleChangePassword} />
                    <p className='lupa'>Lupa Password</p>
                </div>
                <div classname='checkbox1'>
                    <input className='checkbox' type="checkbox"  name="Remember me" value="Remember me" />
                    <label className='remember'>Remember me</label>
                </div>
                <button classname='btn-submit' type="submit" >Submit</button>
                {(error.username || error.password) && <p style={{color:"red"}} >Tolong isi dengan benar</p>}
                {(error["Password atau Username salah"]) && <p style={{color:"red"}} >Invalid Username or password</p>}
                <div classname='text'>
                    <p className='blum'>Belum punya Akun?</p>
                    <p className='daftar'>Daftar Sekarang</p>
                </div>
            </form>
        )
    }


export default LoginForm 