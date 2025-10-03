import { MessageSquare, Brain, LineChart, FileText } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Auto-generate Q&A pairs from your content. Deploy intelligent chatbots with a single API key.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Agentic AI Bots",
    description: "Ready-made AI agents for research, planning, and automation. Complete tasks autonomously.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: LineChart,
    title: "Sentiment Analysis",
    description: "Analyze text sentiment with confidence scores. Get positive, negative, or neutral insights instantly.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Document Summarizer",
    description: "Upload PDFs or text and get intelligent summaries. Choose short, medium, or long formats.",
    gradient: "from-orange-500 to-red-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Powerful AI Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate AI into your applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
