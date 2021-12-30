import { useState,createContext } from "react";
const SkillsContext = createContext()

export const SkillsProvider = ({children})=>{
    const [skills, setSkills] = useState([])
    const [skillsOptions, setSkillsOptions]=useState([
        {value:'graphic-design', label: 'Graphic design'},
        {value:'react', label: 'React Js'},
        {value:'express', label: 'Express'},
        {value:'javascript', label: 'Javascript'},
    ])
    
    
    const addSkills = (newSkills)=>{
        setSkills(prev=>{
            return [...prev,...newSkills]
        })
        setSkillsOptions(prev=>{
            return prev.filter(item=>newSkills.indexOf(item.value) === -1)
        })
        // console.log(newSkills)
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