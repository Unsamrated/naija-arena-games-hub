import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { ArrowLeft, Upload, Camera, Trophy, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock match data
const mockMatch = {
  id: "M001",
  opponent: "BunmiFootball",
  type: "1v1 Match",
  stake: "₦1,000",
  scheduledTime: "Today 7:00 PM",
  playerA: "EmekaTheGoat25",
  playerB: "BunmiFootball"
};

const MatchReport = () => {
  const { toast } = useToast();
  const [scores, setScores] = useState({
    playerA: "",
    playerB: ""
  });
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setScreenshot(file);
        toast({
          title: "Screenshot uploaded!",
          description: "Your match screenshot has been attached.",
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (PNG, JPG, etc.)",
          variant: "destructive"
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!scores.playerA || !scores.playerB) {
      toast({
        title: "Missing scores",
        description: "Please enter scores for both players.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    if (!screenshot) {
      toast({
        title: "Screenshot required",
        description: "Please upload a screenshot of the final score.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Match result submitted! 🎉",
      description: "Result verified automatically. Updating leaderboard...",
    });

    // In real app, would redirect to dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  };

  const winner = scores.playerA && scores.playerB ? 
    (parseInt(scores.playerA) > parseInt(scores.playerB) ? mockMatch.playerA : mockMatch.playerB) : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Logo size="sm" />
            <div>
              <h1 className="font-gaming font-bold">Match Report</h1>
              <p className="text-sm text-muted-foreground">Submit your EAFC 25 results</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Match Info */}
        <Card className="shadow-gaming">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-gaming-gold" />
              Match Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Match ID</p>
                <p className="font-bold">{mockMatch.id}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Stake</p>
                <p className="font-bold text-gaming-gold">{mockMatch.stake}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Player A</p>
                <p className="font-bold text-primary">{mockMatch.playerA}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Player B</p>
                <p className="font-bold">{mockMatch.playerB}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Input */}
        <Card>
          <CardHeader>
            <CardTitle>Final Score</CardTitle>
            <CardDescription>
              Enter the final match score exactly as shown in EAFC 25
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="playerA-score">{mockMatch.playerA} Goals</Label>
                  <Input
                    id="playerA-score"
                    type="number"
                    min="0"
                    max="20"
                    placeholder="0"
                    value={scores.playerA}
                    onChange={(e) => setScores(prev => ({ ...prev, playerA: e.target.value }))}
                    className="text-center text-2xl font-bold"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="playerB-score">{mockMatch.playerB} Goals</Label>
                  <Input
                    id="playerB-score"
                    type="number"
                    min="0"
                    max="20"
                    placeholder="0"
                    value={scores.playerB}
                    onChange={(e) => setScores(prev => ({ ...prev, playerB: e.target.value }))}
                    className="text-center text-2xl font-bold"
                    required
                  />
                </div>
              </div>

              {winner && (
                <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <Trophy className="h-6 w-6 text-gaming-gold mx-auto mb-2" />
                  <p className="font-bold text-lg">Winner: {winner}</p>
                  <p className="text-sm text-muted-foreground">
                    Score: {scores.playerA} - {scores.playerB}
                  </p>
                </div>
              )}

              {/* Screenshot Upload */}
              <div className="space-y-2">
                <Label htmlFor="screenshot">Match Screenshot</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  {screenshot ? (
                    <div className="space-y-2">
                      <Camera className="h-8 w-8 text-gaming-gold mx-auto" />
                      <p className="font-medium text-gaming-gold">{screenshot.name}</p>
                      <p className="text-sm text-muted-foreground">Screenshot uploaded successfully</p>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setScreenshot(null)}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Upload final score screenshot</p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG up to 10MB. Must clearly show final score.
                      </p>
                      <Button type="button" variant="outline" size="sm" asChild>
                        <label htmlFor="screenshot" className="cursor-pointer">
                          Choose File
                        </label>
                      </Button>
                    </div>
                  )}
                  <input
                    id="screenshot"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional details about the match..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>

              {/* Important Notice */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <Trophy className="h-5 w-5 text-gaming-gold flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-primary">Smart Verification:</p>
                    <p className="text-sm text-primary/80">
                      Our AI system automatically verifies screenshots and updates results instantly. 
                      Fair play is ensured through advanced image analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="gaming" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Result..." : "Submit Match Result 🏆"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MatchReport;