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
          <div className='text-3xl mark'>Latest Blogs</div>
          <div><a href="/allinsights" className='text-md all-insights'>All insights</a></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          <Card
            imageSrc="https://img.freepik.com/free-photo/young-person-during-intership_23-2149315587.jpg?w=740&t=st=1698914857~exp=1698915457~hmac=b357f0fe422e3d77e3416b021aba47f8d540341acf11cd305afb6304c69367a4"
            title="Data Security"
            section="Blog"
            description="Changing Paradigms in Data Security"
            date="02 Nov 2023"
            link="/blog"
          />
          <Card
            imageSrc="https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149313756.jpg?w=740&t=st=1698914818~exp=1698915418~hmac=d982a9b44a6ae2c3c4ed9d93b555481b42a7ea7418bb7ccf390e0b531b4d58c5"
            title="Data Security"
            section="Blog"
            description="Selecting Right Data Protection Technologies"
            date="03 Nov 2023"
            link="/blog2"
          />
        </div>
      </div>
    </section>
  );
}
