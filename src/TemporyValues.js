let Employeedetails=[
{
    "empid":501,
    "empname":"Preethi",
    "empusername":"pree123",
    "emppassword":"pree@123",
    "empdesignation":"Java Stack",
    "empexp":3,
    "empsalary":100000
},
{
    "empid":502,
    "empname":"sivasankari",
    "empusername":"siva123",
    "emppassword":"siva@1230",
    "empdesignation":"Java Stack and Web Devlopment",
    "empexp":10,
    "empsalary":500000

},
{
    "empid":503,
    "empname":"Annamalai",
    "empusername":"sam123",
    "emppassword":"Aaju123",
    "empdesignation":"Mern Stack Developer",
    "empexp":5,
    "empsalary":52500
}
]

export const create=(obj)=>
{
    Employeedetails.push(obj)
}

export  const list=()=>
{
    return Employeedetails;

}
export const read=(index)=>
{
    return Employeedetails[index];
}
export const fetchexact=(name)=>
{
    const temp=Employeedetails.filter((element)=>
    {
        return element.empname==name;

    })
    return temp[0];
    

}
export const alteration=(ele,index)=>
{
    Employeedetails[index]=ele;
}
export const deleting=(index)=>
{
    var sure=prompt("Are you sure you want to delete the values")
    if(sure=='yes')
    {
        Employeedetails=Employeedetails.filter((ele,ind)=>
        {
            return ind!==index
        })
        return Employeedetails;
    }
    else if(sure=='no')
    {
        alert("You value is not deleted")
        return Employeedetails;
        
    }
    else{
        alert("THank you")
    }
}
