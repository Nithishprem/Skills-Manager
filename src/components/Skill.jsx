import {useContext} from 'react'
import SkillLevel from './SkillLevel'
import SliderMui from './shared/SliderMui'
import Counter from './shared/Counter'
import SkillsContext from '../context/SkillsContext'
import {FaTrash} from 'react-icons/fa'


function Skill({skill}) {
    const { deleteSkill, handleExperience, handleDetailsChange} = useContext(SkillsContext)
    
    const handleDelete = ()=>{
        deleteSkill(skill)
    }

    return (
        <div className='skillCont'>
            <div className="section1">
                <div className="heading">{skill.name}</div>
                <div className="expertCont">
                <input type="checkbox" id="expertSkill" 
                value={skill.expertSkill} 
                onChange={(e)=>handleDetailsChange(e,skill.id, 'expertSkill')}/>
                <label htmlFor="expertCheck">{'Mark this as Expert level'}
          </label>
                </div>
            </div>
            <div className="section2">
                <SkillLevel level={skill.level} id={skill.id} name={"level"} 
                selectLevel={(val,id,name)=>handleDetailsChange(val,id,name)}/>
                <div className='sliderCont'>
                    <SliderMui title={'Proficiency'} id={skill.id} name={"proficiency"} 
                    onChange={handleDetailsChange}/>
                </div>
                <div className="experienceCont">
                    <Counter title={'Years of experience'} min={0} max={10} 
                    id={skill.id} name={"experience"} 
                    onChange={(count,id,name)=>handleExperience(count,id,name)}/>
                </div>
            </div>
        <FaTrash onClick={handleDelete} className='trash'/>
        </div>
    )
}

export default Skill
