import {useState,useContext } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {FaEye} from 'react-icons/fa'
import {toast} from 'react-toastify'
import axios from 'axios'
import UserContext from '../context/UserContext'

const BaseURL = 'https://skills-api.herokuapp.com/api/v1'

function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const {name,email, password} = formData

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
        console.log(formData)
        try{
            const res= await axios.post(`${BaseURL}/auth/register`,{...formData})
            const user = res.data
            // console.log(user)
            setUser(user.user.name)
            navigate('/manageskills')

        }catch(error){
            console.log(error)
            const Message = error.message
            if(Message === 'email-already-in-use'){
                toast.error(Message)
            }else{
                toast.error(Message)
            }
            toast.error('could not ceate user!')
        }
    }
    
    
    return (
        <div className="register">
            <div className="registerHeader">MANAGE SKILLS</div>
            <form onSubmit={onSubmit}>
                <div className="registerformTitle">Register</div>
                <div className="form-grp">
                    <label htmlFor="name" className="nameLabel"> Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;</label>
                    <input type="name" id="name" name="name" value={name} onChange={onChange} required/>
                </div>
                <div className="form-grp">
                    <label htmlFor="email" className="emailLabel">Email Id &nbsp;: &nbsp;</label>
                    <input type="email" id="email" name="email"value={email} onChange={onChange} required/>
                </div>
                <div className="form-grp passwordGrp">
                    <label htmlFor="password" className="passwordLabel">Password : </label>
                    <input type={showPassword ? 'text': 'password'} id="password" 
                    name="password" value={password} onChange={onChange} required/>
                    <div className='showPassword' 
                        onClick={()=>setShowPassword((prevState)=>!prevState)}>
                         <FaEye/>
                    </div>
                </div>
                <div className="form-grp submit-grp">
                <button type='submit' className='btn submit-btn'>Submit</button>

                </div>
            </form>

            <div className="registerDiv">Have an account? <Link to="/" className='registerLink'>Login</Link></div>

        </div>
    )
}

export default Register
