import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { 
  Trophy, 
  Gamepad2, 
  Users, 
  Star, 
  Clock, 
  Target,
  Medal,
  Play,
  Plus
} from "lucide-react";

// Mock data for demo
const mockUser = {
  name: "Emeka Johnson",
  psnUsername: "EmekaTheGoat25",
  rating: 1847,
  matches: 23,
  wins: 18,
  losses: 5,
  isVerified: true
};

const mockTournaments = [
  {
    id: "T001",
    name: "Lagos Champions Cup",
    type: "8-Player Tournament",
    prize: "₦15,000",
    participants: "6/8",
    status: "open",
    entry: "Free",
    startTime: "Today 8:00 PM"
  },
  {
    id: "T002", 
    name: "Abuja Elite Series",
    type: "16-Player Tournament",
    prize: "₦25,000",
    participants: "12/16",
    status: "open",
    entry: "₦500",
    startTime: "Tomorrow 6:00 PM"
  }
];

const mockMatches = [
  {
    id: "M001",
    opponent: "BunmiFootball",
    type: "1v1 Match",
    stake: "₦1,000",
    status: "pending",
    scheduledTime: "Today 7:00 PM"
  },
  {
    id: "M002",
    opponent: "NaijaKing99",
    type: "1v1 Match", 
    stake: "₦2,500",
    status: "completed",
    result: "Won 3-1",
    completedTime: "Yesterday"
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("tournaments");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-bold text-foreground">{mockUser.name}</p>
                <p className="text-sm text-gaming-gold">Rating: {mockUser.rating}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                {mockUser.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Trophy className="h-8 w-8 text-gaming-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-gaming-gold">{mockUser.wins}</p>
              <p className="text-sm text-muted-foreground">Wins</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Target className="h-8 w-8 text-destructive mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockUser.losses}</p>
              <p className="text-sm text-muted-foreground">Losses</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-primary">{mockUser.rating}</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Gamepad2 className="h-8 w-8 text-gaming-neon mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockUser.matches}</p>
              <p className="text-sm text-muted-foreground">Total Matches</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          <Button 
            variant={activeTab === "tournaments" ? "gaming" : "outline"}
            onClick={() => setActiveTab("tournaments")}
            className="flex-shrink-0"
          >
            <Trophy className="h-4 w-4" />
            Tournaments
          </Button>
          <Button 
            variant={activeTab === "matches" ? "gaming" : "outline"}
            onClick={() => setActiveTab("matches")}
            className="flex-shrink-0"
          >
            <Gamepad2 className="h-4 w-4" />
            1v1 Matches
          </Button>
          <Button 
            variant={activeTab === "leaderboard" ? "gaming" : "outline"}
            onClick={() => setActiveTab("leaderboard")}
            className="flex-shrink-0"
          >
            <Medal className="h-4 w-4" />
            Leaderboard
          </Button>
        </div>

        {/* Content Areas */}
        {activeTab === "tournaments" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-gaming font-bold">Available Tournaments</h2>
              <Button variant="neon" size="sm">
                <Plus className="h-4 w-4" />
                Create Tournament
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockTournaments.map((tournament) => (
                <Card key={tournament.id} className="hover:shadow-gaming transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{tournament.name}</CardTitle>
                        <CardDescription>{tournament.type}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-gaming-gold text-accent-foreground">
                        {tournament.prize}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Players:</span>
                        <span className="font-medium">{tournament.participants}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Entry Fee:</span>
                        <span className="font-medium">{tournament.entry}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Starts:</span>
                        <span className="font-medium">{tournament.startTime}</span>
                      </div>
                      <Button variant="gaming" className="w-full">
                        Join Tournament 🏆
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "matches" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-gaming font-bold">1v1 Matches</h2>
              <Button variant="neon" size="sm">
                <Plus className="h-4 w-4" />
                Challenge Player
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-gaming transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                          {match.opponent[0]}
                        </div>
                        <div>
                          <p className="font-bold">vs {match.opponent}</p>
                          <p className="text-sm text-muted-foreground">{match.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gaming-gold">{match.stake}</p>
                        {match.status === "pending" && (
                          <Badge variant="outline" className="mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                        {match.status === "completed" && (
                          <Badge className="mt-1 bg-primary">
                            <Trophy className="h-3 w-3 mr-1" />
                            {match.result}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {match.status === "pending" && (
                      <div className="mt-4 flex gap-2">
                        <Button variant="gaming" size="sm" className="flex-1">
                          <Play className="h-4 w-4" />
                          Play Now
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div className="space-y-4">
            <h2 className="text-2xl font-gaming font-bold">Top Players</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "NaijaKing99", rating: 2150, wins: 45 },
                    { rank: 2, name: "LagosLegend", rating: 2089, wins: 38 },
                    { rank: 3, name: "EmekaTheGoat25", rating: 1847, wins: 18, isUser: true },
                    { rank: 4, name: "AbujaPro", rating: 1820, wins: 32 },
                    { rank: 5, name: "FootballKing", rating: 1756, wins: 28 }
                  ].map((player) => (
                    <div key={player.rank} className={`flex items-center justify-between p-3 rounded-lg ${
                      player.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1 ? 'bg-gaming-gold text-black' :
                          player.rank === 2 ? 'bg-gray-400 text-white' :
                          player.rank === 3 ? 'bg-amber-600 text-white' :
                          'bg-muted text-foreground'
                        }`}>
                          {player.rank}
                        </div>
                        <div>
                          <p className={`font-bold ${player.isUser ? 'text-primary' : ''}`}>
                            {player.name}
                          </p>
                          <p className="text-sm text-muted-foreground">{player.wins} wins</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gaming-gold">{player.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;