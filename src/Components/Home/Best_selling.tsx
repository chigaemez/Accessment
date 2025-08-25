import { useEffect, useState } from 'react'
import type { Product, ProductResponse } from '../../Data/Type'

const Best_selling = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then((data: ProductResponse) => {
        console.log('Response', data) 
        setProducts(data.products) 
      })
  }, [])
  return (
    <div className='flex flex-col  my-[50px]   md:px-[90px] px-[10px]'>
      <h1 className='text-[16px] font-[700] font-popbold leading-[100%]'>
        Best Selling
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-3 place-items-center gap-[20px] mt-[20px]'>
        {products.map(product => (
          <div
            key={product.id}
            className='border w-full h-[236px] rounded-[12px] border-gray-200  p-[8px] bg-[#FFFFFF] '
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-[150px] md:object-cover  rounded-md'
            />
            <h2 className='text-[12px] font-PopRegular font-[400] leading-[100%] text-[#20262C] mt-[10px]'>
              {product.title.length > 30
                ? product.title.slice(0, 30).concat('...')
                : product.title}
            </h2>
            <p className='text-[14px] font-[700] font-popbold  text-[#20262C] leading-[100%] mt-[10px]'>
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Best_selling
