import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { Gamepad2, Trophy, Users } from "lucide-react";

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ 
    fullName: "", 
    email: "", 
    password: "", 
    psnUsername: "" 
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would authenticate
    console.log("Login attempt:", loginData);
    // For demo, redirect to main app
    window.location.href = "/dashboard";
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", signupData);
    // For demo, redirect to main app
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Hero */}
        <div className="text-center space-y-4">
          <Logo size="lg" className="justify-center" />
          <div className="space-y-2">
            <h1 className="text-3xl font-gaming font-bold bg-gradient-gaming bg-clip-text text-transparent">
              Welcome to NGameHut
            </h1>
            <p className="text-muted-foreground">
              The ultimate EAFC 25 tournament platform for Nigerian gamers
            </p>
          </div>
          
          {/* Features highlights */}
          <div className="flex justify-center gap-6 pt-4">
            <div className="text-center">
              <Gamepad2 className="h-6 w-6 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">1v1 Matches</p>
            </div>
            <div className="text-center">
              <Trophy className="h-6 w-6 text-gaming-gold mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Tournaments</p>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 text-gaming-neon mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Community</p>
            </div>
          </div>
        </div>

        {/* Auth Forms */}
        <Card className="w-full shadow-gaming border-border/50">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className="font-bold">Login</TabsTrigger>
              <TabsTrigger value="signup" className="font-bold">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <CardHeader>
                <CardTitle className="text-xl font-gaming">Welcome Back!</CardTitle>
                <CardDescription>
                  Enter your credentials to access your gaming profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" variant="gaming" className="w-full" size="lg">
                    Sign In & Game On! 🎮
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="signup">
              <CardHeader>
                <CardTitle className="text-xl font-gaming">Join the Hut!</CardTitle>
                <CardDescription>
                  Create your account and start competing in EAFC 25 tournaments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      placeholder="Emeka Johnson"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData(prev => ({ ...prev, fullName: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="emeka.johnson@gmail.com"
                      value={signupData.email}
                      onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-psn">PSN Username</Label>
                    <Input
                      id="signup-psn"
                      placeholder="EmekaTheGoat25"
                      value={signupData.psnUsername}
                      onChange={(e) => setSignupData(prev => ({ ...prev, psnUsername: e.target.value }))}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Make sure this matches your PlayStation username exactly
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" variant="gaming" className="w-full" size="lg">
                    Create Account & Start Gaming! 🏆
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Ready to dominate EAFC 25? Join thousands of Nigerian gamers!</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;