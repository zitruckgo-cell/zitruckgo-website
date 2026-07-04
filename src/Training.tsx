import { Button } from './components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Clock, Users, Award, Download, BookOpen, AlertCircle, Play, Check, Shield, Zap } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useState } from 'react';
import { toast } from 'sonner';

const VideoCard = ({ video, isCompleted, onToggleComplete }: any) => (
  <div className={`bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow ${isCompleted ? 'border-green-200 bg-green-50/30' : 'border-gray-200'}`}>
    <div className="relative bg-black aspect-video flex items-center justify-center">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
      />
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-sm flex-1">{video.title}</h3>
        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{video.duration}</span>
          <button
            onClick={() => onToggleComplete(video.videoId)}
            className={`p-1 rounded transition-colors ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}
          >
            <Check className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600">{video.description}</p>
    </div>
  </div>
);

export default function Training() {
  const [activeTab, setActiveTab] = useState('videos');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);

  const isVideoCompleted = (id: string) => completedVideos.includes(id);
  const handleToggleVideoComplete = (videoId: string) => {
    if (isVideoCompleted(videoId)) {
      setCompletedVideos(completedVideos.filter(v => v !== videoId));
      toast.success('Marked as incomplete');
    } else {
      setCompletedVideos([...completedVideos, videoId]);
      toast.success('Great! Video marked as completed');
    }
  };

  const quizQuestions = [
    {
      id: 1,
      question: 'What is the minimum following distance recommended for truck drivers in normal, dry conditions?',
      options: [
        { id: 'a', text: '2 seconds' },
        { id: 'b', text: '3 seconds' },
        { id: 'c', text: '4 seconds (minimum)', correct: true },
        { id: 'd', text: '5 seconds' },
      ],
    },
    {
      id: 2,
      question: 'Which of the following is NOT one of the five keys to the Smith System of defensive driving?',
      options: [
        { id: 'a', text: 'Aim high in steering' },
        { id: 'b', text: 'Keep your eyes moving' },
        { id: 'c', text: 'Adjust your mirrors frequently', correct: true },
        { id: 'd', text: 'Make sure they see you' },
      ],
    }
  ];

  const videoLibrary = {
    inspection: [
      { title: 'Pre-Trip Vehicle Inspection', description: 'Comprehensive inspection procedure', videoId: 'dQw4w9WgXcQ', duration: '12:45' },
    ],
    defensive: [
      { title: 'Smith System Basics', description: 'Five keys to defensive driving', videoId: 'V-_O7gl7-BM', duration: '14:30' },
    ]
  };

  const handleNext = () => {
    if (!selectedAnswers[currentQuestion]) {
      toast.error('Please select an answer');
      return;
    }
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Driver Training & Safety</h1>
          <p className="text-xl text-gray-600">Enhance your skills with our professional courses.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 mb-8">
            <button onClick={() => setActiveTab('videos')} className={`px-6 py-2 rounded-full ${activeTab === 'videos' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>Videos</button>
            <button onClick={() => setActiveTab('quiz')} className={`px-6 py-2 rounded-full ${activeTab === 'quiz' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>Quiz</button>
          </div>

          {activeTab === 'videos' ? (
            <div className="grid md:grid-cols-2 gap-8">
              {videoLibrary.inspection.map(v => <VideoCard key={v.videoId} video={v} isCompleted={isVideoCompleted(v.videoId)} onToggleComplete={handleToggleVideoComplete} />)}
              {videoLibrary.defensive.map(v => <VideoCard key={v.videoId} video={v} isCompleted={isVideoCompleted(v.videoId)} onToggleComplete={handleToggleVideoComplete} />)}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border">
              {!quizStarted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Knowledge Quiz</h2>
                  <Button onClick={() => setQuizStarted(true)} className="bg-green-600 text-white px-8 py-3">Start Quiz</Button>
                </div>
              ) : showResults ? (
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
                  <Button onClick={() => {setQuizStarted(false); setShowResults(false);}} className="bg-green-600 text-white px-8 py-3">Try Again</Button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-bold mb-6">{quizQuestions[currentQuestion].question}</h2>
                  <div className="space-y-3 mb-8">
                    {quizQuestions[currentQuestion].options.map(opt => (
                      <button key={opt.id} onClick={() => setSelectedAnswers({...selectedAnswers, [currentQuestion]: opt.id})} className={`w-full text-left p-4 rounded-lg border ${selectedAnswers[currentQuestion] === opt.id ? 'border-green-600 bg-green-50' : 'border-gray-200'}`}>
                        {opt.text}
                      </button>
                    ))}
                  </div>
                  <Button onClick={handleNext} className="bg-green-600 text-white px-8 py-3">Next</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
