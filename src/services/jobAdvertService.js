import axios from "axios"
export default class JobAdvertService{
    addEmployer(jobAdvert){
        return axios.post("http://localhost:8080/api/jobAdverts/add",jobAdvert)
    }
    getJobAdvert(){
        return axios.get("http://localhost:8080/api/jobAdverts/getJobAdvertWithDeatils")

    }
    getAllActiveJobAdvertWithOrder(state){
        return axios.get("http://localhost:8080/api/jobAdverts/findAllByStateOrderByDeadlineAsc"+"/"+state)
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobAdverts/getById"+"/"+id)
    }
    getByState(state){
        return axios.get("http://localhost:8080/api/jobAdverts/getByState"+"/"+state)
    }
    getByDeadlineAndState(deadline){
        return axios.get("http://localhost:8080/api/jobAdverts/getJobAdvertWithDeadlineAndState"+"/"+deadline)
    }
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdverts/getJobAdvertWithDeatils")
    }
    getByEmployerId(employerId){
        return axios.get("http://localhost:8080/api/jobAdverts/getJobAdvertWithEmployer"+"/"+employerId)
    }
}