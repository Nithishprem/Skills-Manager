import {useState, useContext, useRef} from 'react'
import Select from 'react-select'
import Button from './shared/Button'
import {FaPlusCircle} from 'react-icons/fa'
import SkillsContext from '../context/SkillsContext'

function AddSkillForm() {
    const { addSkills, skillsOptions } = useContext(SkillsContext)

    const [selectedOptions, setSelectedOptions] = useState(null)

    const selectRef = useRef()
    

    const onChange = (options)=>{
        
        setSelectedOptions(options)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newSkills = selectedOptions.map(skill=>skill.value)
        addSkills(newSkills)
        selectRef.current.clearValue()
        // console.log(selectRef.current.getValue());

    }
    
    return (
        <form onSubmit={handleSubmit} className="skillFormCont">
            <Select
                ref={selectRef}
                isMulti
                name="colors"
                options={skillsOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChange}/>

            <Button type="submit">
                <FaPlusCircle className='plusIcon'/>
                <div>Add New Skills</div>
            </Button>
        </form>
    )
}

export default AddSkillForm
