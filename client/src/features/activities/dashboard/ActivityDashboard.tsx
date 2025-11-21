import { Grid2} from '@mui/material'
import ActivityList from './ActivityList';
import ActivityDetail from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';


type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean
    //submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}
export default function ActivityDashboard({activities, cancelSelectActivity, 
                        selectActivity, 
                        selectedActivity,
                        openForm,
                        closeForm,
                        editMode,
                        //submitForm,
                        deleteActivity
                      }: Props) {
  return (
    <Grid2 container justifyContent='space-between'>
        <Grid2 size={7}>
            <ActivityList 
              activities={activities} 
              selectActivity={selectActivity}
              deleteActivity={deleteActivity}
            />
        </Grid2>
        <Grid2 size={4}>
          {selectedActivity && !editMode && //detail only appears when something is selected and you're not editing.
            <ActivityDetail 
              activity={selectedActivity} 
              cancelSelectActivity={cancelSelectActivity} 
              openForm={openForm}
            />
          }
          {editMode && //show Form And it passes down the selected activity so you can edit it.
          <ActivityForm 
            closeForm={closeForm} 
            activity={selectedActivity}
            //submitForm={submitForm}
          />}
        </Grid2>
    </Grid2>
  )
}
