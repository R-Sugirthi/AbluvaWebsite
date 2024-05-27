import Link from 'next/link';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export const metadata = {
  title: 'Terms of Service | ABLUVA',
  description: 'Explore Abluva\'s Terms of Service. Understand the conditions and restrictions for using our website. Learn about licenses, disclaimers, limitations, and more.',
};

export default function TermsOfService() {
  return (
    <>


      <section className=' p-5 md:px-72 md:pb-10 '>
        <div>
          <p className='text-gray-100 py-5 primary-color  text-5xl'>Terms of Service</p>
        </div>
        <div>
          <p className='mainText pt-5'>Terms
          </p><br />
          <p className='subText'>By accessing the website at <Link href='https://www.Abluva.com' target='_blank' rel='noopener noreferrer' className='primary-color underline'>Abluva.com</Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and tradefont  law.</p><br /><br />

          <p className='mainText'>Use License
          </p><br />
          <p className='subText'>Permission is granted to temporarily download one copy of the materials (information or software) on Abluva’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p><br />
          <p className='subText md:ml-10 ml-5'>
            <ul className='list-disc'>
              <li>modify or copy the materials;
              </li><br />
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              </li><br />
              <li>attempt to decompile or reverse engineer any software contained on Abluva’s website;
              </li><br />
              <li>remove any copyright or other proprietary notations from the materials; or
              </li><br />
              <li>transfer the materials to another person or “mirror” the materials on any other server.
              </li>
            </ul>
          </p><br />
          <p className='subText'>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Abluva at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p><br /><br />

          <p className='mainText'>Disclaimer
          </p><br />
          <p className='subText'>The materials on Abluva’s website are provided on an ‘as is’ basis. Abluva makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p><br />
          <p className='subText'>Further, Abluva does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p><br /><br />

          <p className='mainText'>Limitations</p><br />
          <p className='subText'>In no event shall Abluva or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Abluva’s website, even if Abluva or a Abluva authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p><br /><br />

          <p className='mainText'>Accuracy of Materials</p><br />
          <p className='subText'>The materials appearing on Abluva’s website could include technical, typographical, or photographic errors. Abluva does not warrant that any of the materials on its website are accurate, complete or current. Abluva may make changes to the materials contained on its website at any time without notice. However Abluva does not make any commitment to update the materials.
          </p><br /><br />

          <p className='mainText'>Links
          </p><br />
          <p className='subText'>Abluva has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Abluva of the site. Use of any such linked website is at the user’s own risk.
          </p><br /><br />

          <p className='mainText'>Modifications
          </p><br />
          <p className='subText'>Abluva may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p><br /><br />

          <p className='mainText'>Governing Law
          </p><br />
          <p className='subText'>These terms and conditions are governed by and construed in accordance with the laws of CA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p><br /><br />

        </div>
      </section>

    </>
  )
}
