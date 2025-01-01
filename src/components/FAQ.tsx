import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: "Is this extension free?",
      answer: "Yes, the extension is completely free to use."
    },
    {
      question: "Which browsers are supported?",
      answer: "Currently, the extension is available for Google Chrome. Support for other browsers is coming soon."
    },
    {
      question: "Do you collect any user data?",
      answer: "No, we don't collect or store any personal data. All your information stays local on your device."
    },
    {
      question: "How do I report issues or suggest features?",
      answer: "You can report issues or suggest features through our GitHub repository."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
