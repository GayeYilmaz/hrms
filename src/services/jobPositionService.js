import axios from "axios"
export default class JobPositionService{

    addJobPosition(jobPosition){
        return axios.post("http://localhost:8080/api/job_positions/add",jobPosition)
    }

    getAllJobPosition(){
        return axios.get("http://localhost:8080/api/job_positions/getall")
    }
}