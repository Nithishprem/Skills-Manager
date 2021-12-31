import { useContext,useState } from "react"
import Skill from "./Skill"
import SkillsContext from "../context/SkillsContext"

function SkillsList() {
    const {skills} = useContext(SkillsContext)
    const [skillstemptList, setSkillstempList] = useState(skills)

    return (
        <div className="skillsList">
            {skills.map((skill,i)=>{
                return <Skill key={skill.id} skill={skill} tempSkill={skillstemptList[i]}/>
            })}
        </div>
    )
}

export default SkillsList
