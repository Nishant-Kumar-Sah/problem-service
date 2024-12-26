const { StatusCodes}= require('http-status-codes')
const BadRequest = require('../errors/badrequest.error')


function pingController(req,res,next) {
    return res.json({message: "Ping COntroller is Up"})
}

function addProblem(req, res,next) {

    try{
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
    }
    catch(error){
        next(error)
    }

}

function getProblem(req, res,next) {
    try{
        throw new BadRequest("Problem Statement",{missing:["Problem statement missing"]})
    }
    catch(error){
        next(error)
    }
}

function getProblems(req, res,next) {
    try{
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
    getProblems,
    deleteProblem,
    updateProblem,
    pingController
}