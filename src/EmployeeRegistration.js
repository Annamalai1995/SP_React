import { useState } from "react"

export const RegistrationForm=()=>
{
    const[userdetail,setUserdetail]=useState({
        //spread operator
        "empid":0,
        "empname":"",
        "empusername":"",
        "emppassword":"",
        "empdesignation":"",
        "empexp":0,
        "empsalary":0


    })
    const  tracking=(mydatas)=>
    {
        const[name,value]=mydatas.target
        setUserdetail((adding)=>
        {
            return{
                adding,[name]:value
            }
        })
    }
    const Register=()=>
    {
        alert("welconme to Zealous Tech Corp"+JSON.stringify(userdetail))
        create(userdetail);
    }
    const cancel=()=>
    {
        alert("Rejected...............")
    }
    return(
        <>
        <div className="container-fluid mt-3">
            <h3 className="text-center text-info text-uppercase text-decoration-underline">NEW EMPLOYEE REGISTRATION</h3>
            <div className="row justify-content-center" style={{backgroundColor:'palegoldenrod'}}>
                <div className="col-lg-7 col-md-10 col-sm-12">
                    <div className="form-group mt-2">
                        <label className="fw-bolder">Employee Id</label>
                        <input className="form-control" 
                        name='empid' 
                        placeholder="Employee ID Register" 
                        onChange={tracking} value={userdetail.empid}></input>
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Employee Name</label>
                        <input className="form-control"
                        name="empname"
                        placeholder="Enter your name"
                        onChange={tracking} value={userdetail.empname}/>
                    </div>
                    <div className="mt-3">
                        <label className="fw-bold">Employee Username</label>
                        <input className="form-control"
                        name="empusername"
                        placeholder="Enter the valid username"
                        onChange={tracking}
                        value={userdetail.empusername}/>

                    </div>
                    <div className="mt-2">
                        <label className="fw-bold">EMployee Password</label>
                        <input className="form-control"
                        name="emppassword"
                        placeholder="Enter the Valid password "
                        onChange={tracking}
                        value={userdetail.emppassword}/>
                    </div>
                    <div className="mt-2">
                        <label className="fw-bold">Employee Designation </label>
                        <select className="form-select" name="empdesignation"
                        onChange={tracking}
                        value={userdetail.empdesignation}>
                            <option selected hidden>select  Any one </option>
                            <option >Java Stack</option>
                            <option>Selenium</option>
                            <option>Front End Developer</option>
                            <option>Web Develpement</option>
                            <option1>Android Developer</option1>
                        </select>
                        </div>
                        <div className="mt-3">
                            <label className="fw-bold">Employee Experience</label>
                            <input className="form-control" type="text"
                            name="empexp"
                            placeholder="Experienece:y/m"
                            onChange={tracking}
                            value={userdetail.empexp}></input>
                        </div>
                        <div className="mt-3">
                            <label className="fw-bold">Employee Salary</label>
                            <input className="form-control"
                            name="empsalary"
                            placeholder="Enter the salary"
                            onChange={tracking}
                            value={userdetail.empsalary}/>
                        </div>
                        <div className="row-justify-content-center mt-2">
                            <div className='col-3'>
                                <button className="btn btn-outline-warning  text-dark" onClick={Register}>REGISTER</button>
                            </div>
                            <div className='col-3'>
                                <button className="btn btn-outline-warning  text-dark" onClick={cancel}>CANCEL</button>
                            </div>
                            
                            
                        </div>

                </div>
            </div>


        </div>
        </>
    )

}