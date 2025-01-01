import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    question: "What is your product/service?",
    answer: "Our product/service is [brief description]. It helps [target audience] to [solve problem/achieve goal] by [key features/benefits]."
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible pricing plans to suit different needs. Our basic plan starts at [price], and we also offer [other plan names] for more advanced features. You can find detailed pricing information on our pricing page."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a [length of time] free trial so you can experience the full benefits of our product/service before committing. No credit card is required to start your trial."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply click the 'Sign Up' button, create an account, and you'll be guided through a quick setup process. If you need any help, our support team is always available to assist you."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support to ensure you have the best experience with our product/service. This includes [list support channels, e.g., email, live chat, phone support, knowledge base, video tutorials, etc.]. Our support team is available [support hours/days]."
  }
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}

