import axios from "axios"
export default class JobAdvertService{
    addJobSeeker(jobSeeker){
        return axios.post("http://localhost:8080/api/job_seekers/add",jobSeeker)
    }

    getAllJobSeeker(){
        return axios.get("http://localhost:8080/api/job_seekers/getall")
    }
}
