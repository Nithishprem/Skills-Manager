import { useContext,useState } from "react"
import Skill from "./Skill"
import SkillsContext from "../context/SkillsContext"
import Button from "./shared/Button"


function SkillsList() {
    const {skills, saveSkills} = useContext(SkillsContext)
    // const [skillstemptList, setSkillstempList] = useState(skills)

    const handleClick = ()=>{
        saveSkills()
    }

    return (
        <>
        <div className="skillsList">
            {skills.map((skill,i)=>{
                return <Skill key={skill.id} skill={skill} />
            })}
        </div>
        <div className="submitCont">
            <Button version="primary btn-cancel">Cancel</Button>
        <Button version="primary btn-save" onClick={handleClick}>Save</Button>
        </div>
        </>
    )

    
}

export default SkillsList
