import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

// Helper to format Google Drive link to direct image link
const getDirectImageUrl = (url) => {
  if (!url) return null;
  const match = url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return null;
};

export default function TeamMemberCard({ member }) {
  if (!member || !member.Name) return null; // Skip invalid entries

  const imageUrl = getDirectImageUrl(member.Photo);

  return (
    <Card className="min-w-[280px] w-[280px] h-[340px] shrink-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col relative">
      {/* Abstract Header Background */}
      <div className="h-24 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
      </div>

      {/* Avatar Overlapping Header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <Avatar className="w-24 h-24 border-4 border-background shadow-sm bg-muted">
          <AvatarImage src={imageUrl} alt={member.Name} className="object-cover" />
          <AvatarFallback className="bg-muted">
            <User size={32} className="text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Details */}
      <CardContent className="pt-16 pb-6 px-6 flex flex-col items-center text-center flex-1">
        <h3 className="m-0 mb-2 text-lg leading-tight text-foreground font-[Zen Dots] capitalize">
          {member.Name.toLowerCase()}
        </h3>

        <Badge variant="secondary" className="w-fit font-[Zen Dots] text-[0.65rem] tracking-wider text-muted-foreground mb-4">
          {member.Domain}
        </Badge>
        
        <p className="text-xs text-muted-foreground line-clamp-3">
          Core member of the {member.Domain} team.
        </p>
      </CardContent>
    </Card>
  );
}
