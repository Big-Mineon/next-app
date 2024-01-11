interface PriceProps {
  image: string,
  alt: string,
  price: number,
}

interface ClientProps {
  image: string,
  client: number,
  churn: number,
}

const PriceCart = (props: PriceProps) => {
  return(<>
    <img
      className="w-full h-auto  justify-self-auto"
      src={props.image}
      alt={props.alt}
    />
    <div className='text-slg absolute p-4 bottom-0 text-blue font-medium'>
      ${props.price.toLocaleString()}
    </div> 
  </>)
}

const ClientCart = (props: ClientProps)=>{
  return(<>
    <div className="relative justify-items-stretch">
      <img
        className="w-full justify-self-auto h-full object-cover"
        src={props.image}
        alt="Description of the image"
      />
      <div className='absolute  top-0 mobile:p-2 tablet:p-8 w-full h-full'>
        <div className='relative border-b h-2/4'>
          <div className='absolute top-0 text-sm3 font-medium text-white'>
            Number of Clients
          </div>
          <div className='absolute bottom-0 right-0 text-slg font-medium text-white'>
            {props.client}
          </div>
        </div>
        <div className='relative h-2/4'>
          <div className='absolute top-0 text-sm3 font-medium text-white'>
            Churn
          </div>
          <div className='absolute bottom-0 right-0 text-slg font-medium text-white'>
            {props.churn}<span className="text-lg2">%</span>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export{
  PriceCart,
  ClientCart
}