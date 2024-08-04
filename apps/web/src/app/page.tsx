import { Button } from "@yieldhive/ui/components/ui/button";
import { Something } from "@yieldhive/utils/types/sample";

export default function Page(): JSX.Element {
  const something: Something = {
    id: 1,
    name: "Cool",
  };
  console.log("🚀 ~ file: page.tsx:9 ~ Page ~ something:", something);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Button>Something Cool</Button>
    </main>
  );
}
