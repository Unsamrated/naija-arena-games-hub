import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { 
  Trophy, 
  Gamepad2, 
  Users, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Target
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Logo size="xl" className="justify-center animate-slide-up" />
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-6xl font-gaming font-bold bg-gradient-gaming bg-clip-text text-transparent">
                Welcome to NGameHut
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                The ultimate EAFC 25 tournament platform for Nigerian gamers. 
                Compete, win, and dominate the digital pitch! 🇳🇬
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="gaming" size="lg" className="text-lg" asChild>
                <a href="/auth">
                  Start Gaming Now! 🎮
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="neon" size="lg" className="text-lg" asChild>
                <a href="/dashboard">
                  View Demo Dashboard
                </a>
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-gaming">
                  <Gamepad2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold">1v1 Matches</h3>
                <p className="text-sm text-muted-foreground">Challenge players instantly</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto shadow-gold">
                  <Trophy className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold">Tournaments</h3>
                <p className="text-sm text-muted-foreground">8-16 player competitions</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/20 border border-gaming-neon rounded-full flex items-center justify-center mx-auto shadow-neon">
                  <Users className="h-8 w-8 text-gaming-neon" />
                </div>
                <h3 className="font-bold">Community</h3>
                <p className="text-sm text-muted-foreground">Connect with Naija gamers</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold">Rankings</h3>
                <p className="text-sm text-muted-foreground">Climb the leaderboards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-gaming font-bold mb-4">Why Choose NGameHut?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built by Nigerian gamers, for Nigerian gamers. 
              Experience the fastest, fairest, and most exciting EAFC 25 platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-gaming transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-gaming">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-gaming">Instant Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Find opponents and join tournaments instantly. 
                  No waiting, just pure EAFC 25 action with automatic match IDs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gaming transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-gaming">Secure Disputes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fair play guaranteed with screenshot verification 
                  and admin review for all disputed matches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gaming transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/20 border border-gaming-neon rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon">
                  <Target className="h-8 w-8 text-gaming-neon" />
                </div>
                <CardTitle className="text-xl font-gaming">PSN Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Verified PlayStation usernames ensure authentic 
                  competition with real Nigerian EAFC 25 players.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-gaming font-bold">
              Ready to Dominate the Pitch?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of Nigerian gamers competing in EAFC 25. 
              From Lagos to Abuja, the best players are here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gaming" size="lg" className="text-lg" asChild>
                <a href="/auth">
                  Join NGameHut Now! 🏆
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <a href="/admin">
                  Admin Demo
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-gaming-gold">₦500K+</p>
                <p className="text-sm text-muted-foreground">Total Prize Pool</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Active Players</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gaming-neon">24/7</p>
                <p className="text-sm text-muted-foreground">Tournament Action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <Logo size="md" className="justify-center mb-4" />
          <p className="text-muted-foreground">
            NGameHut - Empowering Nigerian Gamers in EAFC 25
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for the gaming community 🇳🇬
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
