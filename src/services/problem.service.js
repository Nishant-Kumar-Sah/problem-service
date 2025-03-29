const sanitizeMarkdownContent = require("../utils/markdownSanitizer");
const logger = require('../config/logger.config');
const Error = require('../errors/index');

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
            //1. sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("problem data :" ,problemData )
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("problem created: " , problem)
            return problem;
    }
    async getAllProblems() {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        
    }
    async getProblem(id) {
            try {
                const problem = await this.problemRepository.getProblem(id);
                logger.info(`Successfully fetched problem with problem id :${id}`)
                return problem;
            }
            catch{
                logger.error(`Unable to fetch problem with problem id : ${id}`)
                throw new Error.NotFoundError("Problem", id);
            }
    }
    async deleteProblem(id) {
        const problem = await this.problemRepository.deleteProblem(id);
        return problem;
    }
    async updateProblem(id, problemData) {
        problemData.description = sanitizeMarkdownContent(problemData.description);
        const problem = await this.problemRepository.updateProblem(id, problemData);
        return problem;
    }
}

module.exports = ProblemService;