import React from "react";
import { useState } from 'react'
import Category from "./category";
import { ClientCart } from "./priceCart";
import Analysis from "./analysisCart";
import { sales, client, analysis } from "@/app/mokup";

export default function Sales(){

  const [showComponent, setShowComponent] = useState('hidden')

  let openingComponent: NodeJS.Timeout
  
  openingComponent = setTimeout(() => {
    setShowComponent('show')
  }, 1000)

  return(<>
    <div className={`${showComponent === 'show' ? 'opacity-1' : 'opacity-0'}`}>
      <div className='animate-slide-up-sales sales-part pb-16'>
            
        <div className='part-message laptop:w-3/4 w-full mobile:text-md2 tablet:text-lg4 laptop:text-lg3 font-light laptop:pr-3 pb-8'>
          Also, recent company changes show effect, the company is experiencing strong growth...
        </div>

        <div className='-m-3 mb-4'>
          <div className="flex flex-col flex-wrap tablet:flex-row">
            <div className='order-2  laptop:order-1 w-full tablet:w-2/4 laptop:w-1/4 '>
              <Category 
                title={sales.title} 
                description={sales.description} 
                mark={sales.mark}
              />
            </div>

            <div className="order-1 laptop:order-2 w-full laptop:w-2/4 p-3">
              <ClientCart 
                image={client.image}
                client={client.client}
                churn={client.churn}
              />
            </div>

            <div className="order-3 w-full h-full laptop:w-1/4 tablet:w-2/4">
              <div className="p-3 w-full h-full">
                <div className='w-full desktop:h-fix-170px 2xl:h-fix-200px'>
                  <div className='h-full'>
                    <div className='flex h-full'>
                      <div className='w-3/5 pr-4'>
                        <div>
                          AI Helped automate solid part of Salesforce client onboarding
                        </div>
                        <div className="hidden desktop:block">
                          <div className='flex h-full'>
                            <div className='w-4 m-1'>
                              <img
                                className=''
                                src='/images/Vector.svg'
                              />
                            </div>
                            <div className='text-sm3 text-light'>
                              From analysis of 864 HubSport funnels
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-2/5 bg-indigo text-lg2 font-medium text-white p-4 text-center'>
                        18<span className='text-md4'>%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-light my-1'></div>
                <div className='w-full desktop:h-fix-170px 2xl:h-fix-200px'>
                  <div className='h-full'>
                    <div className='flex h-full'>
                      <div className='w-3/5 object-bottom pr-4'>
                        Time to close a client decreased significantly from a month before
                      </div>
                      <div className='w-2/5 bg-cyan p-4 text-center'>
                        <div className='text-md1 font-light text-white'>
                          18.4<span className='text-md4'>h</span>
                        </div>
                        <div className='text-sm4 font-light text-white'>
                          Was 22.4h
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className='flex flex-wrap -m-3'>
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