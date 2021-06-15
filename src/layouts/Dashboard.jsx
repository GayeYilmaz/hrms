import React from 'react'

import Companies from './Companies'
import { Grid } from 'semantic-ui-react'
import JobAdvertList from '../pages/JobAdvertList'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Companies/>
                         
                    </Grid.Column >
                    <Grid.Column width={12}>
                    <JobPositionList></JobPositionList>

                    </Grid.Column>
                </Grid.Row>
         </Grid>
            
        </div>
    );
}
