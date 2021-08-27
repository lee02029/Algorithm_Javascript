var solution = (participant, completion) => {
    completion.map(name => completion[name] = (completion[name] | 0) + 1);
    return participant.find((name) => !completion[name]--);
};
