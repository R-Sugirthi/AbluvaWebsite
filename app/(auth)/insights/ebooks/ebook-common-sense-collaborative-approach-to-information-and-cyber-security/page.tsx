import EbookTemplate from "@/components/widgets/ebook";

export const metadata = {
  title: 'eBook | ABLUVA',
  description: 'Explore ABLUVA\'s eBook on \'A Common Sense & Collaborative Approach to Information and Cyber Security\'',
};

export default function Ebook3() {
  const pdfLink = "/A Common Sense & Collaborative Approach to Information and Cyber Security.pdf";
  return (
    <>
      <EbookTemplate
        title="A Common Sense & Collaborative Approach to Information and Cyber Security"
        description="In today's digital world, where cyber threats are getting more clever, it's crucial for everyone in a company to use common sense and work together to keep important information safe. This paper talks about why it's so important for people to be careful and smart in their daily work to avoid falling for tricks that could lead to data breaches. It also explains how everyone in a company, from the top to the bottom, has a role to play in keeping the organization's defenses strong."
        pdfLink={pdfLink}
        tags={["Cybersecurity", "Best practices"]}
        date="18 Mar 2024"
      />
    </>
  );
}
