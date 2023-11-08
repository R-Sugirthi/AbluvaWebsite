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

export default function ResearchPage() {
  return (
    <section className='mt-30 px-4 md:px-60 py-20'>
      <div>
        <div className='flex flex-col md:flex-row justify-between md:items-center py-5'>
          <div className='text-3xl mark'>Latest Researches</div>
          <div><a href="/allinsights" className='text-md all-insights'>All insights</a></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          <Research
            imageSrc="https://img.freepik.com/premium-vector/futuristic-blue-dots-background-cyber-background-with-particles-different-size-technology-particles-illustration_658411-349.jpg?w=996"
            title="Data Security"
            section="Research"
            description="repellendus quidem modi beatae libero similique quas molestiae ab deserunt expedita, illum sequi sunt nam suscipit debitis."
            date="02 Nov 2023"
            link="/blog"
          />
          <Research
            imageSrc="https://img.freepik.com/premium-vector/abstract-geometric-gradient-squares-background_515038-13006.jpg?w=900"
            title="Data Security"
            section="Research"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias obcaecati commodi a repellendus quidem modi beatae libero similique "
            date="03 Nov 2023"
            link="/blog2"
          />
        </div>
      </div>
    </section>
  );
}
