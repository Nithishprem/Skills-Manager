import { useContext } from "react"
import {AnimatePresence, motion} from 'framer-motion'
import Skill from "./Skill"
import SkillsContext from "../context/SkillsContext"
import Button from "./shared/Button"



function SkillsList() {
    const {skills,isSaving, saveSkills,removeAllSkills, btnDisabled} = useContext(SkillsContext)
    // const [skillstemptList, setSkillstempList] = useState(skills)

    const handleSave = ()=>{
        saveSkills()
    }

    const handleRemove = ()=>{
        removeAllSkills()
    }

    if(!skills ||skills.length ===0){
        return <h4 className="emptyList">No skills selected.Please select skills to display here</h4>
    }
    return (
        <>
        <div className="skillsList">
            <AnimatePresence>
            {skills.map((skill)=>(
                <motion.div 
                key={skill.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                <Skill key={skill.id} skill={skill} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
        <div className="submitCont">
            <Button version="primary btn-cancel" onClick={handleRemove}>Cancel</Button>
        <Button version="primary btn-save" onClick={handleSave} isDisabled={btnDisabled}>{isSaving ? 'Saving...': 'Save'}</Button>
        </div>
        </>
    )

    
}

export default SkillsList
