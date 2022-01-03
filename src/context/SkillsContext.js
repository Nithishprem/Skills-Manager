import { useState,createContext,useRef } from "react";
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-toastify'
import axios from 'axios'

const BaseURL = 'https://skills-api.herokuapp.com/api/v1'

const SkillsContext = createContext()

export const SkillsProvider = ({children})=>{
    const [skills, setSkills] = useState([])
    const [skillsOptions, setSkillsOptions]=useState([
        {value:'Graphic-design', label: 'Graphic design'},
        {value:'React', label: 'React Js'},
        {value:'Express', label: 'Express'},
        {value:'Javascript', label: 'Javascript'},
    ])
    const allOptions=useRef([
        {value:'Graphic-design', label: 'Graphic design'},
        {value:'React', label: 'React Js'},
        {value:'Express', label: 'Express'},
        {value:'Javascript', label: 'Javascript'},
    ])
    
    
    const addSkills = (newSkills)=>{
        const newSkillsCopy=newSkills.map((skill)=>({
                name: skill, 
                expertSkill:false,
                level:'',
                proficiency: 0,
                experience: 0,
                id: uuidv4()
        }))

        setSkills(prev=>{
            return [...prev,...newSkillsCopy]
        })
        setSkillsOptions(prev=>{
            return prev.filter(item=>newSkills.indexOf(item.value) === -1)
        })
        // console.log(newSkillsCopy)
    }

    

    const handleExperience = (count, id,name)=>{
        // console.log(count,id,name)
        setSkills(prev=>{
            return prev.map((item)=>{
                if(item.id===id){
                    return ({
                        ...item,
                        [name]: count
                    })
                }
                return item
            })
        })
    }

    const handleDetailsChange = (e,id,name)=>{
        // console.log(name,id,e.target.value)
        let boolean = null
        if(e.target.value ==='true'){
            boolean = false
        }
        if(e.target.value ==='false'){
            boolean = true
        }
        setSkills(prev=>{
            return prev.map((item)=>{
                if(item.id===id){
                    return ({
                        ...item,
                        [name]: boolean ?? e.target.value
                    })
                }
                return item
            })
        })

    }


    const deleteSkill = (skill)=>{
        setSkills(prev=>{
            return prev.filter((item)=>item.id!==skill.id)
        })
        setSkillsOptions(prev=>{
            return [
                ...prev,
                {value:skill.name, label: skill.name}
            ]
            
        })
    }

    const removeAllSkills = ()=>{
        setSkills([])
        setSkillsOptions(allOptions.current)
        console.log('skills removed')
    }
    const saveSkills = async()=>{
            for(let i=0; i<skills.length;i++ ){
                if (skills[i].level===''){
                    toast.error(`Please select your level in ${skills[i].name} skill`,{
                        position: toast.POSITION.BOTTOM_CENTER
                      })
                    console.log('error')
                    return
                }
            }
            try{
                const token =JSON.parse(localStorage.getItem('token'))
                const res =await axios.post(`${BaseURL}/skills`,skills,{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                if(res.status !==201){
                    throw new Error(res.data)
                }
                toast.success("Skills saved sucessfully") 
            }
            catch(error){
                toast.error("Sorry, there is an error saving skills")
            }
    }

    return <SkillsContext.Provider value={{
        skills,
        skillsOptions,
        addSkills,
        deleteSkill,
        saveSkills,
        removeAllSkills,
        handleExperience,
        handleDetailsChange
    }}>
        {children}
    </SkillsContext.Provider>

}

export default SkillsContext