import { useState } from "react";
import { Play, Linkedin, Users, Mic, Award, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LazyVideoIframe } from "@/components/LazyVideoIframe";

interface MediaItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail?: string;
  type: "full" | "intro" | "highlight";
}

const mediaContent: MediaItem[] = [
  {
    id: "1",
    title: "Full Interview",
    description: "Complete conversation with Mike D'Arezzo",
    videoUrl: "https://drive.google.com/file/d/1example/preview",
    type: "full",
  },
  {
    id: "2",
    title: "Introduction",
    description: "Meet Mike D'Arezzo",
    videoUrl: "https://drive.google.com/file/d/2example/preview",
    type: "intro",
  },
  {
    id: "3",
    title: "Highlight Reel",
    description: "Best moments from the interview",
    videoUrl: "https://drive.google.com/file/d/3example/preview",
    type: "highlight",
  },
];

export default function Index() {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#90027D]/5 via-transparent to-[#FF6B35]/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#90027D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold-title mb-4">
                <span className="gradient-cyber-text">Cyber Wins</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light-body">
                Where Cybersecurity Leaders Share Their Victories
              </p>
              <p className="text-lg text-muted-foreground/80 mb-8 max-w-xl">
                Join us as we explore the stories behind the successes in cybersecurity. 
                Learn from industry leaders who are shaping the future of digital security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/company/cyber-wins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#90027D] text-white rounded-lg hover:bg-[#90027D]/90 transition-colors font-bold-title"
                >
                  <Linkedin className="w-5 h-5" />
                  Follow on LinkedIn
                </a>
                <a
                  href="#get-involved"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF6B35] text-[#FF6B35] rounded-lg hover:bg-[#FF6B35]/10 transition-colors font-bold-title"
                >
                  Get Involved
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#90027D]/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                    alt="Mike D'Arezzo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                  <Mic className="w-8 h-8 text-[#FF6B35]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Content Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold-title text-center mb-12">
            <span className="gradient-cyber-text">Featured Content</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaContent.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-[#90027D] to-[#FF6B35] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#90027D] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold-title text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-light-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Cyber Wins Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold-title mb-8">
              What is <span className="gradient-cyber-text">Cyber Wins</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-light-body mb-8">
              Cyber Wins is a podcast series dedicated to celebrating the victories and successes 
              in the cybersecurity industry. We bring you conversations with leaders, innovators, 
              and practitioners who are making a real difference in protecting our digital world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Users className="w-10 h-10 text-[#90027D] mx-auto mb-4" />
                <h3 className="font-bold-title text-lg mb-2">Expert Interviews</h3>
                <p className="text-sm text-muted-foreground font-light-body">
                  In-depth conversations with industry leaders
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Award className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="font-bold-title text-lg mb-2">Success Stories</h3>
                <p className="text-sm text-muted-foreground font-light-body">
                  Real victories from the cybersecurity frontlines
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Mic className="w-10 h-10 text-[#c23bd4] mx-auto mb-4" />
                <h3 className="font-bold-title text-lg mb-2">Insights & Tips</h3>
                <p className="text-sm text-muted-foreground font-light-body">
                  Actionable advice from the pros
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 bg-gradient-to-br from-[#90027D]/10 via-white to-[#FF6B35]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold-title mb-8">
              <span className="gradient-cyber-text">Get Involved</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light-body mb-8">
              Want to share your cyber wins? We're always looking for inspiring stories 
              and leaders to feature on our podcast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/4QZVeeSwfB6BURG77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-bold-title text-lg"
              >
                Apply to Be a Guest
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/cyber-wins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0077B5] text-white rounded-lg hover:bg-[#0077B5]/90 transition-colors font-bold-title text-lg"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold-title gradient-cyber-text mb-4">Cyber Wins</h3>
          <p className="text-background/70 font-light-body">
            © {new Date().getFullYear()} Cyber Wins. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{selectedVideo?.title}</DialogTitle>
          {selectedVideo && (
            <div className="aspect-video">
              <LazyVideoIframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
