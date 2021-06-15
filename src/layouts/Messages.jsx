import React from 'react'
import { Search, Grid,} from 'semantic-ui-react'
export default function Messages() {
   
    return (
        <Grid>
        <Grid.Column width={6}>
          <Search inverted ></Search>
        </Grid.Column>
        </Grid>
    )
}
