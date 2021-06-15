import React, { useState ,useEffect} from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService'
function stateDecider(state){
    let stateNew="";
     if(state===true ){
         stateNew="Active"
     }else{
         stateNew="Passive"
     }
     return stateNew
}

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])
    useEffect(()=>{
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvert().then(result=>setJobAdverts(result.data.data))
    },[])
    return (
        <div>
            <Table celled inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Number Of Staff</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>State</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell>{jobAdvert.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.jobPosition}</Table.Cell>
                                <Table.Cell>{jobAdvert.numberOfStaff}</Table.Cell>
                                <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                                <Table.Cell>{stateDecider(jobAdvert.state)}</Table.Cell>
                            </Table.Row>

                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
