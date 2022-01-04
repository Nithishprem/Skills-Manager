import {useState,useContext } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {FaEye} from 'react-icons/fa'
import {toast} from 'react-toastify'
import axios from 'axios'
import UserContext from '../context/UserContext'

const BaseURL = 'https://skills-api.herokuapp.com/api/v1'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading]=useState(false)

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const {email, password} = formData

    const onChange = (e)=>{
        setFormData((prevState)=>{
            return {
                ...prevState,
                [e.target.id]:e.target.value
            }
        })
    }

    const onSubmit = async(e)=>{
        e.preventDefault()
        
        try{
            setIsLoading(true)
            const res=await axios.post(`${BaseURL}/auth/login`,{
                ...formData
            })
            const user = res.data
            // console.log(user.user.name)
            setUser(user.user.name)
            localStorage.setItem("token", JSON.stringify(user.token))
            setIsLoading(false)
            
            navigate('/manageskills')

        }catch(error){
            console.log(error)
            toast.error('Please provide valid credentials!')
            setIsLoading(false)
        }
    }
    
    
    return (
        <div className="login">
            <div className="loginHeader">MANAGE SKILLS</div>
            <form onSubmit={onSubmit}>
                <div className="loginformTitle">Login</div>
                <div className="form-grp">
                    <label htmlFor="email" className="emailLabel">Email Id &nbsp;: &nbsp;</label>
                    <input type="email" id="email" name="email"value={email} onChange={onChange}/>
                </div>
                <div className="form-grp passwordGrp">
                    <label htmlFor="password" className="passwordLabel">Password : </label>
                    <input type={showPassword ? 'text': 'password'} id="password" 
                    name="password" value={password} onChange={onChange}/>
                    <div className='showPassword' 
                        onClick={()=>setShowPassword((prevState)=>!prevState)}>
                         <FaEye/>
                    </div>
                </div>
                <div className="form-grp submit-grp">
                <button type='submit' className='btn submit-btn'>{isLoading? 'Loading...':'Submit'}</button>

                </div>
            </form>

            <div className="registerDiv">Don't Have an account? <Link to="/register" className='registerLink'>Register</Link></div>

        </div>
    )
}

export default Login
