export type FieldValidatorType = (value:string)=> string | undefined

export  const required:FieldValidatorType = (value)=>{
    if(value) return undefined;

    return "Filed required ";
};

export  const maxLengthCriator = (maxLength:number):FieldValidatorType => (value) =>{


        if(value.length > maxLength) return `Mac length is ${maxLength} symbols`;
        return  undefined;


};

