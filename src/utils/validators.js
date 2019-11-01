export  const required = value =>{
    if(value) return undefined;

    return "Filed required ";
};

export  const maxLengthCriator = (maxLength) => (value) =>{

        if(value.length > maxLength) return `Mac length is ${maxLength} symbols`;
        return  undefined;


};

