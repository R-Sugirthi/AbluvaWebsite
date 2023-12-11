import Link from 'next/link';
import './style.css';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function Research({ imageSrc, title, section, date, link, description }: CardProps) {
  return (
    <div>
      <div className='image-container'>
        <img
          className="rounded-2xl object-cover h-72 grayscale"
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

export default function ResearchPage() {
  return (
    <section className='mt-30 px-4 md:px-60 py-20'>
      <div>
        <div className='flex flex-col md:flex-row justify-between md:items-center py-5'>
          <div className='text-3xl mark'>Research</div>
          {/* <div><Link href="/allinsights" className='text-md all-insights'>All insights</Link></div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          <Research
            imageSrc="https://img.freepik.com/premium-photo/molecules-background-with-polygonal-shapes_7247-696.jpg?w=826"
            title="Data Security"
            section="Leaderboards"
            description="PaPS Ensemble leads the Zero Day Intrusion Tasks"
            date="02 Nov 2023"
            link="/research#paps"
          />
          <Research
            imageSrc="https://img.freepik.com/free-vector/banner-with-hexagonal-pattern_1048-11793.jpg?w=996&t=st=1701938098~exp=1701938698~hmac=a9e388eb8f8e0efc0b738076534a9d70f3bec8ade6ba072a5015ad2c43481848"
            title="Data Security"
            section="Research Papers"
            description="Take a Glimpse into our research, where ideas flourish and new horizons unfold."
            date="03 Nov 2023"
            link="/research#research-papers"
          />
        </div>
      </div>
    </section>
  );
}
