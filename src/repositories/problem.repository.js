const NotFoundError = require('../errors/notFoundError');
const {Problem} =require('../models')

class ProblemRepository{

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testcases: problemData.testcases ? problemData.testcases : [],
                
            });
            return problem;
        }catch(error) {
            console.log(error)
            throw error;
        }

    }
    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        }catch(error) {
            console.log(error)
            throw error;
        }
    }
    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem)
                throw new NotFoundError("Problem", id);
            return problem; 
        }catch (error) {
            console.log(error)
            throw error;
        }
    }
}

module.exports = ProblemRepository;