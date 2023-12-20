const findTheOldest = function(people) {
    return people.sort(function(a,b){ 
        if (a.yearOfDeath === undefined) a.yearOfDeath = (new Date()).getFullYear();
        if (b.yearOfDeath === undefined) b.yearOfDeath = (new Date()).getFullYear();

        return (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1
    })[0];
};