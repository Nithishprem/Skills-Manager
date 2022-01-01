import {useState} from 'react'
import SkillLevel from './SkillLevel'
import SliderMui from './shared/SliderMui'
import Counter from './shared/Counter'

function Skill({skill, tempSkill}) {
    const [skillDetails, setSkillDetails]=useState(skill)
    
    const handleChange = (e)=>{
        console.log(e.target.value,e.target.id,e.target)
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
    const handleProficiency = (e)=>{
        setSkillDetails(prev=>({
            ...prev,
            proficiency: e.target.value
        }))
    }
    const handleExperience = (e)=>{
        setSkillDetails(prev=>({
            ...prev,
            experience: e.taget.value
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
                <div className='sliderCont'>
                    <SliderMui title={'Proficiency'} onChange={handleProficiency}/>
                </div>
                <div className="experienceCont">
                    <Counter title={'Years of experience'} min={0} max={10} onChange={(count)=>handleExperience(count)}/>
                </div>

            </div>
        </div>
    )
}

export default Skill
