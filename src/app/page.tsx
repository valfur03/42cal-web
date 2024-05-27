import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <TypographyH1>42cal</TypographyH1>
      <TypographyLead className="mt-2 md:mt-6 text-center">
        An iCal API to see the 42 events in a calendar.
      </TypographyLead>
    </main>
  );
}
