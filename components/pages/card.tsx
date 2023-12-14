import Link from 'next/link';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

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

function Card({ imageSrc, tag1,tag2,tag3, section, date, link, description }: CardProps) {
  
  return (
    <div>
      <div className='image-container'>
        <img
          className="img2 rounded-2xl"
          src={imageSrc}
        
        />
        <div className='image-overlay rounded-2xl'></div>
      </div>
      <div className="py-4">
      <div className='flex'>
          <div className="text-[#d9dbe2] font-bold">{section} . </div>
          {tag3 ? (
            <div className='ml-2'>
              <span className='link font-semibold'>{tag1}</span>
              {tag2 && <span className='mx-2 link font-semibold'>{tag2}</span>}
              {tag3 && <span className='link font-semibold'>{tag3}</span>}
            </div>
          ) : (
            <div className='ml-2'>
              {tag1 && <span className='link font-semibold'>{tag1}</span>}
              {tag2 && <span className='mx-2 link font-semibold'>{tag2}</span>}
            </div>
          )}
        </div>
        <p className="text-2xl text-white gradient-text py-5">
          <Link href={link}>{description}</Link>
        </p>
      </div>
      <div className="pt-2" >
        <span className="inline-block rounded-full text-sm text-gray-500">{date}</span>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <section className='mt-30 px-4 md:px-60 py-20'>
      <div>
        <div className='flex flex-col md:flex-row justify-between md:items-center py-5'>
          <div className='text-3xl mark'>Latest</div>
          <div><Link href="/insights" className='text-md all-insights mark'>All insights<span className='text-sm text-white'> <FontAwesomeIcon icon={faAngleRight}/> </span></Link></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          <Card
           imageSrc="https://img.freepik.com/premium-photo/discussion-young-caucasian-business-woman-modern-office-with-team-meeting-tasks-giving-women-front-office-working-concept-finance-business-girl-power-inclusion-diversity-feminism_155003-39900.jpg?w=740"
           tag1="Security"
           tag2="Compliance"
           section="Blog"
           description="Changing Paradigms in Data Security"
           date="14 Dec 2023"
           link="changing-paradigms-data-security"
          />
          <Card
            imageSrc="https://img.freepik.com/free-photo/group-people-with-laptops_23-2147993343.jpg?w=740&t=st=1701942478~exp=1701943078~hmac=be64ef6d595dc662a8486c06cdea82c3fb4e24dbc7d8cd71017eb3a87b14eb63"
            tag1="Access"
            tag2="Privacy"
            tag3="Governance"
            section="Blog"
            description="Selecting Right Data Protection Technologies"
            date="10 Dec 2023"
            link="selecting-right-data-protection-technologies"
          />
        </div>
      </div>
    </section>
  );
}
