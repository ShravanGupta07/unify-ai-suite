import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24">
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;
