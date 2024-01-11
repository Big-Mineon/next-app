import { useEffect, useState } from "react";
import TextReadAnimation from "./textReadAnimation"
import { modalSentence } from "@/app/mokup"

export default function DescriptionBoard(){

  const [showComponent, setShowComponent] = useState('hide')
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const openingComponent = setTimeout(() => {
      setShowComponent('show');
    }, 100);
    const closingComponent = setTimeout(() => {
      setShowComponent('hide');
    }, 17000);
    return () => {
      clearTimeout(openingComponent);
      clearTimeout(closingComponent);
    }
  }, []);

  function modalContent() {
    if(currentIndex < modalSentence.length-1) {
      setCurrentIndex(currentIndex + 1);
    } 
  }

  useEffect(() => {
    const modalDescription = async () => {
      if(currentIndex === 0){
        const wait = (n: number) => new Promise(resolve => setTimeout(resolve, n))
        await wait(2500)
      }
      const delayOneSentence = setTimeout(modalContent, (1000 + 100*modalSentence[currentIndex].split(/\s+/).length));
      return () => clearTimeout(delayOneSentence);
    };
    modalDescription();
  }, [currentIndex]);

  return(<>
    <div className={`${showComponent === 'show' ? 'block' : 'hidden'}`}>
      <div className="animate-slide-up&down-description-modal fixed w-full h-full top-0 left-0">
        <div className="absolute w-full bottom-0">
          <div className="w-full p-3 laptop:w-3/5 h-40 min-h-md max-w-md laptop:mx-auto" >
            <div className="relative border border-solid rounded shadow h-full">
              <div className="flex w-full h-full bg-white bg-no-repeat bg-top bg-modal-background-image">
                <div className="absolute w-4 h-4 right-4 top-4">
                  <img src="/images/icons/expand.svg" alt="" />
                </div>
                <div className="flex justify-center w-full self-center text-lg3" >
                  <div className="mx-auto w-4/5">
                    <TextReadAnimation text={modalSentence[currentIndex]} />      
                  </div>
                </div>
                <div className="absolute w-full bottom-0"> 
                  <div className="w-full">
                    <div className="w-full flex">
                      <div className="flex">
                        <div className="flex px-2">
                          <img className="self-center" src="/images/icons/history.svg" alt="" />
                        </div>
                        <div className="flex self-center">
                          History
                        </div>
                      </div>
                      <div className="flex ml-auto">
                        <div className="flex self-center">
                          I want to type
                        </div>
                        <div className="p-2 flex">
                          <img className="self-center" src="/images/icons/keyboard.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}