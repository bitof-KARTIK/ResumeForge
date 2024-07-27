import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
function ThemeColor() {
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", // Bright colors
    "#33FFA1", "#FF7133", "#71FF33", "#7133FF", "#FF3371", // Bright colors
    "#33FF71", "#3371FF", "#A1FF33", "#33A1FF", "#FF5733", // Bright colors
    "#FFD700", "#FF4500", "#32CD32", "#1E90FF", "#FF1493", // Bright colors
    "#8A2BE2", "#00CED1", "#FF6347", "#7FFF00", "#8B0000", // Bright colors
    "#00FF7F", "#4682B4", "#EE82EE", "#D2691E", "#FF69B4", // Bright colors
    "#2F4F4F", "#4B0082", "#800000", "#191970", "#2E8B57", // Dark colors
    "#556B2F", "#8B4513", "#000080", "#483D8B", "#8B008B", // Dark colors
    "#3B3B3B", "#696969", "#A9A9A9", "#2C2C2C", "#808080", // Dark colors
    "#B0E0E6", "#00FA9A", "#B22222", "#DAA520", "#5F9EA0", // Pastel colors
    "#FF7F50", "#6495ED", "#DC143C", "#40E0D0", "#ADFF2F", // Pastel colors
    "#DB7093", "#7B68EE", "#6B8E23", "#FF8C00", "#BA55D3"  // Pastel colors
];

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [selectedColor,setSelectedColor]=useState();
    const {resumeId}=useParams();
    const onColorSelect=(color)=>{
        setSelectedColor(color)
        setResumeInfo({
            ...resumeInfo,
            themeColor:color
        });
        const data={
            data:{
                themeColor:color
            }
        }
        GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
            console.log(resp);
            toast('Theme Color Updated')
        })
    }
  return (
    <Popover>
  <PopoverTrigger asChild>
  <Button variant="outline" size="sm" 
          className="flex gap-2" > <LayoutGrid/> Theme</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
    <div className='grid grid-cols-5 gap-3'>
        {colors.map((item,index)=>(
            <div 
            onClick={()=>onColorSelect(item)}
            className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor==item&&'border border-black'}
             `}
            style={{
                background:item
            }}>
            </div>
        ))}
    </div>
  </PopoverContent>
</Popover>
  )
}
export default ThemeColor