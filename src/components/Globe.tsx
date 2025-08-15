import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from './ui/Sparkles';
import { BackgroundGradient } from './ui/BackgroundGradient';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

function Globe() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <BackgroundGradient className="rounded-none">
        {/* Main Globe Circle */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Sparkles
            particleColor="#3b82f6"
            particleDensity={30}
            minSize={2}
            maxSize={4}
            speed={0.02}
            opacity={0.6}
            className="absolute inset-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative"
            >
              {/* Outer Ring */}
              <div className="w-80 h-80 rounded-full border-2 border-blue-400/30 relative">
                <motion.div
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full border-2 border-purple-400/20"
                />
              </div>
              
              {/* Middle Ring */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-cyan-400/40">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                />
              </div>
              
              {/* Inner Globe */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/80 to-purple-500/80 backdrop-blur-sm"
                />
                
                {/* Globe Highlights */}
                <div className="absolute top-4 left-8 w-8 h-8 bg-white/20 rounded-full blur-sm" />
                <div className="absolute bottom-6 right-6 w-4 h-4 bg-white/30 rounded-full blur-sm" />
              </div>
            </motion.div>
          </Sparkles>
        </div>

        {/* Floating Text Effect */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <TextGenerateEffect 
            words="Explore Algorithms" 
            className="text-white/80 text-lg font-medium"
          />
        </div>

        {/* Additional Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-32 w-4 h-4 bg-purple-400 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-16 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
        />
        
        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-12 w-3 h-3 bg-indigo-400 rounded-full opacity-60"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Enhanced Glow Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl" />
      </BackgroundGradient>
    </div>
  );
}

export default Globe;
