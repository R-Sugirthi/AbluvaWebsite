import Link from 'next/link';
import '../style.css';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  section: string;
  date: string;
  link: string;
}

function Ebook({ imageSrc, title, section, date, link, description }: CardProps) {
  return (
    <div className='bg-[#f2f3f5]'>
      <div className='image-container'>
        <img
          className=" rounded-md"
          src={imageSrc}
          alt={title}
        />
        <div className='image-overlay rounded-2xl'></div>
      </div>
      <div className="py-4">
        <div className="text-gray-600 pb-4 font-bold">{section} . <span className='link1'>{title}</span></div>
        <p className="text-2xl text-gray-900 py-2">
          <Link href={link}>{description}</Link>
        </p>
      </div>
      <div className="" >
        <span className="inline-block rounded-full text-sm text-gray-700">{date}</span>
      </div>
    </div>
  );
}

export default function EbookPage() {
  return (
    <section className='mt-30 px-4 md:px-52 pt-10 pb-20 bg-[#f2f3f5]'>
      <div>
      <div><p className='text-gray-600 text-xl font-semibold pb-10'>eBook</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center ">
           <Ebook
            imageSrc="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595835.jpg?w=740&t=st=1700441701~exp=1700442301~hmac=3858b5506ca28bf0e0a8abb93226b033e92658b7ff66df7e38e911d0b13e067d"
            title="Data Security"
            section="eBook"
            description="How to Make a Data Security Policy"
            date="03 Nov 2023"
            link="/insights/ebook-how-to-make-data-security-policy"
          />
        </div>
      </div>
    </section>
  );
}
