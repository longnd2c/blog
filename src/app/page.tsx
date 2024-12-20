import { Header } from "@/blocks/HomeBlock/components";
import { ListPostsBlock, OverviewBlock } from "@/blocks/HomeBlock/views";

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <Header />
      <OverviewBlock />
      <ListPostsBlock />
    </div>
  );
}
