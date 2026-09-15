import React, { useState } from 'react';
import teamData from '../assets/teamData.json';
import TeamMemberCard from './TeamMemberCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function Members() {
  const [filter, setFilter] = useState('All');

  // Ensure no empty members
  const validMembers = teamData.filter(m => m.Name && m.Domain);
  
  const groupedDomains = {
    'All': validMembers,
    'Creative & Design': validMembers.filter(m => m.Domain.toLowerCase().includes('design') || m.Domain.toLowerCase().includes('creative')),
    'Technical': validMembers.filter(m => m.Domain.toLowerCase().includes('tech')),
    'Documentation': validMembers.filter(m => m.Domain.toLowerCase().includes('document')),
    'Event Management': validMembers.filter(m => m.Domain.toLowerCase().includes('event')),
    'Database': validMembers.filter(m => m.Domain.toLowerCase().includes('data')),
    'Public Relations': validMembers.filter(m => m.Domain.toLowerCase().includes('pr') || m.Domain.toLowerCase().includes('publicity')),
    'Core': validMembers.filter(m => m.Domain.toLowerCase().includes('president') || m.Domain.toLowerCase().includes('secretary') || m.Domain.toLowerCase().includes('treasury') || m.Domain.toLowerCase().includes('all rounder'))
  };

  return (
    <div className="bg-background min-h-screen pt-12 pb-20 font-sans text-foreground">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] mb-4 text-foreground font-[Zen Dots] font-bold">
            Meet the Team
          </h1>
          <p className="text-muted-foreground text-base max-w-[600px] mx-auto leading-relaxed">
            The passionate individuals who drive the Robotics Club of GRIET.
          </p>
        </div>

        {/* Filter Navigation using shadcn Tabs */}
        <Tabs defaultValue="All" onValueChange={(val) => setFilter(val)} className="w-full flex flex-col items-center">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12 max-w-4xl mx-auto">
            {Object.keys(groupedDomains).map(key => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="font-[Zen Dots] text-xs py-2 px-4 rounded-full border border-border/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary shadow-sm hover:bg-secondary/80 transition-all"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* We map all tabs content */}
          {Object.entries(groupedDomains).map(([key, membersList]) => (
            <TabsContent key={key} value={key} className="w-full mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                {membersList.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </div>
  );
}
