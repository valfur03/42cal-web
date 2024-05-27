import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GITHUB_PROJECT_URL } from "@/common/constants/meta";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <TypographyH1>42cal</TypographyH1>
      <TypographyLead className="my-2 md:my-6 text-center">
        An iCal API to see the 42 events in a calendar.
      </TypographyLead>
      <Button asChild>
        <Link href={GITHUB_PROJECT_URL}>
          <GitHubLogoIcon className="h-5 w-5 mr-2" /> GitHub repository
        </Link>
      </Button>
    </main>
  );
}
