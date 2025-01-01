import {useState} from "react";
import { Button } from "@material-tailwind/react";

export default function LandingPage() {
  const [activeKey , setActiveKey] = useState(0);

  const Tabs = [
    {
      tabName : "Tab 1",
      key : '0',
      element : <h1>This is Tab1</h1>
    },
    {
      tabName : "Tab 2",
      key : '1',
      element : <h1>This is Tab2</h1>
    },
    {
      tabName : "Tab 3",
      key : '2',
      element : <h1>This is Tab3</h1>
    },
    {
      tabName : "Tab 4",
      key : '3',
      element : <h1>This is Tab4</h1>
    }
  ]
  
  return (
    <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="h-96 w-1/2 flex flex-col">
        <div className="flex items-center w-full h-20 justify-start"> 

          {
           Tabs.map((tab)=>{
            return <Button key={tab.key} onClick={()=>setActiveKey(tab.key)} style={{backgroundColor : tab.key == activeKey ? 'green' : 'blue' , marginLeft : "10px"}} > {tab.tabName} </Button>
           }) 
          }
          
        </div>

        <div className="h-full w-full">
          {Tabs.map((tab)=>{
            return tab.key == activeKey ? tab.element : <></>
          })}
        </div>
      </div>
    </div>
  )
}

