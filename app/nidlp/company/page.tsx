import { CompanyView } from "@/features/NIDLP/company";

export default function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const raw = searchParams.add || searchParams.edit;

  const companyAddedOrEdited = Array.isArray(raw)
    ? raw[0]
    : raw;

  return (
    <CompanyView companyAddedOrEdited={companyAddedOrEdited} />
  );
}