import React from 'react'
import { useState, useEffect } from 'react'
import Category from './category'
import { finance, analysis, price } from '@/app/mokup'
import Analysis from './analysisCart'
import {PriceCart} from './priceCart'

export default function Finance(){

  const [showComponent, setShowComponent] = useState('hide')
  const [showAnalysis, setShowAnalysis] = useState('hide')
  let openingComponent: NodeJS.Timeout
  
  openingComponent = setTimeout(() => {
    setShowComponent('show')
  }, 100)

  useEffect(() => {
    const updateContentWaiting = async () => {
      const wait = (n: number) => new Promise(resolve => setTimeout(resolve, n))
      await wait(14000)
      setShowAnalysis('show')
    };
    updateContentWaiting();
  }, []);

  return(<>
    <div className={`${showComponent === 'show' ? 'opacity-1' : 'opacity-0'}`}>
      <div className='animate-slide-up-finance finance-part pb-16'>
        <div className='part-message flex laptop:w-3/4 w-full mobile:text-md2 tablet:text-lg4 laptop:text-lg3 font-light laptop:pr-3 pb-8'>
          {finance.greeting}
        </div>
        <div className="flex flex-col flex-wrap tablet:flex-row -m-3 mb-4">
          <div className="order-2 laptop:order-1 w-full tablet:w-2/4 laptop:w-1/4 p-3">
            <Category
              title={finance.title}
              description={finance.description}
              mark={finance.mark}
            />
          </div>
          <div className="relative order-1 laptop:order-2 w-full laptop:w-2/4 justify-items-stretch p-3">
            <PriceCart 
              image={price.image}
              alt={price.alt}
              price={price.price}
            />
          </div>
          <div className="order-3 w-full laptop:w-1/4 tablet:w-2/4 p-3">
            <Analysis 
              percent={analysis[0].percent}
              content={analysis[0].content}
              description={analysis[0].description}
              image={analysis[0].image}
            />
          </div>
        </div>
        <div className={`${showAnalysis === 'hide' ? 'h-0 opacity-0' : ' animate-slide-down-analysis-content overflow-hidden'}`}>
          <div className='flex flex-wrap -m-3 animate-slide-down-analysis-content'>
            {analysis.map((item, index) => (index!==0 &&
              (<div key={index} className=' w-full laptop:w-1/4 tablet:w-2/4'>
                <div className="p-3">
                  <Analysis 
                    percent={item.percent}
                    content={item.content}
                    description={item.description}
                    image={item.image}
                  />
                </div>
              </div>)
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}