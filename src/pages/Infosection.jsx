import React from 'react'
import { FaShippingFast, FaHeadset, FaShieldAlt, FaGift, FaMoneyCheckAlt, FaUndo } from 'react-icons/fa'

function Infosection() {
  const infoItems = [
    {
      Icon: FaShippingFast,
      title: 'Fast Shipping',
      description: 'Get your orders delivered quickly and safely.'
    },
    {
      Icon: FaHeadset,
      title: '24/7 Support',
      description: 'We are here to help you anytime.'
    },
    {
      Icon: FaShieldAlt,
      title: 'Secure Payment',
      description: 'Your payment information is safe with us.'
    },
    {
      Icon: FaGift,
      title: 'Special Offers',
      description: 'Enjoy discounts and special deals.'
    },
    {
      Icon: FaMoneyCheckAlt,
      title: 'Money Back',
      description: 'Hassle-free returns within 30 days.'
    },
    {
      Icon: FaUndo,
      title: 'Easy Returns',
      description: 'Simple and fast returns process.'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {infoItems.map(({ Icon, title, description }, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
        >
          <Icon className="text-red-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      ))}
    </div>
  )
}

export default Infosection
