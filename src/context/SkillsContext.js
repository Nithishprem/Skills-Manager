import { useState,createContext } from "react";
import {v4 as uuidv4} from 'uuid'
const SkillsContext = createContext()

export const SkillsProvider = ({children})=>{
    const [skills, setSkills] = useState([])
    const [skillsOptions, setSkillsOptions]=useState([
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
        console.log(newSkillsCopy)
    }
    return <SkillsContext.Provider value={{
        skills,
        skillsOptions,
        addSkills
    }}>
        {children}
    </SkillsContext.Provider>

}

export default SkillsContext