import Link from 'next/link';


interface CardProps {
  imageSrc: string;
  title1: string;
  title2: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function News({ imageSrc, title1, title2,  section, date, link, description }: CardProps) {
  const isisoImage = imageSrc === "https://img.freepik.com/premium-photo/hand-using-electronic-signature-document-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_50039-3900.jpg?w=740";
  
  return (
    <div className='bg-[#f2f3f5]'> 
      <div className='image-container'>
        <img
          className={`rounded-md  w-full ${isisoImage ? 'isoFilter ' : ' '}`}
          src={imageSrc}
        />
        <div className='image-overlay rounded-md'></div>
      </div>
      <div className="py-4">
        <div className="text-gray-600 pb-4 font-bold">{section} . <span className='link1'>{title1}</span><span className='link1 mx-1'>{title2}</span></div>
        <p className="text-2xl text-gray-900 gradient-text-light py-2">
          <Link href={link}>{description}</Link>
        </p>
      </div>
      <div className="" >
        <span className="inline-block rounded-full text-sm text-gray-700">{date}</span>
      </div>
    </div>
  );
}

export default function NewsPage() {
  const concatenatedTitles = "AWS, Data Security, Cybersecurity";
  return (
    <section className='mt-30 px-5 md:px-52 pt-20 pb-20 bg-[#f2f3f5]'>
      <div>
      <div><p className='text-gray-600 text-xl font-semibold pb-10'>All News</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center  mx-auto ">
          <News
            imageSrc="https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg?w=740&t=st=1702108318~exp=1702108918~hmac=1453116006523a8359bd00dcb684252a83d313350bfd5409a9c7da733977940a"
            title1="AWS"
            title2="Security Community"
            section="News"
            description="Abluva Initiates ‘AWS Security UG-APAC’"
            date="08 Dec 2023"
            link="abluva-initiates-aws-security-ug-apac"
          /> 
           <News
            imageSrc="https://img.freepik.com/premium-photo/hand-using-electronic-signature-document-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_50039-3900.jpg?w=740"
            title1="ISO27K"
            title2="Information
            Security"
            section="News"
            description="Abluva Attains ISO 27001 Certification"
            date="08 Dec 2023"
            link="abluva-attains-iso-27001-certification"
          /> 
        </div>
      </div>
    </section>
  );
}
