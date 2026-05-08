import { CompanyTable } from "@/features/NIDLP/company/components/CompanyTable";
import { ExportDataButton } from "../dashboard/internal-dashboard/components/ExportDataButton";
import { companiesData } from "../data/company-data";

export function CompanyView({
  companyAddedOrEdited,
}: {
  companyAddedOrEdited?: string;
}) {
  return (
    <div className=" pt-14">
      <ExportDataButton data={companiesData} filename="companies.json" />
     <CompanyTable companyAddedOrEdited={companyAddedOrEdited} />
    </div>
  );
}
