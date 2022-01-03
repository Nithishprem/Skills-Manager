import {useState} from 'react'
import {ReactComponent as BegginnerIcon} from './assets/BeginnerIcon.svg'
import {ReactComponent as AdvancedIcon} from './assets/AdvancedIcon.svg'
import {ReactComponent as ExpertIcon} from './assets/ExpertIcon.svg'
import {ReactComponent as MasterIcon} from './assets/MasterIcon.svg'
import {ReactComponent as StarIcon} from './assets/StarIcon.svg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function SkillLevel({id, selectLevel, name}) {
    const [selected, setSelected]=useState('')

    const handleChange = (e)=>{
        setSelected(prev=>e.target.value)
        console.log(name)
        selectLevel(e,id, name)
    }
    return (
        <div className="skillLevelCont">
            <div className="titleCont">
            <div className="title">Select your Level</div>
            <Tooltip title="You can choose your level in skill" placement='right'>
                <IconButton>
                    <HelpOutlineIcon style={{color: '#f05d23'}} />
                </IconButton>
            </Tooltip>
            </div>
            <ul className="skillLevel">
                <li>
                    <input type="radio" id="Beginner" name={id} 
                    value="beginner" 
                    checked={selected==="beginner"}
                    onChange={handleChange}
                    required/>
                    
                    <label htmlFor="Beginner"><BegginnerIcon style={{width: '45px'}} 
                    className={selected==='beginner' ? 'beginner': undefined}/></label>
                    <div>Beginner</div>
                </li>
                <li>
                    <input type="radio" id="Advanced" name={id} 
                    value="advanced" 
                    checked={selected==="advanced"}
                    onChange={handleChange}/>
                    
                    <label htmlFor="Advanced"><AdvancedIcon style={{width: '45px'}} 
                    className={selected==='advanced' ? 'advanced': undefined}/></label>
                    <div>Advanced</div>
                </li>
                <li>
                    <input type="radio" id="Expert" name={id} 
                    value="expert" 
                    checked={selected==="expert"}
                    onChange={handleChange}/>
                    
                    <label htmlFor="Expert"><ExpertIcon style={{width: '45px'}} 
                    className={selected==='expert' ? 'expert': undefined}/></label>
                    <div>Expert</div>
                </li>
                <li>
                    <input type="radio" id="Master" name={id} 
                    value="master" 
                    checked={selected==="master"}
                    onChange={handleChange}/>
                    
                    <label htmlFor="Master"><MasterIcon style={{width: '45px'}} 
                    className={selected==='master' ? 'master' : undefined}/></label>
                    <div>Master</div>
                </li>
                <li>
                    <input type="radio" id="Star" name={id} 
                    value="star" 
                    checked={selected==="star"}
                    onChange={handleChange}/>
                    
                    <label htmlFor="Star"><StarIcon style={{width: '45px'}} 
                    className={selected==='star' ? 'star' : undefined}/></label>
                    <div>Star</div>
                </li>
            </ul>

            
        </div>
    )
}

export default SkillLevel
