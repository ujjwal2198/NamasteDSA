function isEligibleToVote(age){
    if(age<0){
        console.log("Wrong Age");
    }
    else if(age>=18){
        console.log("Eligible to vote");
    }else{
        console.log("Not Eligible to vote");
    }
}

isEligibleToVote(20);
isEligibleToVote(10);
isEligibleToVote(-10);