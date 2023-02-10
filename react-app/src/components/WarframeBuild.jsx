import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDrag } from 'react-dnd'
import BRM from '../images/BriefRespiteMod.webp'
import PDM from '../images/PowerDriftMod.webp'
import PCT from '../images/PrimedContinuityMod.webp'
import TRF from '../images/TransientFortitudeMod.webp'

export default function WarframeBuild(props) {
  
    const navigate = useNavigate();
    useEffect(() => {
        if(!props.loggedIn){
            props.flashMessage('You must be logged in to view this page', 'danger');
            navigate('/login');
        }
    })

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(event);

        let aura = event.target.aura.value;
        let exilus = event.target.exilus.value;
        let mod1 = event.target.mod1.value;
        let mod2 = event.target.mod2.value;
        let mod3 = event.target.mod3.value;
        let mod4 = event.target.mod4.value;
        let mod5 = event.target.mod5.value;
        let mod6 = event.target.mod6.value;
        let mod7 = event.target.mod7.value;
        let mod8 = event.target.mod8.value;

        let token = localStorage.getItem('token.');

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Authorization', `Bearer ${token }`)

        let requestBody = JSON.stringify*({aura, exilus, mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8})

        let response = await fetch("http://localhost:5000/api/build", {
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        })
        
        if (response.ok){
            let data = await response.json();
            props.flashMessage(`${data.aura} build has been created`, 'primary');
            navigate('/')
        } else {
            props.flashMessage("There was an issue, please try again", 'warning');
        }
    }

    
    // const [list, setList] = useState(props);
    // const [dragging, setDragging] = useState(false)
    // const dragItem = useRef();
    
    // const handleDragStart = (e, params) => {
    //     console.log('drag starting', params)
    //     dragItem.current = params;
    //     setDragging(true)
    // }
    
    // const getStyles = () => {
    //     if (dragItem.current.modI === id.modI && dragItem.current.itemI === id.itemI) {
    //         return "dnd-item current"
    //     }
    //     return "dnd-item"
    // }

    return (
    <>
    <div className='wrapper'> 
        <div className="Aura">Aura</div>
        <div className='Exilus'>Exilus</div>
        <div className="mod1">One</div>
        <div className="mod2">Two</div>
        <div className="mod3">Three</div>
        <div className="mod4">Four</div>
        <div className="mod5">Five</div>
        <div className="mod6">Six</div>
        <div className="mod7">Seven</div>
        <div className="mod8">Eight</div>
        <div className="Arcane1">Arc1</div>
        <div className="Arcane2">Arc2</div>
        
        <div  class="modpool">
            <img src={BRM} alt="" />
            <img src={PDM} alt="" />
            <img src={PCT} alt="" />
            <img src={TRF} alt="" />
         {/* <div className="drag-n-drop">
    //             {props.mods.map((mod, modI) => (
    //                 <div key={mod.name} className="dnd-group">
    //                     {mod.id.map((id, itemI) => (
    //                         <div draggable 
    //                         onDragStart={(e) => {handleDragStart(e, modI, )}} 
    //                         key={id} 
    //                         className={dragging?getStyles():"dnd-item"}>
    //                             {id}
                                
    //                         </div>
    //                     ))}
    //                 </div>
    //             ))}
                
    //         </div>
    //         <div className="drag-n-drop">
    //             {props.mods.map((mod, modI) => (
    //                 <div key={mod.name} className="dnd-group">
    //                     {mod.id.map((id, itemI) => (
    //                         <div key={id} className="dnd-item">
    //                             {id}
                                
    //                         </div>
    //                     ))}
    //                 </div>
    //             ))}
                
    //         </div>
    //         <div className="drag-n-drop">
    //             {props.mods.map((mod, modI) => (
    //                 <div key={mod.name} className="dnd-group">
    //                     {mod.id.map((id, itemI) => (
    //                         <div key={id} className="dnd-item">
    //                             {id}
                                
    //                         </div>
    //                     ))}
    //                 </div>
    //             ))}
                
    //         </div>
    //         <div className="drag-n-drop">
    //             {props.mods.map((mod, modI) => (
    //                 <div key={mod.name} className="dnd-group">
    //                     {mod.id.map((id, itemI) => (
    //                         <div key={id} className="dnd-item">
    //                             {id}
                                
    //                         </div>
    //                     ))}
    //                 </div>
    //             ))}
                
    //         </div> */}
     </div>
     <div className="build">
     <input type="submit" value="Create Build" className="btn btn-danger w-100" />
     </div>
     </div>
    </>
    // <>
    //     <div className="build">
    //         <form action="" onSubmit={handleSubmit}>
    //             <div className="form-group">
    //                 <input type="text" className='form-control my-3' name='mod1' />
    //                 <input type="text" className='form-control my-3' name='mod2' />
    //                 <input type="text" className='form-control my-3' name='mod3' />
    //                 <input type="text" className='form-control my-3' name='mod4' />
    //                 <input type="text" className='form-control my-3' name='mod5' />
    //                 <input type="text" className='form-control my-3' name='mod6' />
    //                 <input type="text" className='form-control my-3' name='mod7' />
    //                 <input type="text" className='form-control my-3' name='mod8' />
    //                 <input type="text" className='form-control my-3' name='aura' />
    //                 <input type="submit" value="Create Build" className="btn btn-success w-100" />
    //             </div>
                
    //         </form>
    //     </div>
    // </>
  )
}
