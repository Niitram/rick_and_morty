import React from 'react'
import styles from "./Formulario.module.css";
import { useState } from 'react';
import {validateEmail , validatePassword} from './validation';
import RaMSF from "../../assets/imgs/rickandmortysinfondo.png"
import { addUser } from '../../redux/actions';
import { useDispatch } from 'react-redux';


function Formulario({login}) {
  const dispatch=useDispatch()

  const handleSubmit =async()=>{
    await dispatch(addUser(userData))
    login()
  }

  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({email: '', password: ''})
  const handleInputChange =(e)=>{
    setUserData({...userData, [e.target.name]:e.target.value})
    validatePassword({...userData, [e.target.name]:e.target.value}, setErrors)
    validateEmail({...userData, [e.target.name]:e.target.value}, setErrors)
  }

  const submitHandler =(e)=>{
    e.preventDefault()
    handleSubmit()
  }
  return (
    <div className={styles.container}>

      <div className={styles.containerLeft} >
        <h1>Welcome</h1>
      </div>

      <div className={styles.containerRight} >
        <div className={styles.containerForm}>

          <img src={RaMSF} alt="" />
          
          <h3>Collectibles cards and Details</h3>
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="email">Email: </label>
              <input 
                className={errors.email ? styles.danger : styles.success } 
                onChange={handleInputChange} 
                name='email' 
                type="text" 
                value={userData.email} 
              />
              {errors.email && <span className={styles.dangerColor}> *Campo obligatorio</span>}
            </div>

            <div>
              <label htmlFor="password">Password: </label>
              <input 
                className={errors.password ? styles.danger : styles.success } 
                onChange={handleInputChange} 
                name='password' 
                type="text" 
                value={userData.password} 
              />
              {errors.password && <span className={styles.dangerColor}> *Campo obligatorio</span>}
            </div>

            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario