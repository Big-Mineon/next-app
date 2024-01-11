import { capitalizeFirstWord } from "@/app/utilize/sentence"

interface AnalysisProps {
  percent: number,
  content: string[],
  description: string,
  image: string,
}

export default function Analysis(props: AnalysisProps){
  const content:string[] = props.content
  return(<>
    <div 
      className='relative mb-2' 
      style={{ 
        backgroundImage: `url(${props.image})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '100%', 
        height: '180px' 
      }}
    >
      <div className='absolute p-4 w-2/3 top-2/4 -translate-y-2/4'>
        <div className=' text-lg1 font-medium'>
          {props.percent}
          <span className="text-lg3">%</span>
        </div>
        {content.map((item, index) => (
          <div key={index} className=' text-sm2'>
            {capitalizeFirstWord(item)}
          </div>
        ))}
      </div>
    </div> 
    <div>
      {capitalizeFirstWord(props.description)}
    </div>
  </>)
}