import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GITHUB_PROJECT_URL } from "@/common/constants/meta";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { QueryGenerator } from "@/components/query-generator/query-generator";
import { fetchCampuses } from "@/lib/fetchers/fetch-campuses";
import { Suspense } from "react";

export default async function Home() {
  const campuses = await fetchCampuses();

  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-start px-8 py-16 md:px-16 md:py-32 mx-auto max-w-6xl">
      <TypographyH1>42cal</TypographyH1>
      <TypographyLead className="my-2 md:my-6 text-center">
        An iCal API to see the 42 events in a calendar.
      </TypographyLead>
      <Button asChild>
        <Link href={GITHUB_PROJECT_URL}>
          <GitHubLogoIcon className="h-5 w-5 mr-2" /> GitHub repository
        </Link>
      </Button>
      <Suspense>
        <QueryGenerator campuses={campuses} />
      </Suspense>
    </main>
  );
}
