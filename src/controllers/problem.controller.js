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
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
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
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
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
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
    }
    catch(error){
        next(error)
    }

}

function deleteProblem(req, res) {
    try{
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
    }
    catch(error){
        next(error)
    }

}
function updateProblem(req, res,next){
    try{
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
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