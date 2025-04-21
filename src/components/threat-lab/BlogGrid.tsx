import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';
import HackerButton from '../ui/HackerButton';

const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    title: 'Case of the $80K Fake Invoice',
    excerpt: 'How an accounting department was targeted with a sophisticated spear phishing campaign and what prevented disaster.',
    date: '2025-04-05',
    category: 'Phishing',
    imageUrl: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'blog-002',
    title: 'Why You Need More Than Antivirus',
    excerpt: 'Modern threats require modern defenses. Learn why traditional antivirus is no longer enough to protect your organization.',
    date: '2025-03-28',
    category: 'EDR',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'blog-003',
    title: 'Password Dumping Tactics Explained',
    excerpt: 'Understanding the techniques hackers use to steal credentials from your systems and how to defend against them.',
    date: '2025-03-21',
    category: 'Credentials',
    imageUrl: 'https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'blog-004',
    title: 'Real Examples of Weak DNS Settings',
    excerpt: 'Common DNS misconfigurations that leave organizations vulnerable to attack and how to fix them.',
    date: '2025-03-14',
    category: 'Infrastructure',
    imageUrl: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="card overflow-hidden group">
      {post.imageUrl && (
        <div className="relative mb-4 overflow-hidden h-48">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-terminal-black bg-opacity-80 text-hacker-red text-xs px-2 py-1 rounded">
            {post.category}
          </div>
        </div>
      )}
      
      <div className="flex items-center text-gray-400 text-sm mb-3">
        <Calendar className="h-4 w-4 mr-1" />
        {new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-terminal-text group-hover:text-hacker-green transition-colors">
        {post.title}
      </h3>
      
      <p className="text-gray-400 mb-4">
        {post.excerpt}
      </p>
      
      <div className="pt-2">
        <HackerButton to={`/blog/${post.id}`} className="text-sm py-2 px-4 flex items-center">
          Read Terminal Log <ArrowRight className="ml-2 h-4 w-4" />
        </HackerButton>
      </div>
    </div>
  );
};

const BlogGrid: React.FC = () => {
  return (
    <section className="py-16 bg-terminal-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center section-title centered">
          <span className="terminal-text">Terminal Logs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <HackerButton to="/blog" color="purple">
            View All Logs
          </HackerButton>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;