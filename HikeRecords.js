class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {

        if (this.goals[peak] === undefined) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }
    }


    hike(peak, time, difficultyLevel) {
        if (this.goals[peak] === undefined) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        if (this.resources - (time * 10) < 0) {
            return `You don't have enough resources to complete the hike`;
        }

        this.resources = this.resources - (time * 10);
        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        this.resources = this.resources + time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${username} has not done any hiking yet`;
        }

        if (criteria == 'easy' || criteria == "hard") {
            let sorted = this.listOfHikes.sort(x => x.difficultyLevel == criteria);

            if (!this.listOfHikes.some(x => x.difficultyLevel == criteria)) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            let result = sorted.sort((a, b) => a.time - b.time);

            let peak = result[0].peak;
            let time = result[0].time;
            return `${this.username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`
        } 
        else if (criteria == 'all') {
            let result = [];
            result.push('All hiking records:');
            this.listOfHikes.
                forEach(x => {
                    result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`);
                })
            return result.join('\n');
        }
    }
}





