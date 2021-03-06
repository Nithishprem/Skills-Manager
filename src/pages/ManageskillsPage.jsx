import AddSkillForm from "../components/AddSkillForm"
import SkillsList from "../components/SkillsList"
import {SkillsProvider} from '../context/SkillsContext'

function ManageskillsPage() {
    return (
        <div className="manageSkills">
          <div className="heading pageTitle">Manage Skills</div>
          <div className="pageInfo">
              <p className="pagedesc">Hi Nick, you can add the skills you possess</p>
              <p className="textSmall">Assess  yourself in the skills you have selected.</p>
          </div>
            <SkillsProvider>
          <AddSkillForm/>
          <SkillsList/>
          </SkillsProvider>
        </div>
    )
}

export default ManageskillsPage
