import EbookTemplate from "@/components/widgets/ebook";

export const metadata = {
  title: 'eBook | ABLUVA',
  description: 'Explore ABLUVA\'s eBook on \'Implementing Principles of Least Privilege in Cybersecurity\'',
};

export default function Ebook2() {
  const pdfLink = "/Implementing Principles of Least Privilege in Cybersecurity.pdf";
  return (
    <>
      <EbookTemplate
        title="Implementing Principles of Least Privilege"
        description="In an age where cybersecurity threats are constantly evolving and becoming more sophisticated, safeguarding your organization's sensitive data and systems has never been more critical. Among the arsenal of strategies and practices available to cybersecurity professionals, one principle stands out as a fundamental cornerstone: the Principle of Least Privilege (PoLP)."
        pdfLink={pdfLink}
        tags={["Access", "Security"]}
        date="12 Jan 2024"
      />
    </>
  );
}
