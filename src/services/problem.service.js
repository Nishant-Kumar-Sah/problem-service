const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

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
            const problem = await this.problemRepository.getProblem(id);
            return problem;
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