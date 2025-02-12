const { Logger } = require('winston');
const NotFoundError = require('../errors/notFoundError');
const {Problem} =require('../models');
const logger = require('../config/logger.config');

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
    async deleteProblem(id) {
        try{
            const problem = await Problem.findByIdAndDelete(id)
            if(!problem)
                logger.error(`Problem with id:  ${id} not found in the database`)
                throw new NotFoundError("Problem", id);
            return problem;
        }catch (error) {
            console.log(error)
            throw error;
        }
    }
    async updateProblem(id, problemData) {
        try {
            const problem = await Problem.findByIdAndUpdate(id, problemData, {new: true});
            if(!problem)
                throw new NotFoundError("Problem", id);
            return problem;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}

module.exports = ProblemRepository;