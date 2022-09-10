import React from 'react'
import styles from './ComponentStyle.module.css'
import {
    Center,Button
    
  } from '@chakra-ui/react'
  import {BsTag} from "react-icons/bs"; 
import {TbCurrencyDollar} from "react-icons/tb";
const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index} className={styles.boxestodo}>
                <div className="box2">
            <Center height='50px'>
                <div style={{width:"30%"}}><h5  style={{color:"green",background:""}}>{todo} &nbsp;</h5></div>

<button style={{width:"5%",background:"",paddingLeft:'20%'}}><div className='icongrp'>< BsTag/></div></button>

<button style={{width:"5%",background:"",paddingLeft:'20%'}}><div className='icongrp'><TbCurrencyDollar/></div></button>

<div style={{width:"20%",marginTop:"10px",marginLeft:"40px"}}><strong>00:00:00</strong></div>
                <Button  bg='#03A9F4'  variant='solid' fontSize="13px" size="xs" mt="12px" ml='20px' borderRadius="5px" w='4%' color='white'>Start</Button>
                <Button onClick={() => deleteHandler(index)} bg='#03A9F4'  variant='solid' fontSize="13px" size="xs" mt="12px" ml='20px' mr='20px' borderRadius="5px" w='4%' color='white'>Delete</Button>
</Center>
      
                
            </div>
          
            </div>)}
        </div>
    )
}

export default TodoList