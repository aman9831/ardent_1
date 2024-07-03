import React from "react";
import { useState } from "react";
import './css/Form.css';
import { ChakraProvider } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
  import { Button} from '@chakra-ui/react'
  import { useRef } from "react";
  import Swal from 'sweetalert2'
  import { addUser } from "../service/api.js";

const Form = () =>{
    const [input, setInput] = useState('')
    const [mobile, setMobile] = useState('')
    const [image, setImage] = useState('');
    const [adhar, setAdhar] = useState('')

    /*Assign the value*/
    const [user, setUser] = useState({
        name:'',
        mobile:'',
        adhar:'',
        image:''
    })
    /* Assign the value End */

    const handleInputChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value })
        setInput(e.target.value)
        console.log(user)
    }

    const handleMobile = (e) =>{
        setUser({...user, [e.target.name] : e.target.value })
        setMobile(e.target.value);
        console.log(user)
    }

    const handleImage = (e) =>{
        setUser({...user, image: e.target.files[0] })
        setImage(e.target.filename)
    }

    const handleAdhar = (e) =>{
        setUser({...user, [e.target.name] : e.target.value })
        setAdhar(e.target.value)
        console.log(user)
    }

    const isError = input === ''
    const isErrorMobile = mobile === ''
    const isErrorImage = image === ''
    const isErrorAdhar = adhar === ''

    /* focus variable */
    const nameValid = useRef(null)
    const validMobile = useRef(null)
    const validAdhar = useRef(null)
    const imageValid = useRef(null)

    const submitData = async(e) =>{
        e.preventDefault()
        const {name, mobile, adhar, image} = user
        if(!name){
            alert("Enter Your Name!")
            nameValid.current.focus()
        }
        else if(!mobile){
            alert("Enter Your Mobile!")
            validMobile.current.focus()
        }
        else if(mobile.length !== 10){
            alert("Enter 10 Digit Mobile Number!")
            validMobile.current.focus()
        }
        else if(!adhar){
            alert("Enter Your Adhar!")
            validAdhar.current.focus()
        }
        else if(!image){
            alert("Uplaod Your Image!")
            imageValid.current.focus()
        }
        else{
            const formData = new Form()
            formData.append('image', user.image, user.image.name)
            formData.append('name', user.name)
            formData.append('mobile', user.mobile)
            formData.append('adhar', user.adhar)

            const res = await addUser(formData)

            if(res.status === 201){
                Swal.fire({
                    title: res.data,
                    text: "Your Form succesffully submitted!",
                    icon: "success",
                  });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        }
    }
    
    return(
        <>
            <ChakraProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <form>
                                <div className="form pl-3 pr-3">
                                    <h6 className="pt-3">User Registration Form</h6><hr></hr>

                                    <FormControl isInvalid={isError}>
                                        <FormLabel fontSize={'14px'}>Name <sup><span style={{color:'red'}}>*</span></sup></FormLabel>
                                        <Input 
                                            type='text' 
                                            name="name"
                                            ref={nameValid}
                                            value={input} 
                                            placeholder="Enter Your Name"
                                            onChange={handleInputChange}   
                                        />
                                        {!isError ? (
                                            <FormHelperText>
                                                
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>This Filed is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isInvalid={isErrorMobile} mt={4}>
                                        <FormLabel fontSize={'14px'}>Mobile Number <sup><span style={{color:'red'}}>*</span></sup></FormLabel>
                                        <Input 
                                            type='text' 
                                            name="mobile"
                                            ref={validMobile}
                                            value={mobile} 
                                            placeholder="Enter Your Name"
                                            onChange={handleMobile}   
                                        />
                                        {!isErrorMobile ? (
                                            <FormHelperText>
                                                
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>This Filed is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isInvalid={isErrorAdhar} mt={4}>
                                        <FormLabel fontSize={'14px'}>Adhar Number <sup><span style={{color:'red'}}>*</span></sup></FormLabel>
                                        <Input 
                                            type='text' 
                                            name="adhar"
                                            ref={validAdhar}
                                            value={adhar} 
                                            placeholder="Enter Your Name"
                                            onChange={handleAdhar}   
                                        />
                                        {!isErrorAdhar ? (
                                            <FormHelperText>
                                                
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>This Filed is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isInvalid={isErrorImage} mt={4}>
                                        <FormLabel fontSize={'14px'}>Image <sup><span style={{color:'red'}}>*</span></sup></FormLabel>
                                        <Input 
                                            type='file' 
                                            name="image"
                                            ref={imageValid}
                                            value={image} 
                                            placeholder="Enter Your Name"
                                            onChange={handleImage}   
                                        />
                                        {!isErrorImage ? (
                                            <FormHelperText ml={2}>
                                                <span style={{color:'green'}}>Image Uploaded</span>
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>This Filed is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <div className="conatiner">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-block float-right">
                                                    <Button colorScheme='red' style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', marginRight:'10px'}}>Reset </Button>
                                                    <Button onClick={submitData} colorScheme='blue' style={{boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>Submit </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}

export default Form