import "./news.css"
import Link from 'next/link';

export default function News1() {
  return (
    <section className='p-5 md:px-72 md:pb-20 sm:py-8 bg-[#f2f3f5] text-justify'>
      <div>
        <p className='text-gray-500 py-5 border-b border-gray-500 mark'>Know more</p>
      </div>
      <div>
        <p className='subText pt-5'>The AWS Security APAC User Group is a non-promotional community initiative by Abluva, aimed at creating a space for security professionals to connect, share insights, and discuss best practices related to Amazon Web Services (AWS). The group provides a platform for members to engage in meaningful conversations, stay updated on the latest security trends, and build a network of like-minded individuals passionate about securing cloud environments.

        </p><br />

        <p className='mainText'>The key objectives of the community are:
        </p><br />
        <p className='subText md:ml-10'>
          <ul className='list-disc'>
            <li><span className="font-semibold">Knowledge Exchange : </span>Gain insights from industry experts and share your own experiences to enhance collective knowledge in AWS security.
            </li><br />
            <li><span className="font-semibold">Networking Opportunities : </span>Connect with fellow security enthusiasts, professionals, and experts through regular meetups, webinars, and online discussions.
            </li><br />
            <li><span className="font-semibold">Community Support :</span>Collaborate with peers facing similar challenges, and contribute to the growth of a supportive and engaged security.
            </li>
          </ul>
        </p><br />

        <p className='mainText'>Get Involved:</p><br />
        <p className='subText'>Security enthusiasts, professionals, and anyone passionate about AWS security are invited to join the AWS Security APAC User Group.
        </p><br />

        <div className="grid grid-cols-3">
          <div className="col-span-1 flex">
            <p className='subText'><span className="font-semibold">Meetup :</span></p>
          </div>
          <div className="col-span-2">
            <p className='subText'><Link href='https://www.meetup.com/aws-security-user-group-apac/' target='_blank' rel='noopener noreferrer' className='text-violet-800 underline'>https://www.meetup.com/aws-security-user-group-apac/</Link></p>
          </div>
        </div>

        <div className="grid grid-cols-3 pt-3">
          <div className="col-span-1 flex">
            <p className='subText font-semibold'><span className="font-semibold">Contact :</span></p>
          </div>
          <div className="col-span-2">
            <p className='subText'>
              <Link href='mailto:aws.secug.apac@gmail.com' target='_blank' rel='noopener noreferrer' className='text-violet-800 underline'>
                aws.secug.apac@gmail.com
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 pt-3">
          <div className="col-span-1 flex">
            <p className='subText'><span className="font-semibold">Github :</span></p>
          </div>
          <div className="col-span-2">
            <p className='subText'><Link href='https://github.com/aws-secug/home' target='_blank' rel='noopener noreferrer' className='text-violet-800 underline'>https://github.com/aws-secug/home</Link></p>
          </div>
        </div>

        <div className="grid grid-cols-3 pt-3">
          <div className="col-span-1 flex">
            <p className='subText'><span className="font-semibold">Linkedin :</span></p>
          </div>
          <div className="col-span-2">
            <p className='subText'><Link href='https://www.linkedin.com/groups/14352594/' target='_blank' rel='noopener noreferrer' className='text-violet-800 underline'>https://www.linkedin.com/groups/14352594/</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}
