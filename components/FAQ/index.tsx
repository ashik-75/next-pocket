import faqData from "./faqData";

function Card({ question, answer }: any) {
  return (
    <div className="space-y-2">
      <h2 className="font-bold text-gray-700">{question}</h2>
      <p className="text-sm text-gray-700">{answer}</p>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-medium md:text-3xl">
            Frequently asked questions
          </h3>
          <p className="text-lg text-gray-700">
            If you have anything else you want to ask, reach out to us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {faqData.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
