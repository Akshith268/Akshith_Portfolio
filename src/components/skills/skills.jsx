import React from 'react'
import './skills.scss';
import { useState,useEffect } from 'react'
import {motion,useAnimation} from 'framer-motion'

export const Skill = ()=>{
  const [animation,setAnimation]=useState(false);
      const controls=useAnimation();

      useEffect(()=>{
         const handlescroll=()=>{
         if(window.scrollY>800&&!animation){
            setAnimation(true);
            controls.start("animate");
         }
      };
      window.addEventListener("scroll",handlescroll);
      return()=>{
         window.removeEventListener("scroll",handlescroll);
      };
      }
      ,[controls,animation]);
     
      const textvariants={
        initial:{
           y:-200,
           opacity:0
        },
    
        animate:{
           y:0,
           opacity:1,
           transition:{
           duration:1,
           staggerchildren:0.5
           }
        },
    }

    const headingvariant={
      initial:{
         y:-100,
         opacity:0
      },
  
      animate:{
         y:0,
         opacity:1,
         transition:{
         duration:0.7,
         staggerchildren:0.5
         }
      },
  }

  const middlelinevariants={
    initial:{
       x:-100,
       opacity:0.2
    },

    animate:{
       x:0,
       opacity:1,
       transition:{
       duration:1,
       staggerchildren:0.5
       }
    },
}
  

    // async function fetchLeetCodeStats() {
    //   try {
    //     const response = await fetch('https://leetcode.com/Akshith268/');
    //     if (response.ok) {
    //       const data = await response.json();
    //       // Extract the necessary information (e.g., number of solved problems) from data
    //       const numberOfProblemsSolved = data.user_num_solved;
    //       return numberOfProblemsSolved;
    //     } else {
    //       throw new Error('Failed to fetch LeetCode statistics');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching LeetCode statistics:', error);
    //     return null;
    //   }
    // }
    

  return (
    <div>
        <motion.div className='heading' variants={headingvariant} initial='initial' animate={controls} >
              Skills
        </motion.div>
        
        <div className='second'>
            <motion.div className='competitive' variants={textvariants} initial='initial' animate={controls}>
              <motion.h1 >Competitive Programming</motion.h1>

              <motion.div className='cplist' variants={textvariants} initial='initial' animate={controls}>
                <div className='leetcode item'>
                     <a href="https://leetcode.com/Akshith268/">- Leetcode</a>
                     <br />
                     {/* <ul>
                      <li>
                        Problems solved : 158
                      </li>
                     </ul> */}
                </div>
                <div className='codechef item'>
                  <a href="https://www.codechef.com/users/akshith_reddy1">- Codechef</a>
                  <br />
                  {/* <ul>
                    <li>
                      problems solved : 100+
                    </li>
                  </ul> */}
                </div>
                <div className='codeforces item'>
                  <a href="https://codeforces.com/profile/G.Akshith">- Codeforces</a>
                  <br />
                </div>
          
              </motion.div>
            </motion.div>

              <motion.div className='middleline'>
                  
              </motion.div>
              <motion.div className='development' variants={textvariants} initial='initial' animate={controls}>
                <motion.h1>Development Projects</motion.h1>
                <motion.div className='devlist' variants={textvariants} initial='initial' animate={controls} >
                  <div className=' item'>
                    <a href="https://github.com/Akshith268/tailorconnect/tree/main/mern-projects">Tailor Connect
                      <br />
                    <p>
                        A web application for tailors to connect with customers<br />
                        Technologies used : React, Node, Express, MongoDB,OpenCage

                    </p>
                      
                    </a>
                    <br />
                  </div>
                  <div className='item'>
                    <a href="">Portfolio
                      <br />
                      <p>My personal portfolio
                        <br />
                        Technologies used : React, Framer Motion, Sass
                      </p>
                    </a>
                  </div>
                  <br />
                  <div className='item'>
                    <a href="https://github.com/namanmuktha/co-de-bug">MediSearch
                      <br />
                      <p>A MERN-search engine for searching medicines
                        <br />
                        Technologies used : Advanced React, Node, Express, 
                      </p>
                    </a>
                  </div>

                </motion.div>
              </motion.div>
        </div>


    </div>
  )
}

// import React, { useCallback } from 'react';
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
// } from 'reactflow';
 
// import 'reactflow/dist/style.css';
 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
// export const Skill=()=> {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges],
//   );
 
//   return (
//     <div style={{ width: '100vw', height: '100vh',}}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//       >
//         <Controls />
//         <MiniMap />
//         <Background gap={12} size={1} />
//       </ReactFlow>
//     </div>
//   );
// }
