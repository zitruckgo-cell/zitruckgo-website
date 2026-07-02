import { useState, useEffect, useCallback } from 'react';

interface VideoProgress {
  [videoId: string]: {
    completed: boolean;
    watchedAt: number;
    duration: number; // in seconds
  };
}

const STORAGE_KEY = 'zitruckgo_video_progress';

export const useVideoProgress = () => {
  const [progress, setProgress] = useState<VideoProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse video progress:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const markVideoAsCompleted = useCallback((videoId: string, duration: number = 0) => {
    setProgress(prev => ({
      ...prev,
      [videoId]: {
        completed: true,
        watchedAt: Date.now(),
        duration,
      },
    }));
  }, []);

  const markVideoAsIncomplete = useCallback((videoId: string) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[videoId];
      return newProgress;
    });
  }, []);

  const isVideoCompleted = useCallback((videoId: string) => {
    return progress[videoId]?.completed ?? false;
  }, [progress]);

  const getCompletionStats = useCallback((videoIds: string[]) => {
    const completed = videoIds.filter(id => isVideoCompleted(id)).length;
    const total = videoIds.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  }, [isVideoCompleted]);

  const clearAllProgress = useCallback(() => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const getTotalStats = useCallback(() => {
    const allVideoIds = Object.keys(progress);
    const completedCount = allVideoIds.filter(id => progress[id].completed).length;
    return {
      totalCompleted: completedCount,
      totalVideos: allVideoIds.length,
      percentage: allVideoIds.length > 0 ? Math.round((completedCount / allVideoIds.length) * 100) : 0,
    };
  }, [progress]);

  return {
    progress,
    isLoaded,
    markVideoAsCompleted,
    markVideoAsIncomplete,
    isVideoCompleted,
    getCompletionStats,
    clearAllProgress,
    getTotalStats,
  };
};
