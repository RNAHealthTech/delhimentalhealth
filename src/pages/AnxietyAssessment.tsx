import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  "Feeling nervous, anxious or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it is hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen"
];

const options = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 }
];

const AnxietyAssessment: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOptionChange = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const total = answers.reduce((acc, curr) => acc + curr, 0);
    setScore(total);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getResult = (score: number) => {
    if (score <= 4) return { 
      level: "Minimal Anxiety", 
      color: "text-green-600", 
      bg: "bg-green-50",
      description: "Your scores suggest minimal anxiety. It's normal to feel some worry occasionally. However, if these symptoms are persistent or concerning to you, professional consultation can provide more insight."
    };
    if (score <= 9) return { 
      level: "Mild Anxiety", 
      color: "text-blue-600", 
      bg: "bg-blue-50",
      description: "Your scores indicate mild anxiety symptoms. While they may not be severely impacting your daily life, it might be helpful to monitor your stress levels and practice relaxation techniques."
    };
    if (score <= 14) return { 
      level: "Moderate Anxiety", 
      color: "text-orange-600", 
      bg: "bg-orange-50",
      description: "Your scores suggest moderate levels of anxiety. This may be affecting your daily functioning or quality of life. It is recommended to consult with a mental health professional for a formal evaluation."
    };
    return { 
      level: "Severe Anxiety", 
      color: "text-red-600", 
      bg: "bg-red-50",
      description: "Your scores indicate severe anxiety symptoms. These symptoms are likely significantly impacting your life. Please consider reaching out to a mental health specialist or Dr. Pratik Kumar for professional support and a comprehensive assessment."
    };
  };

  const result = getResult(score);
  const isComplete = answers.every(a => a !== -1);

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Check Your Anxiety | GAD-7 Assessment | Dr. Pratik Kumar</title>
        <meta name="description" content="Take the GAD-7 anxiety self-assessment tool. A scientifically validated screening questionnaire for generalized anxiety disorder." />
        <meta name="keywords" content="anxiety test, GAD-7, mental health assessment, Dr. Pratik Kumar, psychiatrist Delhi" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-6 transition-colors font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-teal-700 px-8 py-10 text-white relative">
            <h1 className="text-3xl font-bold mb-4">Check Your Anxiety (GAD-7)</h1>
            <p className="text-teal-50 opacity-90 max-w-2xl">
              Over the last 2 weeks, how often have you been bothered by any of the following problems?
            </p>
            <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
              <AlertCircle size={100} />
            </div>
          </div>

          <div className="p-8">
            {showResult ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className={`${result.bg} border-l-4 ${result.color.replace('text', 'border')} p-6 rounded-r-lg`}>
                  <div className="flex items-center mb-4">
                    <CheckCircle className={`${result.color} mr-3 h-8 w-8`} />
                    <h2 className={`text-2xl font-bold ${result.color}`}>Scale Score: {score}/21</h2>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{result.level}</h3>
                  <p className="text-gray-700 leading-relaxed italic">
                    {result.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Info className="mr-2 text-teal-600 h-5 w-5" /> What does this mean?
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This assessment is a screening tool, not a clinical diagnosis. It provides information about the severity of your anxiety symptoms over the past two weeks. A higher score indicates more severe symptoms.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <h3 className="font-bold text-teal-900 mb-3">Next Steps</h3>
                    <ul className="text-sm text-teal-800 space-y-2">
                    <li>• Consult Dr. Pratik Kumar for Expert Opinion</li>
                    <li>• Keep a journal of your symptoms</li>
                    <li>• Practice daily mindfulness or meditation</li>
                    <li>• Discuss these results with a healthcare provider</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button 
                    onClick={() => {
                        setAnswers(new Array(questions.length).fill(-1));
                        setShowResult(false);
                    }}
                    className="flex-1 px-6 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-all text-center"
                  >
                    Retake Assessment
                  </button>
                  <Link 
                    to="/contact"
                    className="flex-1 px-6 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-all text-center shadow-lg hover:shadow-xl"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {questions.map((q, qIdx) => (
                  <div key={qIdx} className="pb-8 border-b border-gray-100 last:border-0">
                    <p className="text-lg font-medium text-gray-900 mb-5">
                      <span className="text-teal-600 mr-2 font-bold">{qIdx + 1}.</span> {q}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      {options.map((opt) => (
                        <label 
                          key={opt.value}
                          className={`
                            relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all
                            ${answers[qIdx] === opt.value 
                              ? 'border-teal-600 bg-teal-50 text-teal-800 font-semibold' 
                              : 'border-gray-200 hover:border-teal-200 hover:bg-gray-50 text-gray-600'}
                          `}
                        >
                          <input 
                            type="radio" 
                            name={`q-${qIdx}`} 
                            className="sr-only"
                            checked={answers[qIdx] === opt.value}
                            onChange={() => handleOptionChange(qIdx, opt.value)}
                          />
                          <span className="text-sm">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-6">
                  <button 
                    disabled={!isComplete}
                    onClick={calculateScore}
                    className={`
                      w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg
                      ${isComplete 
                        ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-xl' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                    `}
                  >
                    {isComplete ? 'Show My Results' : 'Please Answer All Questions'}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-4 italic">
                    All data is processed locally. Your results are private and not stored on our servers.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2024 Dr. Pratik Kumar - Neuropsychiatrist. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AnxietyAssessment;
