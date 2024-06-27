import { FormAddProject } from '../../components/FormProject/FormAddProject'
import { addProjectFormData, checkboxData } from '../../data/forms'
import './ManagementPanel.css'

export const ManagementPanel = () => {
  return (
    <div className='page-div'>
      <div className='management-panel-page-div'>
        <h1 id='title'>Add Project</h1>
        <FormAddProject
          dataForm={addProjectFormData}
          submitText='ADD'
          checkboxData={checkboxData}
        />
      </div>

    </div>
  )
}
