import DocPage from "@/components/DocPage";
import DeletePanel from "@/components/DeletePanel";
import { DELETE } from "@/lib/legal";

export const metadata = {
  title: "Delete your data",
  description:
    "Delete your data or withdraw consent to health-data processing. A working page, not an email address. Takes effect right away.",
};

export default function DeletePage() {
  return (
    <DocPage title={DELETE.title} intro={DELETE.intro}>
      <div className="mt-10 max-w-measure">
        <DeletePanel />
      </div>
    </DocPage>
  );
}
