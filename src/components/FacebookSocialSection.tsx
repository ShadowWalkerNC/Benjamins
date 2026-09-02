import React from 'react';
import { ThumbsUp, MessageCircle, Share2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FACEBOOK_POSTS, PUB_INFO } from '../data/pubData';

export const FacebookSocialSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#141518] text-[#e3e2e5] border-b border-[#25262c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-[#1877f2]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#70a5ff] font-semibold">
                Community Updates &amp; Facebook Feed
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 uppercase tracking-tight">
              Direct from Franklin Street
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl mt-1">
              Follow our official Facebook page for daily chalkboard specials, fresh draft drops, and Wednesday trivia themes.
            </p>
          </div>

          <a
            href={PUB_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white font-headline font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Follow @BenjaminsBangor</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Facebook Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {FACEBOOK_POSTS.map((post) => (
            <div
              key={post.id}
              className="p-5 rounded-xl bg-[#1a1b1f] border border-[#2b2d35] hover:border-[#383a45] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Author Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#d97706] flex items-center justify-center font-headline font-bold text-black text-xs">
                      B
                    </div>
                    <div>
                      <div className="flex items-center gap-1 font-headline font-bold text-xs text-zinc-100 uppercase">
                        <span>Benjamin's Pub</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1877f2]" />
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500">{post.date} • Bangor, ME</span>
                    </div>
                  </div>
                  {post.tag && (
                    <span className="font-mono text-[10px] px-2 py-0.2 rounded bg-[#25272f] text-[#d97706] border border-[#383a46]">
                      {post.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {post.content}
                </p>
              </div>

              {/* Interaction Bar */}
              <div className="pt-3 border-t border-[#25262c] flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1 text-[#70a5ff]">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{post.shares}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Rating Strip */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#1a1b1f] border border-[#2b2d35] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#d97706]">
              {'★★★★★'}
              <span className="font-mono text-xs text-zinc-300 ml-2">4.8 / 5.0 Rating on Facebook &amp; Google</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 italic">
              "Hands down the coziest basement pub in Bangor. The 1973 smash burger is unbeatable, drafts are ice cold, and the hospitality is top-notch."
            </p>
          </div>
          <a
            href={PUB_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-[#25272f] hover:bg-[#30333e] text-zinc-200 text-xs font-mono uppercase tracking-wider border border-[#383a45] transition-colors"
          >
            Read All Reviews →
          </a>
        </div>

      </div>
    </section>
  );
};
