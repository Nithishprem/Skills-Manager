import {useState,useContext} from 'react'
import SkillLevel from './SkillLevel'
import SliderMui from './shared/SliderMui'
import Counter from './shared/Counter'
import SkillsContext from '../context/SkillsContext'
import {FaSave,FaTrash} from 'react-icons/fa'
import {toast} from 'react-toastify'


function Skill({skill}) {
    const [skillDetails, setSkillDetails]=useState(skill)
    const {addSkillDetails, deleteSkill} = useContext(SkillsContext)
    
    const handleChange = (e)=>{
        // console.log(e.target.value,e.target.id,e.target)
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
    const handleExperience = (count)=>{
        // console.log(count)
        setSkillDetails(prev=>({
            ...prev,
            experience: count
        }))
    }

    const handleSave = ()=>{
        if (skillDetails.level === '') {
            toast(`please Select your level in ${skillDetails.name} skill`)
            return
        }
        addSkillDetails(skillDetails)
    }
    const handleDelete = ()=>{
        deleteSkill(skillDetails)
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
            {/* <div className="btn" onClick={handleEdit}>item</div> */}
        <FaSave onClick={handleSave} className='saveSkill'/>
        <FaTrash onClick={handleDelete} className='trash'/>
        </div>
    )
}

export default Skill
