class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0);
        const adj = Array.from({ length: numCourses }, () => []);

        for(let [course,prereq] of prerequisites){
            adj[prereq].push(course);
            indegree[course]++;
        }

        const queue = [];
        for(let i = 0; i < numCourses; i++){
            if(indegree[i]===0){
                queue.push(i);
            }
        }

        let finishedCount = 0;
        while(queue.length > 0){
            const current = queue.shift();
            finishedCount++;
            for(let neighbor of adj[current]){
                indegree[neighbor]--;
                if(indegree[neighbor] === 0){
                    queue.push(neighbor);
                }
            }
        }

        return finishedCount === numCourses;
    }
}
