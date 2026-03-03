
"use client"

import { useRef, useState } from "react";

export default function Home() {

  let dragId = useRef(0)
  const dragOverId = useRef(0)
  let arr = [{
    name: "akhil",
    email: "akhilvscode@gmail.com",
    place: "tvm"
  },
  {
    name: "guru",
    email: "guru@gmail.com",
    place: "kochi"
  }
    , {
    name: "rijo",
    email: "rijo#gmail.com",
    place: "kattada"
  }]

  const [data, setData] = useState(arr)

  let enterDrag = (index:number) => {

    dragId.current =index
    console.log(dragId.current);
    
  }

  let startDrag = (index:number) => {
    dragOverId.current = index
  }

  let drop = () => {

    const items = [...data]
    const dragItem = items[dragId.current]
    items.splice(dragId.current, 1)
    items.splice(dragOverId.current, 0, dragItem)
    dragId.current = 0
    dragOverId.current = 0
    console.log(items);
    
    setData(items)

  }

  return (
    <>

      <div className="flex justify-center h-screen items-center">

        <table className="w-2xl  " >
          <thead>
            <tr className="text-left p-3">
              <th>name</th>
              <th>age</th>
              <th>place</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((tr,idx) => (
                <tr draggable key={idx} className="text-left text-red-300 border-2 "
                  onDragStart={(e) => startDrag(idx)}
                  onDragEnter={(e) => enterDrag(idx)}
                  onDragEnd={(e) => drop()
                  }>
                  <td className="p-1">{tr.name}</td>
                  <td className="p-1">{tr.email}</td>
                  <td className="p-1">{tr.place}</td>
                </tr>
              ))
            }


          </tbody>
        </table>


      </div>

    </>
  );
}
