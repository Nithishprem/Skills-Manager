import {useState} from 'react'
import ProficiencySlider from './ProficiencySlider'
import SkillLevel from './SkillLevel'

function Skill({skill, tempSkill}) {
    const [skillDetails, setSkillDetails]=useState(skill)
    
    const handleChange = (e)=>{
        console.log(e.target.value,e.target.id)
        let boolean = null
        if(e.target.value ==='true'){
            boolean = true
        }
        if(e.target.value ==='false'){
            boolean = false
        }

        setSkillDetails(prev=>({
            ...prev,
            [e.target.id]: !boolean ?? e.target.value
        }))
    }

    const handleSelectLevel = (val)=>{
        setSkillDetails(prev=>({
            ...prev,
            level: val
        }))
    }
    
    return (
        <div className='skillCont'>
            <div className="section1">
                <div className="heading">{skill.name}</div>
                <div className="expertCont">
                <input type="checkbox" id="expertSkill" 
                value={skillDetails.expertSkill} 
                onChange={handleChange}/>
                <label htmlFor="expertCheck">{'Mark this as Expert level'}
          </label>
                </div>
            </div>
            <div className="section2">
                <SkillLevel level={skillDetails.level} id={skillDetails.id} selectLevel={(val)=>handleSelectLevel(val)}/>
                <ProficiencySlider/>

            </div>
        </div>
    )
}

export default Skill
