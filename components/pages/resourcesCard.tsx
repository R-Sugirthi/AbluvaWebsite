import Link from 'next/link';
import '../style.css';

interface CardProps {
  imageSrc: string;
  tag1?: string; 
  tag2?: string;
  tag3?: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function ResourcesCard({ imageSrc, tag1,tag2,tag3, section, date, link, description }: CardProps) {
 
  return (
    <div className='bg-[#f2f3f5] py-5'>
      
      <div className='image-container'>
        <img
          className="rounded-md w-full"
          src={imageSrc}
        />
        <div className='image-overlay rounded-md'></div>
      </div>
      <div className="py-4">
      <div className='flex'>
          <div className="text-gray-600 font-bold">{section} . </div>
          {tag3 ? (
            <div className='ml-2'>
              <span className='link1'>{tag1}</span>
              {tag2 && <span className='mx-2 link1'>{tag2}</span>}
              {tag3 && <span className='link1'>{tag3}</span>}
            </div>
          ) : (
            <div className='ml-2'>
              {tag1 && <span className='link1'>{tag1}</span>}
              {tag2 && <span className='mx-2 link1'>{tag2}</span>}
            </div>
          )}
        </div>
        <p className="text-2xl text-gray-900 py-2 gradient-text-light">
          <Link href={link}>{description}</Link>
        </p>
      </div>
      <div className="" >
        <span className="inline-block rounded-full text-sm text-gray-700">{date}</span>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <section className='mt-30 px-4 md:px-52 pt-10 pb-20 bg-[#f2f3f5]'>
      <div>
      <div><p className='text-gray-600 text-xl font-semibold pb-10'>eBook and Blogs</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center ">
        <ResourcesCard
            imageSrc="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595835.jpg?w=740&t=st=1700441701~exp=1700442301~hmac=3858b5506ca28bf0e0a8abb93226b033e92658b7ff66df7e38e911d0b13e067d"
            tag1="Privacy"
            tag2="Compliance"          
            section="eBook"
            description="The Evolving Landscape of Data Privacy Regulations"
            date="14 Dec 2023"
            link="/insights/ebook-evolving-landscape-data-privacy-regulations"
          />
          <ResourcesCard
            imageSrc="https://img.freepik.com/premium-photo/medium-shot-people-debating-ideas-office_23-2149345255.jpg?w=740"
            tag1="Security"
            tag2="Compliance"
            section="Blog"
            description="Changing Paradigms in Data Security"
            date="14 Dec 2023"
            link="/insights/blogs/changing-paradigms-data-security"
          />
          <ResourcesCard
            imageSrc="https://img.freepik.com/free-photo/group-people-with-laptops_23-2147993343.jpg?w=740&t=st=1701942478~exp=1701943078~hmac=be64ef6d595dc662a8486c06cdea82c3fb4e24dbc7d8cd71017eb3a87b14eb63"
            tag1="Access"
            tag2="Privacy"
            tag3="Governance"
            section="Blog"
            description="Selecting Right Data Protection Technologies"
            date="10 Dec 2023"
            link="/insights/blogs/selecting-right-data-protection-technologies"
          />
           <ResourcesCard
            imageSrc="https://img.freepik.com/premium-photo/young-business-people-group-have-meeting-working-modern-bright-office-indoor_530697-11140.jpg?w=740"
            tag1="Security"
            tag2="Access"
            section="Blog"
            description="A Comprehensive Guide to Cloud Security"
            date="03 Dec 2023"
            link="/insights/blogs/comprehensive-guide-cloud-security"
          />
           <ResourcesCard
            imageSrc="https://img.freepik.com/free-photo/young-thief-working-hack-computer-system-multi-monitors-using-server-malware-plant-virus-dangerous-hacker-doing-phishing-committing-cyberterrorism-stealing-passwords_482257-68986.jpg?w=740&t=st=1702110940~exp=1702111540~hmac=b964641f359815c2294a698008b60bda7f6df19dadd524aa30ad5ab6cdbc622a"
            tag1="Access"
            tag2="Privacy"
            tag3="Governance"
            section="Blog"
            description="Understanding Security Posture: Strengthening Your Cybersecurity Defences"
            date="28 Nov 2023"
            link="/insights/blogs/understanding-security-posture"
          />
        </div>
      </div>
    </section>
  );
}


