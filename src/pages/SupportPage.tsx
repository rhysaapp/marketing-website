import { Helmet } from 'react-helmet-async'

const faqs = [
  {
    question: 'Does Rhysa require an account?',
    answer:
      'No. Rhysa works without any account or sign-up. Just download the app and start breathing. Your privacy is important to us, so we never ask for personal information.',
  },
  {
    question: 'Is my data stored anywhere?',
    answer:
      'Your preferences are stored locally on your device only. We do not collect, store, or transmit any data to external servers. Everything stays on your iPhone.',
  },
  {
    question: 'What breathing exercises are included?',
    answer:
      'Rhysa includes four breathing exercises: Deep Breathing (4-4 pattern), Box Breathing (4-4-4-4 pattern), 4-7-8 Breathing, and Coherent Breathing (5-5 pattern). Each exercise is designed to help you find different kinds of calm and focus.',
  },
  {
    question: 'Is Rhysa free?',
    answer:
      "Yes, Rhysa is completely free to use. All four breathing exercises are available at no cost. There are no ads, no subscriptions, and no hidden fees.",
  },
  {
    question: 'Will there be premium features?',
    answer:
      'In the future, we may introduce additional breathing exercises as a premium option. If we do, it will be a one-time purchase to unlock premium exercises—no subscriptions. The core app will always remain free.',
  },
  {
    question: 'Does Rhysa work offline?',
    answer:
      'Yes. Rhysa is designed to work completely offline. You can practice breathing exercises anywhere, anytime, without an internet connection.',
  },
  {
    question: 'Which devices does Rhysa support?',
    answer:
      'Rhysa is available for iPhone running iOS 18 or later. We focus on one platform to ensure the best possible experience.',
  },
]

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support - Rhysa</title>
        <meta
          name="description"
          content="Get help with Rhysa. Find answers to common questions about our breathing app or contact us directly."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Support - Rhysa" />
        <meta
          property="og:description"
          content="Get help with Rhysa. Find answers to common questions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rhysa.app/support" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Support - Rhysa" />
        <meta
          name="twitter:description"
          content="Get help with Rhysa. Find answers to common questions."
        />
      </Helmet>

      <div className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-100">
            Support
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            We're here to help. Check out the frequently asked questions below to find answers to common questions.
          </p>

          {/* FAQ section */}
          <section className="mt-16">
            <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-100">
              Frequently asked questions
            </h2>

            <div className='mt-8'>
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="py-2">
      <div className="rounded-xl p-6 border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 hover:dark:bg-neutral-800">
        <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {question}
        </span>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">{answer}</p>
      </div>
    </div>
  )
}
