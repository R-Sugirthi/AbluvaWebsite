import Link from 'next/link';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function Card({ imageSrc, title, section, date, link, description }: CardProps) {
  
  return (
    <div>
      <div className='image-container'>
        <img
          className="img2 rounded-2xl"
          src={imageSrc}
          alt={title}
        />
        <div className='image-overlay rounded-2xl'></div>
      </div>
      <div className="py-4">
        <div className="text-[#d9dbe2] pb-4 font-semibold">{section} . <span className='link'>{title}</span></div>
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
            title="Data Security"
            section="Blog"
            description="Changing Paradigms in Data Security"
            date="02 Nov 2023"
            link="changing-paradigms-data-security"
          />
          <Card
            imageSrc="https://img.freepik.com/free-photo/group-people-with-laptops_23-2147993343.jpg?w=740&t=st=1701942478~exp=1701943078~hmac=be64ef6d595dc662a8486c06cdea82c3fb4e24dbc7d8cd71017eb3a87b14eb63"
            title="Data Security"
            section="Blog"
            description="Selecting Right Data Protection Technologies"
            date="03 Nov 2023"
            link="selecting-right-data-protection-technologies"
          />
        </div>
      </div>
    </section>
  );
}
