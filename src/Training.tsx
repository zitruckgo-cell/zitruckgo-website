import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { CheckCircle, Clock, Users, Award, Download, BookOpen, AlertCircle, Play, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useVideoProgress } from '@/hooks/useVideoProgress';

interface VideoItem {
  title: string;
  description: string;
  videoId: string;
  duration: string;
}

interface VideoCardProps {
  video: VideoItem;
  isCompleted: boolean;
  onToggleComplete: (videoId: string) => void;
}

const VideoCard = ({ video, isCompleted, onToggleComplete }: VideoCardProps) => (
  <div className={`bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow ${isCompleted ? 'border-green-200 bg-green-50/30' : 'border-border'}`}>
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
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{video.duration}</span>
          <button
            onClick={() => onToggleComplete(video.videoId)}
            className={`p-1 rounded transition-colors ${
              isCompleted
                ? 'bg-green-100 text-green-600'
                : 'bg-muted text-muted-foreground hover:bg-secondary/20'
            }`}
            title={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
          >
            <Check className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{video.description}</p>
      {isCompleted && (
        <div className="mt-3 text-xs text-green-600 font-semibold flex items-center gap-1">
          <CheckCircle className="w-3 h-3" />
          Completed
        </div>
      )}
    </div>
  </div>
);

export default function Training() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  
  // Video progress tracking
  const { isVideoCompleted, markVideoAsCompleted, markVideoAsIncomplete, getCompletionStats, getTotalStats, isLoaded } = useVideoProgress();
  
  const handleToggleVideoComplete = (videoId: string) => {
    if (isVideoCompleted(videoId)) {
      markVideoAsIncomplete(videoId);
      toast.success('Marked as incomplete');
    } else {
      markVideoAsCompleted(videoId);
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
      explanation: 'The four-second rule is the minimum recommended following distance for truck drivers in normal, dry conditions to allow adequate reaction time.',
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
      explanation: 'The five keys are: Aim High, Get the Big Picture, Keep Your Eyes Moving, Make Sure They See You, and Leave Yourself an Out. Adjusting mirrors is important but not one of the five keys.',
    },
    {
      id: 3,
      question: 'What should you do if you experience a brake failure while driving downhill?',
      options: [
        { id: 'a', text: 'Pump the brakes repeatedly' },
        { id: 'b', text: 'Downshift to a lower gear and use engine braking', correct: true },
        { id: 'c', text: 'Use the parking brake immediately' },
        { id: 'd', text: 'Steer to the right shoulder' },
      ],
      explanation: 'In case of brake failure, downshift to a lower gear to use engine braking, which is the safest method to slow the vehicle. Use the parking brake gently if needed.',
    },
    {
      id: 4,
      question: 'At 55 mph in dry conditions, what is the approximate total stopping distance?',
      options: [
        { id: 'a', text: '216 feet' },
        { id: 'b', text: '378 feet', correct: true },
        { id: 'c', text: '540 feet' },
        { id: 'd', text: '600 feet' },
      ],
      explanation: 'Total stopping distance at 55 mph in dry conditions is approximately 378 feet (162 feet perception + 81 feet reaction + 135 feet braking).',
    },
    {
      id: 5,
      question: 'What is the first step in the SIPDE decision-making process?',
      options: [
        { id: 'a', text: 'Identify hazards' },
        { id: 'b', text: 'Search the road ahead', correct: true },
        { id: 'c', text: 'Predict what might happen' },
        { id: 'd', text: 'Execute your decision' },
      ],
      explanation: 'SIPDE stands for Search, Identify, Predict, Decide, Execute. Searching the road ahead is the first critical step.',
    },
    {
      id: 6,
      question: 'How should you adjust your speed when driving on wet roads?',
      options: [
        { id: 'a', text: 'No adjustment needed' },
        { id: 'b', text: 'Reduce speed by 10-15%' },
        { id: 'c', text: 'Reduce speed by 25-50%', correct: true },
        { id: 'd', text: 'Increase speed for better traction' },
      ],
      explanation: 'On wet roads, reduce your speed by 25-50% and increase your following distance to 6-8 seconds to maintain control.',
    },
    {
      id: 7,
      question: 'What is the proper technique if you experience hydroplaning?',
      options: [
        { id: 'a', text: 'Brake hard immediately' },
        { id: 'b', text: 'Ease off the accelerator and steer smoothly', correct: true },
        { id: 'c', text: 'Accelerate to regain traction' },
        { id: 'd', text: 'Shift to neutral' },
      ],
      explanation: 'If hydroplaning occurs, remain calm, ease off the accelerator, and steer smoothly toward the desired direction. Do not brake suddenly.',
    },
    {
      id: 8,
      question: 'When should you use your low-beam headlights instead of high beams?',
      options: [
        { id: 'a', text: 'Only at night' },
        { id: 'b', text: 'In normal conditions and when oncoming traffic is 500+ feet away', correct: true },
        { id: 'c', text: 'Only in fog' },
        { id: 'd', text: 'Never, high beams are always better' },
      ],
      explanation: 'Use low beams in normal conditions and dim them for oncoming traffic at least 500 feet away and for vehicles ahead at 300+ feet.',
    },
    {
      id: 9,
      question: 'What is the recommended minimum tire tread depth for commercial trucks?',
      options: [
        { id: 'a', text: '2/32 inch' },
        { id: 'b', text: '4/32 inch' },
        { id: 'c', text: '6/32 inch', correct: true },
        { id: 'd', text: '8/32 inch' },
      ],
      explanation: 'Commercial trucks should maintain a minimum tire tread depth of 6/32 inch for safety and to prevent hydroplaning.',
    },
    {
      id: 10,
      question: 'What does the acronym DVIR stand for?',
      options: [
        { id: 'a', text: 'Daily Vehicle Inspection Report', correct: true },
        { id: 'b', text: 'Driver Vehicle Incident Report' },
        { id: 'c', text: 'Defensive Vehicle Inspection Routine' },
        { id: 'd', text: 'Driver Verification and Inspection Record' },
      ],
      explanation: 'DVIR stands for Driver Vehicle Inspection Report, which documents any mechanical issues or maintenance needs at the end of each shift.',
    },
    {
      id: 11,
      question: 'How long should you take to complete a thorough pre-trip inspection?',
      options: [
        { id: 'a', text: '5-10 minutes' },
        { id: 'b', text: '15-20 minutes', correct: true },
        { id: 'c', text: '25-30 minutes' },
        { id: 'd', text: '30-45 minutes' },
      ],
      explanation: 'A thorough pre-trip inspection typically takes 15-20 minutes and is essential for preventing accidents and mechanical failures.',
    },
    {
      id: 12,
      question: 'What is the maximum air pressure that should be maintained in an air brake system?',
      options: [
        { id: 'a', text: '60-70 PSI' },
        { id: 'b', text: '80-90 PSI' },
        { id: 'c', text: '90-100 PSI', correct: true },
        { id: 'd', text: '110-120 PSI' },
      ],
      explanation: 'Air brake systems should maintain 90-100 PSI pressure. The compressor automatically cycles to maintain this pressure.',
    },
    {
      id: 13,
      question: 'Which blind spot is the most dangerous for truck drivers?',
      options: [
        { id: 'a', text: 'Left side (1 lane)' },
        { id: 'b', text: 'Right side (2 lanes)', correct: true },
        { id: 'c', text: 'Front of vehicle' },
        { id: 'd', text: 'All blind spots are equally dangerous' },
      ],
      explanation: 'The right side blind spot is the most dangerous for truck drivers as it extends 2 lanes to the right and back, making it difficult to see vehicles.',
    },
    {
      id: 14,
      question: 'What should be your first action if you witness an aggressive driver?',
      options: [
        { id: 'a', text: 'Respond with aggressive gestures' },
        { id: 'b', text: 'Increase your speed to get away' },
        { id: 'c', text: 'Allow the aggressive driver to pass', correct: true },
        { id: 'd', text: 'Call the police immediately' },
      ],
      explanation: 'The safest response to an aggressive driver is to allow them to pass and maintain a safe distance. Never engage or respond to aggressive behavior.',
    },
    {
      id: 15,
      question: 'How many hours of sleep should most adults get before driving?',
      options: [
        { id: 'a', text: '4-5 hours' },
        { id: 'b', text: '6-7 hours' },
        { id: 'c', text: '7-9 hours', correct: true },
        { id: 'd', text: '10+ hours' },
      ],
      explanation: 'Most adults need 7-9 hours of quality sleep per night. Sleep debt accumulates over time and impairs driving ability.',
    },
  ];

  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const handleNext = () => {
    if (!selectedAnswers[currentQuestion]) {
      toast.error('Please select an answer before proceeding');
      return;
    }

    const question = quizQuestions[currentQuestion];
    const selectedAnswer = question.options.find(opt => opt.id === selectedAnswers[currentQuestion]);

    if (selectedAnswer?.correct) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const passPercentage = (score / quizQuestions.length) * 100;
  const isPassed = passPercentage >= 80;

  const videoLibrary = {
    inspection: [
      {
        title: 'Complete Pre-Trip Vehicle Inspection',
        description: 'Learn the comprehensive WALKAROUND inspection procedure for semi-trucks',
        videoId: 'dQw4w9WgXcQ',
        duration: '12:45',
      },
      {
        title: 'Tire and Brake System Inspection',
        description: 'Detailed walkthrough of tire tread depth, pressure, and brake system checks',
        videoId: 'jNQXAC9IVRw',
        duration: '8:30',
      },
      {
        title: 'Lights and Electrical Systems Check',
        description: 'How to properly inspect all lights, signals, and electrical components',
        videoId: '9bZkp7q19f0',
        duration: '6:15',
      },
      {
        title: 'Cargo Securement and Load Inspection',
        description: 'Best practices for securing cargo and performing load safety checks',
        videoId: 'EwTZOX7K6cA',
        duration: '10:20',
      },
    ],
    defensive: [
      {
        title: 'Smith System: Five Keys to Defensive Driving',
        description: 'Master the proven Smith System techniques for accident prevention',
        videoId: 'V-_O7gl7-BM',
        duration: '14:30',
      },
      {
        title: 'Hazard Recognition and Response',
        description: 'Learn to identify and respond to road hazards before they become emergencies',
        videoId: 'tYzD26kCDOE',
        duration: '11:45',
      },
      {
        title: 'Speed and Distance Management',
        description: 'Understanding stopping distance and safe following distance calculations',
        videoId: 'wIvt2-cfQAE',
        duration: '9:20',
      },
      {
        title: 'Blind Spot Awareness for Truck Drivers',
        description: 'Comprehensive guide to identifying and managing truck blind spots',
        videoId: 'ZbzfZnYrukU',
        duration: '7:50',
      },
    ],
    weather: [
      {
        title: 'Driving in Rain and Wet Conditions',
        description: 'Techniques for maintaining control and preventing hydroplaning',
        videoId: 'OPf0YbXqDm0',
        duration: '10:15',
      },
      {
        title: 'Winter Driving: Snow and Ice Safety',
        description: 'Essential skills for safe truck operation in winter weather',
        videoId: 'X2xQRJjedFE',
        duration: '13:40',
      },
      {
        title: 'Fog and Low Visibility Driving',
        description: 'Safe driving techniques when visibility is severely limited',
        videoId: 'Bey4XXJAqkw',
        duration: '8:25',
      },
      {
        title: 'Wind and Crosswind Management',
        description: 'How to handle high winds and maintain truck stability',
        videoId: 'gJ2oF3LJB6c',
        duration: '9:10',
      },
    ],
    emergency: [
      {
        title: 'Brake Failure Emergency Procedures',
        description: 'Step-by-step guide for handling brake system failures safely',
        videoId: 'rQzxVrQvzG8',
        duration: '11:30',
      },
      {
        title: 'Tire Blowout Response and Recovery',
        description: 'What to do if you experience a tire blowout while driving',
        videoId: 'kJQP7kiw9Fk',
        duration: '8:45',
      },
      {
        title: 'Jackknife Prevention and Recovery',
        description: 'Understanding and preventing jackknife situations',
        videoId: 'dPlxMGP6Bwc',
        duration: '10:20',
      },
      {
        title: 'Accident Scene Management',
        description: 'What to do immediately after an accident for safety and legal protection',
        videoId: 'YzVBnZ8KV7w',
        duration: '9:55',
      },
    ],
    fatigue: [
      {
        title: 'Fatigue Recognition and Management',
        description: 'Identifying signs of fatigue and strategies to stay alert',
        videoId: 'mNrXMOLtMak',
        duration: '12:10',
      },
      {
        title: 'Sleep Quality and Driver Wellness',
        description: 'Improving sleep quality and maintaining physical wellness on the road',
        videoId: 'rm3EHwGaCbE',
        duration: '10:30',
      },
      {
        title: 'Hours of Service Compliance',
        description: 'Understanding and following HOS regulations to prevent fatigue',
        videoId: 'aqz5tCQTLa8',
        duration: '7:40',
      },
      {
        title: 'Nutrition and Hydration for Drivers',
        description: 'Healthy eating and hydration habits for long-haul driving',
        videoId: 'L0MK7qz13bU',
        duration: '8:20',
      },
    ],
    testimonials: [
      {
        title: 'Driver Success Story: Marcus from Texas',
        description: 'How defense driving training improved safety and earnings',
        videoId: 'hY7m5jjJ9mA',
        duration: '6:30',
      },
      {
        title: 'Driver Success Story: Sarah from California',
        description: 'Career advancement through professional development and training',
        videoId: '0IzlYi-I7-A',
        duration: '7:15',
      },
      {
        title: 'Fleet Manager Perspective on Driver Training',
        description: 'Why logistics companies invest in driver safety training',
        videoId: 'cNQmz1tCDds',
        duration: '5:45',
      },
      {
        title: 'Insurance Benefits of Defense Driving',
        description: 'How certified drivers receive insurance discounts and benefits',
        videoId: 'JGwWNGJdgXE',
        duration: '6:20',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container">
          <h1 className="mb-6">Truck Defense Driving Training</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional training designed to keep you safe, reduce accidents, and enhance your driving skills for a successful career.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Comprehensive Training Program</h2>
              <p className="text-muted-foreground mb-6">
                Our defense driving training program is built on decades of industry experience and the latest safety research. We combine classroom instruction with hands-on simulator training and real-world driving scenarios.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced hazard recognition and response',
                  'Weather and road condition management',
                  'Vehicle dynamics and braking techniques',
                  'Fatigue management and wellness',
                  'Communication and professionalism',
                  'Accident prevention strategies',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/manus-storage/truck-defense-training_a44ac89e.png"
                alt="Training Program"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Flexible Training Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the training format that works best for your schedule and learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Online Course',
                description: 'Self-paced learning with video modules, quizzes, and certification. Complete at your own pace.',
                duration: '20-30 hours',
              },
              {
                icon: Users,
                title: 'In-Person Workshop',
                description: 'Intensive 3-day workshop with classroom instruction and simulator training with instructors.',
                duration: '3 days',
              },
              {
                icon: Award,
                title: 'Hybrid Program',
                description: 'Combine online learning with hands-on simulator sessions and one-on-one coaching.',
                duration: '5-7 days',
              },
            ].map((format, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border">
                <format.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-lg font-bold mb-2">{format.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{format.description}</p>
                <p className="text-secondary font-semibold text-sm">{format.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-center mb-16">Course Curriculum</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                module: 'Module 1',
                title: 'Fundamentals of Defensive Driving',
                topics: [
                  'Understanding vehicle dynamics',
                  'Braking and steering techniques',
                  'Speed management',
                  'Following distance calculations',
                ],
              },
              {
                module: 'Module 2',
                title: 'Hazard Recognition',
                topics: [
                  'Identifying road hazards',
                  'Weather-related challenges',
                  'Traffic pattern analysis',
                  'Predicting driver behavior',
                ],
              },
              {
                module: 'Module 3',
                title: 'Emergency Response',
                topics: [
                  'Evasive maneuvers',
                  'Skid recovery',
                  'Accident avoidance',
                  'Post-incident procedures',
                ],
              },
              {
                module: 'Module 4',
                title: 'Professional Development',
                topics: [
                  'Wellness and fatigue management',
                  'Communication skills',
                  'Customer service excellence',
                  'Career advancement strategies',
                ],
              },
            ].map((course, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                <div className="text-secondary font-semibold mb-2">{course.module}</div>
                <h3 className="text-lg font-bold mb-4">{course.title}</h3>
                <ul className="space-y-2">
                  {course.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-secondary font-bold">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Training Library */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Video Training Library</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch comprehensive video demonstrations covering all aspects of defense driving training. Learn from expert instructors and real-world scenarios.
            </p>
          </div>

          <Tabs defaultValue="inspection" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="inspection">Pre-Trip</TabsTrigger>
              <TabsTrigger value="defensive">Defensive</TabsTrigger>
              <TabsTrigger value="weather">Weather</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
              <TabsTrigger value="fatigue">Fatigue</TabsTrigger>
              <TabsTrigger value="testimonials">Stories</TabsTrigger>
            </TabsList>

            {Object.entries(videoLibrary).map(([category, videos]) => {
              const videoIds = (videos as VideoItem[]).map(v => v.videoId);
              const stats = getCompletionStats(videoIds);
              return (
                <TabsContent key={category} value={category} className="space-y-6">
                  <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">Category Progress</h3>
                      <span className="text-sm font-bold text-secondary">{stats.completed}/{stats.total} completed</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${stats.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{stats.percentage}% of videos completed</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(videos as VideoItem[]).map((video, idx) => (
                      <VideoCard 
                        key={idx} 
                        video={video} 
                        isCompleted={isVideoCompleted(video.videoId)}
                        onToggleComplete={handleToggleVideoComplete}
                      />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>

          {isLoaded && (
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Overall Training Progress</h3>
                <span className="text-2xl font-bold text-secondary">{getTotalStats().percentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 mb-3">
                <div
                  className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full transition-all duration-300"
                  style={{ width: `${getTotalStats().percentage}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                You have completed <span className="font-bold text-secondary">{getTotalStats().totalCompleted}</span> out of <span className="font-bold">{getTotalStats().totalVideos}</span> videos
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Benefits of Our Training</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Invest in your safety and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Reduce Accident Risk',
                description: 'Learn proven techniques to avoid collisions and stay safe on the road.',
              },
              {
                title: 'Lower Insurance Costs',
                description: 'Many insurance companies offer discounts for certified defensive drivers.',
              },
              {
                title: 'Increase Earning Potential',
                description: 'Employers value trained drivers and often offer higher pay and better opportunities.',
              },
              {
                title: 'Industry Certification',
                description: 'Receive a recognized certificate that enhances your professional credentials.',
              },
              {
                title: 'Career Advancement',
                description: 'Stand out to employers and open doors to supervisory and training roles.',
              },
              {
                title: 'Peace of Mind',
                description: 'Know that you have the skills and knowledge to handle any driving situation.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defense Driving Manual */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Defense Driving Manual</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our comprehensive defense driving manual covering all essential topics for safe truck operation.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="chapters">Chapters</TabsTrigger>
              <TabsTrigger value="download">Download</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                <h3 className="text-lg font-bold mb-4">What's Included</h3>
                <p className="text-muted-foreground mb-6">
                  The Zitruckgo Defense Driving Manual is a comprehensive guide designed specifically for professional truck drivers. It covers everything from pre-trip inspections to emergency procedures, with practical techniques and real-world scenarios.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      12 Comprehensive Chapters
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pre-Trip Vehicle Inspection</li>
                      <li>• Defensive Driving Fundamentals</li>
                      <li>• Speed and Distance Management</li>
                      <li>• Hazard Recognition and Response</li>
                      <li>• Weather and Road Conditions</li>
                      <li>• Night Driving Safety</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-secondary" />
                      Practical Resources
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Stopping distance calculations</li>
                      <li>• Hazard recognition checklists</li>
                      <li>• Emergency procedures</li>
                      <li>• Quick reference guides</li>
                      <li>• Inspection checklists</li>
                      <li>• Real-world scenarios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="chapters" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { num: 1, title: 'Introduction', desc: 'Purpose, principles, and overview of defensive driving' },
                  { num: 2, title: 'Pre-Trip Vehicle Inspection', desc: 'Comprehensive WALKAROUND inspection procedures' },
                  { num: 3, title: 'Defensive Driving Fundamentals', desc: 'Smith System and SIPDE decision-making process' },
                  { num: 4, title: 'Speed and Distance Management', desc: 'Following distance, stopping distance, and speed adjustment' },
                  { num: 5, title: 'Hazard Recognition and Response', desc: 'Identifying and responding to road, traffic, and environmental hazards' },
                  { num: 6, title: 'Weather and Road Conditions', desc: 'Safe driving techniques for rain, snow, ice, fog, and wind' },
                  { num: 7, title: 'Night Driving Safety', desc: 'Vision, lighting, scanning, and fatigue management at night' },
                  { num: 8, title: 'Fatigue Management and Wellness', desc: 'Sleep, nutrition, exercise, and stress management' },
                  { num: 9, title: 'Brake System and Emergency Procedures', desc: 'Air brake operation, maintenance, and failure procedures' },
                  { num: 10, title: 'Communication and Professional Conduct', desc: 'Signaling, professional behavior, and road rage prevention' },
                  { num: 11, title: 'Accident Prevention Strategies', desc: 'Risk assessment, hazard avoidance, and backing safety' },
                  { num: 12, title: 'Post-Incident Procedures', desc: 'Accident response, reporting, and recovery' },
                ].map((chapter, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                    <div className="text-secondary font-bold mb-2">Chapter {chapter.num}</div>
                    <h4 className="font-bold mb-2">{chapter.title}</h4>
                    <p className="text-sm text-muted-foreground">{chapter.desc}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="download" className="space-y-6">
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg border border-border text-center">
                <Download className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Download the Complete Manual</h3>
                <p className="text-muted-foreground mb-6">
                  Get the full Defense Driving Manual in PDF format. Perfect for studying offline or printing for reference.
                </p>
                <div className="space-y-3">
                  <a href="/Zitruckgo_Defense_Driving_Manual.pdf" download>
                    <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6">
                      Download PDF (2.5 MB)
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground">
                    12 chapters • 50+ pages • Quick reference guides • Checklists included
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-border">
                <h4 className="font-bold mb-3">Manual Highlights</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Complete pre-trip inspection procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Smith System and SIPDE decision-making framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Stopping distance calculations and tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Hazard recognition and emergency response techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Weather and road condition management strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Fatigue management and wellness guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Brake system operation and emergency procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Quick reference guides and inspection checklists</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Self-Test Knowledge Quiz */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Self-Test Knowledge Quiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge with our DMV-style quiz. Answer 15 questions to assess your understanding of defense driving principles.
            </p>
          </div>

          {!quizStarted ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-lg border border-border text-center">
                <Award className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Test Your Knowledge?</h3>
                <p className="text-muted-foreground mb-6">
                  This 15-question quiz covers all aspects of defense driving training. You need to score 80% or higher to pass. Each question includes an explanation of the correct answer.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-blue-900 mb-1">Quiz Format</p>
                      <p className="text-sm text-blue-800">15 multiple-choice questions • 80% passing score • Instant feedback • Detailed explanations</p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setQuizStarted(true)}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base"
                >
                  Start Quiz
                </Button>
              </div>
            </div>
          ) : !showResults ? (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg border border-border overflow-hidden">
                {/* Progress Bar */}
                <div className="bg-gradient-to-r from-secondary to-secondary/80 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span className="text-white text-sm">{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">{quizQuestions[currentQuestion].question}</h3>

                  {/* Answer Options */}
                  <RadioGroup value={selectedAnswers[currentQuestion] || ''} onValueChange={(value) => handleAnswerSelect(currentQuestion, value)}>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between gap-4 mt-8">
                    <Button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      variant="outline"
                      className="px-6 py-2"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg border border-border overflow-hidden">
                {/* Results Header */}
                <div className={`p-8 text-center ${isPassed ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className={`text-6xl font-bold mb-2 ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                    {passPercentage.toFixed(0)}%
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isPassed ? 'text-green-900' : 'text-red-900'}`}>
                    {isPassed ? 'Congratulations! You Passed!' : 'You Did Not Pass'}
                  </h3>
                  <p className={isPassed ? 'text-green-700' : 'text-red-700'}>
                    {isPassed
                      ? 'You have demonstrated a strong understanding of defense driving principles.'
                      : 'Review the material and try again to improve your score.'}
                  </p>
                </div>

                {/* Score Details */}
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{score}</div>
                      <div className="text-sm text-muted-foreground">Correct Answers</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{quizQuestions.length - score}</div>
                      <div className="text-sm text-muted-foreground">Incorrect Answers</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{quizQuestions.length}</div>
                      <div className="text-sm text-muted-foreground">Total Questions</div>
                    </div>
                  </div>

                  {isPassed && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <p className="text-green-900 font-semibold">
                        ✓ You are eligible for certification. Contact us to complete your training enrollment.
                      </p>
                    </div>
                  )}

                  {!isPassed && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <p className="text-yellow-900 font-semibold mb-2">
                        Review the areas where you need improvement:
                      </p>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        {quizQuestions.map((q, idx) => {
                          const userAnswer = selectedAnswers[idx];
                          const isCorrect = q.options.find(opt => opt.id === userAnswer)?.correct;
                          return !isCorrect ? (
                            <li key={idx}>• Question {idx + 1}: {q.question.substring(0, 50)}...</li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      onClick={resetQuiz}
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3"
                    >
                      Retake Quiz
                    </Button>
                    <Link href="/contact">
                      <Button variant="outline" className="flex-1 px-6 py-3">
                        Enroll in Training
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container text-center">
          <h2 className="text-white mb-6">Ready to Enhance Your Skills?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll in our training program today and take the first step toward a safer, more successful driving career.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-white/90 text-secondary px-8 py-6 text-base">
              Enroll Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
