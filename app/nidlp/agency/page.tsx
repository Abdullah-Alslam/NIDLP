import AgencyView from "@/features/NIDLP/agency";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const raw = searchParams.add || searchParams.edit;

  const agencyAddedOrEdited = Array.isArray(raw)
    ? raw[0]
    : raw;

  return (
    <AgencyView agencyAddedOrEdited={agencyAddedOrEdited} />
  );
}