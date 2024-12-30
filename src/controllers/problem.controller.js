const { StatusCodes}= require('http-status-codes')
const BadRequest = require('../errors/badrequest.error')
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories')

const problemService = new ProblemService(new ProblemRepository());
function pingController(req,res,next) {
    return res.json({message: "Ping COntroller is Up"})
}

async function addProblem(req,res,next) {

    try{
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: "Problem created successfully",
            error: {},
            data: newproblem
        })
        
    }
    catch(error){
        next(error);
    }

}

async function getProblem(req, res,next) {
    try{
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: "Problem fetched successfully",
            error: {},
            data: problem
        })
        
    }
    catch(error){
        next(error)
    }
}

async function getAllProblems(req, res,next) {
    try{
        const allProblems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message: "All problems fetched successfully",
            error: {},
            data: allProblems
        })
    }
    catch(error){
        next(error)
    }

}

async function deleteProblem(req, res, next) {
    try{
        const deleteProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: "Problem deleted successfully",
            error: {},
            data: deleteProblem
        })
    }
    catch(error){
        next(error)
    }

}
async function updateProblem(req, res,next){
    try{
        const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: "Problem updated successfully",
            error: {},
            data: updatedProblem
        })
    }
    catch(error){
        next(error)
    }

}

module.exports = {
    addProblem,
    getProblem,
    getAllProblems,
    deleteProblem,
    updateProblem,
    pingController
}