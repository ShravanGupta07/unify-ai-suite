import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, LineChart, FileText } from "lucide-react";

const tools = [
  { icon: MessageSquare, title: "AI Chatbot", gradient: "from-blue-500 to-cyan-500" },
  { icon: Brain, title: "Agentic Bots", gradient: "from-purple-500 to-pink-500" },
  { icon: LineChart, title: "Sentiment Analysis", gradient: "from-green-500 to-emerald-500" },
  { icon: FileText, title: "Document Summarizer", gradient: "from-orange-500 to-red-500" },
];

const Playground = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Playground
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Test all AI tools in one place. No setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                <tool.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Coming soon - Interactive playground
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playground;
