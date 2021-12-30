import { useContext } from "react"
import Skill from "./Skill"
import SkillsContext from "../context/SkillsContext"

function SkillsList() {
    const {skills} = useContext(SkillsContext)

    return (
        <div className="skillsList">
            {skills.map((skill,i)=>{
                return <Skill key={i} skill={skill}/>
            })}
        </div>
    )
}

export default SkillsList
