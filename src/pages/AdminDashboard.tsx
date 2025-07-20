import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Users, 
  Trophy,
  Flag,
  Eye,
  UserCheck,
  Settings
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for admin
const mockPendingMatches = [
  {
    id: "M001",
    playerA: "EmekaTheGoat25",
    playerB: "BunmiFootball", 
    scoreA: 3,
    scoreB: 1,
    stake: "₦1,000",
    submittedBy: "EmekaTheGoat25",
    screenshot: "screenshot1.jpg",
    submittedAt: "2 hours ago"
  },
  {
    id: "M002",
    playerA: "NaijaKing99",
    playerB: "LagosLegend",
    scoreA: 2,
    scoreB: 4,
    stake: "₦2,500",
    submittedBy: "LagosLegend",
    screenshot: "screenshot2.jpg",
    submittedAt: "5 hours ago"
  }
];

const mockDisputes = [
  {
    id: "D001",
    matchId: "M003",
    reporter: "AbujaPro",
    reported: "FootballKing",
    reason: "False score submission",
    description: "Claims opponent submitted wrong score",
    status: "pending",
    reportedAt: "1 day ago"
  }
];

const mockUsers = [
  {
    id: "U001",
    name: "Emeka Johnson",
    psnUsername: "EmekaTheGoat25",
    email: "emeka@example.com",
    isVerified: true,
    matches: 23,
    wins: 18,
    rating: 1847,
    joinedAt: "2 weeks ago"
  },
  {
    id: "U002",
    name: "Bunmi Adebayo", 
    psnUsername: "BunmiFootball",
    email: "bunmi@example.com",
    isVerified: false,
    matches: 15,
    wins: 8,
    rating: 1532,
    joinedAt: "1 week ago"
  }
];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("matches");

  const handleMatchApproval = (matchId: string, approved: boolean) => {
    toast({
      title: approved ? "Match approved! ✅" : "Match rejected! ❌",
      description: `Match ${matchId} has been ${approved ? 'approved' : 'rejected'}.`,
    });
  };

  const handleUserVerification = (userId: string) => {
    toast({
      title: "User verified! ✅",
      description: "PSN username has been verified and user can now compete.",
    });
  };

  const handleDisputeResolution = (disputeId: string, resolution: string) => {
    toast({
      title: "Dispute resolved! ⚖️",
      description: `Dispute ${disputeId} has been marked as ${resolution}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo size="md" />
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gaming-gold" />
                <div>
                  <h1 className="font-gaming font-bold">Admin Dashboard</h1>
                  <p className="text-sm text-muted-foreground">NGameHut Management</p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="bg-gaming-gold/10 text-gaming-gold border-gaming-gold">
              Administrator
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <AlertCircle className="h-8 w-8 text-gaming-gold mx-auto mb-2" />
              <p className="text-2xl font-bold text-gaming-gold">{mockPendingMatches.length}</p>
              <p className="text-sm text-muted-foreground">Pending Matches</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Flag className="h-8 w-8 text-destructive mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockDisputes.length}</p>
              <p className="text-sm text-muted-foreground">Active Disputes</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockUsers.length}</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <UserCheck className="h-8 w-8 text-gaming-neon mx-auto mb-2" />
              <p className="text-2xl font-bold">{mockUsers.filter(u => !u.isVerified).length}</p>
              <p className="text-sm text-muted-foreground">Unverified Users</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="matches" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Match Verification
            </TabsTrigger>
            <TabsTrigger value="disputes" className="flex items-center gap-2">
              <Flag className="h-4 w-4" />
              Disputes
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-gaming font-bold">Pending Match Results</h2>
              <Badge variant="outline">
                {mockPendingMatches.length} pending
              </Badge>
            </div>

            <div className="grid gap-4">
              {mockPendingMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-gaming transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Match {match.id}</CardTitle>
                        <CardDescription>
                          Submitted by {match.submittedBy} • {match.submittedAt}
                        </CardDescription>
                      </div>
                      <Badge className="bg-gaming-gold text-accent-foreground">
                        {match.stake}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Match Details */}
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="font-bold">{match.playerA}</p>
                            <p className="text-2xl font-bold text-primary">{match.scoreA}</p>
                          </div>
                          <div className="flex items-center justify-center">
                            <span className="text-muted-foreground font-bold">VS</span>
                          </div>
                          <div>
                            <p className="font-bold">{match.playerB}</p>
                            <p className="text-2xl font-bold text-primary">{match.scoreB}</p>
                          </div>
                        </div>
                      </div>

                      {/* Screenshot Review */}
                      <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                        <Eye className="h-5 w-5 text-primary" />
                        <span className="text-sm">Screenshot: {match.screenshot}</span>
                        <Button variant="outline" size="sm">
                          View Screenshot
                        </Button>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button 
                          variant="gaming" 
                          className="flex-1"
                          onClick={() => handleMatchApproval(match.id, true)}
                        >
                          <CheckCircle className="h-4 w-4" />
                          Approve Result
                        </Button>
                        <Button 
                          variant="destructive" 
                          className="flex-1"
                          onClick={() => handleMatchApproval(match.id, false)}
                        >
                          <XCircle className="h-4 w-4" />
                          Reject Result
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="disputes" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-gaming font-bold">Active Disputes</h2>
              <Badge variant="outline">
                {mockDisputes.length} active
              </Badge>
            </div>

            <div className="grid gap-4">
              {mockDisputes.map((dispute) => (
                <Card key={dispute.id} className="hover:shadow-gaming transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Dispute {dispute.id}</CardTitle>
                        <CardDescription>
                          {dispute.reporter} vs {dispute.reported} • {dispute.reportedAt}
                        </CardDescription>
                      </div>
                      <Badge variant="destructive">
                        {dispute.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold text-sm text-muted-foreground">Reason:</p>
                        <p>{dispute.reason}</p>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-muted-foreground">Description:</p>
                        <p className="text-sm">{dispute.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="gaming" 
                          size="sm"
                          onClick={() => handleDisputeResolution(dispute.id, "resolved")}
                        >
                          Resolve in Favor of Reporter
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleDisputeResolution(dispute.id, "dismissed")}
                        >
                          Dismiss Dispute
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-gaming font-bold">User Management</h2>
              <Badge variant="outline">
                {mockUsers.length} total users
              </Badge>
            </div>

            <div className="grid gap-4">
              {mockUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-gaming transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <p className="font-bold">{user.name}</p>
                          {user.isVerified ? (
                            <Badge variant="secondary" className="bg-gaming-neon/20 text-gaming-neon">
                              <UserCheck className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              Unverified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">PSN: {user.psnUsername}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="flex gap-4 text-sm">
                          <span>Matches: {user.matches}</span>
                          <span>Wins: {user.wins}</span>
                          <span>Rating: {user.rating}</span>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-sm text-muted-foreground">Joined {user.joinedAt}</p>
                        {!user.isVerified && (
                          <Button 
                            variant="gaming" 
                            size="sm"
                            onClick={() => handleUserVerification(user.id)}
                          >
                            <UserCheck className="h-4 w-4" />
                            Verify PSN
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-gaming font-bold">Platform Settings</h2>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tournament Configuration</CardTitle>
                  <CardDescription>Manage tournament settings and defaults</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Configure Tournaments</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Settings</CardTitle>
                  <CardDescription>Manage stake limits and payment processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Payment Configuration</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Moderation</CardTitle>
                  <CardDescription>Banned users and content moderation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Moderation Tools</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;