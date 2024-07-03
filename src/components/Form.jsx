import React from "react";
import './css/Form.css';
const Form = () => {
        return(
            <>
            <form id="am">
                <div id="main">
                    <p id="line">Personal  Details</p><hr></hr>
                    <div class="a">
                        <label>Name<sup>*</sup></label><br></br>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input"></input>
                    </div>
                    <div class="a"> 
                        <label>Father's Name<sup>*</sup></label><br></br>
                            <input type="text" name="name" placeholder="Enter Your Father's Name" className="input"></input>
                    </div>
                    <div class="a">
                        <label>Mother's Name<sup>*</sup></label><br></br>
                            <input type="text" name="name" placeholder="Enter Your Mother's Name" className="input"></input>
                    </div>

                    
                    <div class="a">
                        <label>Mobile Number<sup>*</sup></label><br></br>
                            <input type="number" name="mobile" placeholder="Enter Your Mobile" className="input"></input>
                    </div>
                    <div class="a"> 
                        <label>Email Id<sup>*</sup></label><br></br>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input"></input>
                    </div>
                    <div class="a">
                        <label>Date Of Birth<sup>*</sup></label><br></br>
                            <input type="date" name="date of birth" placeholder="dd-mm-yyyy" className="input"></input>
                    </div>

                    
                    <div class="a">
                        <label>Aadhar Number<sup>*</sup></label><br></br>
                            <input type="number" name="aadhar" placeholder="1111 2222 3333" className="input"></input>
                    </div>
                    <div class="a"> 
                        <label>Blood Group<sup>*</sup></label><br></br>
                            <input type="text" name="blood group" placeholder="Eg:A,A+,A-,B,B+,B- Etc" className="input"></input>
                    </div>
                    <div class="a">
                        <label>Gender<sup>*</sup></label><br></br>
                        <select className="drop">
                            <option disabled selected value={''}>--Select Your Gender--</option>
                            <option value={'hindu'}>Male</option>
                            <option value={'islam'}>Female</option>
                            <option value={'sikh'}>Other</option>
                        </select>
                    </div>

                    
                    <div class="a">
                        <label>Religion<sup>*</sup></label><br></br>
                        <select className="drop">
                            <option disabled selected value={''}>--Select Your Religion--</option>
                            <option value={'hindu'}>Hindu</option>
                            <option value={'islam'}>Islam</option>
                            <option value={'sikh'}>Sikh</option>
                            <option value={'other'}>Other</option>
                        </select>
                    </div>
                    <div class="a">
                        <label>Category<sup>*</sup></label><br></br>
                        <select className="drop">
                            <option disabled selected value={''}>--Select Your Category--</option>
                            <option value={'general'}>General</option>
                            <option value={'obc'}>OBC</option>
                            <option value={'st'}>ST</option>
                            <option value={'sc'}>SC</option>
                            <option value={'other'}>Other</option>
                        </select>
                    </div>
                    <div class="a">
                        <label>Image<sup>*</sup></label><br></br>
                        <input type="file" name="image" id="image"></input>
                    </div>
                </div>



                <div id="main2">
                    <p id="line">Address</p><hr></hr>
                    <div class="a">
                        <label>Village<sup>*</sup></label><br></br>
                            <input type="text" name="village" placeholder="Enter Your Village" className="input"></input>
                    </div>
                    <div class="a"> 
                        <label>Post Office<sup>*</sup></label><br></br>
                            <input type="text" name="post office" placeholder="Enter Your Post Office" className="input"></input>
                    </div>
                    <div class="a">
                        <label>Police Station<sup>*</sup></label><br></br>
                            <input type="text" name="police station" placeholder="Enter Your Police Station" className="input"></input>
                    </div>


                    <div class="a">
                        <label>District<sup>*</sup></label><br></br>
                            <input type="text" name="district" placeholder="Enter Your District" className="input"></input>
                    </div>
                    <div class="a"> 
                        <label>State<sup>*</sup></label><br></br>
                            <input type="text" name="State" placeholder="Enter Your State" className="input"></input>
                    </div>
                    <div class="a">
                        <label>Pin Code<sup>*</sup></label><br></br>
                            <input type="number" name="pin code" placeholder="Enter Your Pin code" className="input"></input>
                    </div>
                </div>



                <div id="main3">
                    <p id="line">Educational Qualification</p><hr></hr>
                    <table>
                        <thead>
                            <tr>
                                <th><label>Degree<sup>*</sup></label><br></br></th>
                                <th><label>Board / University<sup>*</sup></label><br></br></th>
                                <th><label>Passing Year<sup>*</sup></label><br></br></th>
                                <th><label>Division<sup>*</sup></label><br></br></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" name="degree" placeholder="Enter Degree 1" className="t"></input></td>
                                <td><input type="text" name="board/university" placeholder="Board / University 1" className="t"></input></td>
                                <td><input type="text" name="passing year" placeholder="Enter Passing Year 1" className="t"></input></td>
                                <td><input type="text" name="division" placeholder="Enter Division 1" className="t"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" name="degree" placeholder="Enter Degree 2" className="t"></input></td>
                                <td><input type="text" name="board/university" placeholder="Board / University 2" className="t"></input></td>
                                <td><input type="text" name="passing year" placeholder="Enter Passing Year 3" className="t"></input></td>
                                <td><input type="text" name="division" placeholder="Enter Division 4" className="t"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" name="degree" placeholder="Enter Degree 3" className="t"></input></td>
                                <td><input type="text" name="board/university" placeholder="Board / University 3" className="t"></input></td>
                                <td><input type="text" name="passing year" placeholder="Enter Passing Year 3" className="t"></input></td>
                                <td><input type="text" name="division" placeholder="Enter Division 3" className="t"></input></td>
                            </tr>
                            <tr>
                                <td><input type="text" name="degree" placeholder="Enter Degree 4" className="t"></input></td>
                                <td><input type="text" name="board/university" placeholder="Board / University 4" className="t"></input></td>
                                <td><input type="text" name="passing year" placeholder="Enter Passing Year 4" className="t"></input></td>
                                <td><input type="text" name="division" placeholder="Enter Division 4" className="t"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            </>
        )
}

export default Form