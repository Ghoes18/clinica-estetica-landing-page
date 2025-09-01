import React from "react";

const Card = ({ children, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-md ring-1 ring-rose-200/50 shadow-lg shadow-rose-100/20 transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/30 hover:scale-[1.02] hover:ring-rose-300/60 ${className}`}>
    {/* Gradient overlay with improved colors */}
    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/70 via-pink-50/50 to-purple-50/50 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
    
    {/* Subtle border glow effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-200/20 via-transparent to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Content */}
    <div className="relative p-6 sm:p-8 z-10">{children}</div>
    
    {/* Decorative corner accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-bl-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
  </div>
);

export default Card;
