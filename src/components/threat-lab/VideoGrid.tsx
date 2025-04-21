import React from 'react';
import { Play, Clock } from 'lucide-react';
import { VideoContent } from '../../types';

const videos: VideoContent[] = [
  {
    id: 'vid-001',
    title: 'Phishing Attack Breakdown',
    thumbnailUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '12:34',
    date: '2025-04-01'
  },
  {
    id: 'vid-002',
    title: 'MFA in Action',
    thumbnailUrl: 'https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '08:21',
    date: '2025-03-22'
  },
  {
    id: 'vid-003',
    title: 'How We Caught a Fake Login Page',
    thumbnailUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '15:47',
    date: '2025-03-15'
  },
  {
    id: 'vid-004',
    title: 'Email Spoofing: How It Works',
    thumbnailUrl: 'https://images.pexels.com/photos/5380644/pexels-photo-5380644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '10:15',
    date: '2025-03-08'
  }
];

const VideoCard: React.FC<{ video: VideoContent }> = ({ video }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative mb-4 overflow-hidden">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-terminal-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-hacker-red rounded-full p-3">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-terminal-black bg-opacity-80 text-terminal-text text-xs px-2 py-1 rounded flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {video.duration}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-terminal-text group-hover:text-hacker-green transition-colors">
        {video.title}
      </h3>
      
      <p className="text-gray-400 text-sm">
        {new Date(video.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })}
      </p>
    </div>
  );
};

const VideoGrid: React.FC = () => {
  return (
    <section className="py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center section-title centered">
          <span className="terminal-text">Video Drops</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;