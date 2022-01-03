import { useState,createContext,useRef } from "react";
import {v4 as uuidv4} from 'uuid'
import {toast} from 'react-toastify'
import axios from 'axios'

const BaseURL = 'http://localhost:5000/api/v1'

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

    const addSkillDetails = (skill)=>{
        // console.log(skill)
        setSkills(prev=>{
            return prev.map((item)=>{
                if(item.id===skill.id){
                    // console.log(skill)
                    return skill
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
    const saveSkills = async()=>{
            for(let i=0; i<skills.length;i++ ){
                if (skills[i].level===''){
                    toast.error(`Please select ${skills[i].name} level`)
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
                const data = res.data
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
        addSkillDetails,
        deleteSkill,
        saveSkills

    }}>
        {children}
    </SkillsContext.Provider>

}

export default SkillsContext