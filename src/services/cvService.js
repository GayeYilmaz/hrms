import axios from "axios"
export default class CvService{
    addCv(cv){
        return axios.post("http://localhost:8080/api/cvs/add",cv)
    }
    getCvByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/cvs/getall"+"/"+jobSeekerId)
    }
    getAllByUserIOrderedExperience(userId){
        return axios.get("http://localhost:8080/api/cvs/getallByUserIdOrderExperience"+'/'+userId)
    }
    getAllByUserIdOrderedSchool(userId){
        return axios.get("http://localhost:8080/api/cvs/getallByUserIdOrderSchools"+'/'+userId)
    }

    


}