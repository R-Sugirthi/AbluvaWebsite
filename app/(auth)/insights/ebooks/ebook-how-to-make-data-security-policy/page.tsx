import EbookTemplate from "@/components/widgets/ebook";

export const metadata = {
  title: 'eBook | ABLUVA',
  description: 'Explore ABLUVA\'s eBook on \'How to Make a Data Security Policy.\' Dive into the intricate world of privacy and compliance regulations to navigate the complexities. ',
};

export default function Ebook1() {
  const pdfLink = "/How to Make a Data Security Policy.pdf";

  return (
    <>
      <EbookTemplate
        title="How to Make a Data Security Policy"
        description="A step-by-step guide on formulating an effective Data Security Policy for safeguarding your organization's valuable assets."
        pdfLink={pdfLink}
        tags={["Access", "Security"]}
        date="14 Dec 2023"
      />
    </>
  );
}
