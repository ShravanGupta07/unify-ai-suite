import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              API Documentation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get started with AI Hub API in minutes
          </p>

          <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              Quick Start
            </h2>
            <div className="bg-secondary/50 rounded-lg p-6 font-mono text-sm">
              <div className="text-muted-foreground mb-2"># Get your API key from dashboard</div>
              <div className="text-foreground">curl https://api.aihub.com/v1/chat \</div>
              <div className="text-foreground ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
              <div className="text-foreground ml-4">-d '{"{"}"message": "Hello AI"{"}"}' </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-muted-foreground">
                All API requests require authentication using your API key in the Authorization header.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-2">Rate Limits</h3>
              <p className="text-muted-foreground">
                Free tier: 1,000 requests/month. Pro: 100,000 requests/month. Enterprise: Unlimited.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-2">Endpoints</h3>
              <p className="text-muted-foreground">
                Full API reference coming soon. Sign up to get early access to documentation.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
