// src/components/FAQSection.tsx
import { useState } from "react";
import { ChevronDown, ThumbsUp, MessageSquare, PlusCircle, Search } from "lucide-react";
import confetti from "canvas-confetti";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How do I register for the summit?",
    answer:
      "To register, click the “Register Now” button at the top of the page and complete the online form by providing your full name, organization, and contact details. Next, select your preferred ticket tier (Bronze, Silver, or Gold) and proceed to secure payment via credit card or bank transfer.",
  },
  {
    question: "What topics will be covered?",
    answer:
      "Our program features keynote presentations and breakout sessions on cutting-edge green hydrogen production methods, including PEM and alkaline electrolysis, as well as advanced Power-to-X fuel synthesis and storage solutions.",
  },
  {
    question: "Where is the summit held?",
    answer:
      "The summit takes place at the International Exhibition Centre in Marrakesh, located at Avenue Mohamed VI, just a 15-minute drive from Marrakech Menara Airport. Complimentary shuttle services run daily between major hotels and the venue, and on-site parking is available for private vehicles.",
  },
  {
    question: "Are there registration fees?",
    answer:
      "Yes, we offer three ticket tiers to suit different attendee needs: Bronze grants access to all keynote sessions and the exhibition hall; Silver adds entry to select workshops and networking lunches; Gold provides full access including VIP receptions, speaker meet-and-greets, and a gala dinner.",
  },
  {
    question: "Can I get a refund if I can’t attend?",
    answer:
      "Full refunds are available up to 30 days before the summit start date. Between 30 and 14 days, you may transfer your registration to another individual at no extra cost. Refunds requested within 14 days of the event will incur a 25% administrative fee.",
  },
];

export default function FAQSection() {
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);
  const [votes, setVotes] = useState<Record<number, boolean>>({});
  const [feedbackGiven, setFeedbackGiven] = useState<Record<number, boolean>>({});

  const items = faqs.map((faq, idx) => ({ ...faq, id: idx }));
  const filtered = items.filter(
    ({ question, answer }) =>
      question.toLowerCase().includes(search.toLowerCase()) ||
      answer.toLowerCase().includes(search.toLowerCase())
  );

  const Highlight = ({ text }: { text: string }) => {
    if (!search) return <>{text}</>;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === search.toLowerCase() ? (
            <mark key={i} className="bg-yellow-200 dark:bg-yellow-600 px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleFeedback = (id: number) => {
    if (!feedbackGiven[id]) {
    //   const response = prompt("Please tell us how we can improve this answer:");
    //   if (response) {
    //     setFeedbackGiven({ ...feedbackGiven, [id]: true });
    //     alert("Thank you for your feedback!");
    //   }
    }
  };

  const handleAddQuestion = () => {
    // const newQuestion = prompt("Enter your question:");
    // if (newQuestion) {
    //   alert("Your question has been submitted for review. Thank you!");
    // }
  };

  return (
    <section id="faq" className="py-24 bg-base-main dark:bg-base-card transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className=" text-center text-base-text dark:text-white mb-8
        
        font-bold text-3xl md:text-4xl text-base-text
        ">
          Frequently Asked Questions
        </h2>
<div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
        {/* Live Search with icon */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-muted dark:text-white/50" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-4 rounded-xl border border-base-border dark:border-white/20 bg-base-card dark:bg-white/5 text-base-text dark:text-white focus:outline-none focus:ring-1 focus:ring-teal-300 transition"
          />
        </div>

        <div className="space-y-6">
          {filtered.length > 0 ? (
            filtered.map(({ id, question, answer }) => {
              const open = openId === id;
              return (
                <div key={id} className="overflow-hidden rounded-xl border border-base-border dark:border-white/20 shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenId(open ? null : id)}
                    id={`header-${id}`}
                    aria-expanded={open}
                    aria-controls={`panel-${id}`}
                    className="w-full flex justify-between items-center px-6 py-4 bg-base-card bg-white/10 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-teal-300 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-base-text dark:text-white">
                      <Highlight text={question} />
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-base-muted dark:text-white transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    id={`panel-${id}`}
                    role="region"
                    aria-labelledby={`header-${id}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ${open ? "py-4 max-h-screen opacity-100" : "py-0 max-h-0 opacity-0"}`}
                  >
                    <p className="text-base text-base-muted dark:text-white/90 leading-relaxed">
                      <Highlight text={answer} />
                    </p>

                    {/* Helpful vote + feedback */}
                    <div className="mt-4 flex items-center gap-4">
                      <button
                        onClick={() => {
                          if (!votes[id]) {
                            setVotes({ ...votes, [id]: true });
                            confetti({ particleCount: 50, spread: 60 });
                          }
                        }}
                        disabled={!!votes[id]}
                        className="flex items-center gap-1 text-teal-400 hover:text-teal-300 transition"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        {votes[id] ? "Thanks!" : "Helpful?"}
                      </button>
                      <button
                        onClick={() => handleFeedback(id)}
                        disabled={!!feedbackGiven[id]}
                        className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition"
                      >
                        <MessageSquare className="w-4 h-4" />
                        {feedbackGiven[id] ? "Feedback sent" : "Give feedback"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-base-muted dark:text-white/80">No FAQs match your search.</p>
          )}
        </div>

        {/* Add Question Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleAddQuestion}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-300/20 text-white rounded-xl hover:opacity-90  hover:bg-teal-300/30 backdrop-blur-sm transition-all duration-300"
          >
            <PlusCircle className="w-5 h-5" />
            Add a Question
          </button>
        </div>
      </div>
    </section>
  );
}
