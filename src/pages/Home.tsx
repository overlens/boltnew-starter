import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex items-center justify-center p-8">
      <Link to="/design-system">
        <Button>Ver Design System</Button>
      </Link>
    </div>
  );
}

export default Home;
