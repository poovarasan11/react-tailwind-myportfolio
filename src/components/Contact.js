

import ResumeImg from "../assets/resume.jpg";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Contact() {

    const config = {
        email: 'poovarasan1999skp@gmail.com',
        phone: '7200472205',
        social: {
            linkedin: 'https://www.linkedin.com/in/poovarasan-s-3a299b227/',
            gitup: "https://github.com/poovarasan11"
        }

    }
    return (<>
        <section className="flex flex-col  bg-primary px-5 py-32 text-white" id='contact'>
            {/* <div className="py-5 md:w-1/2 flex justify-end">
                <img className="w-[300px]" src={ResumeImg} />
            </div> */}
            <div className="flex flex-col items-center">

                <h1 className="text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold">Contact</h1>
                <p className="pb-5">If you want to discuss more in detail, please contact me.</p>
                <h3 className="py-2"><span className="font-bold">Email:</span>{config.email}</h3>
                <h3 className="py-2"><span className="font-bold">Phone:</span>{config.phone}</h3>
                <div className="flex py-15">
                    <a href={config.social.gitup} className="pr-5 hover:text-black"><AiOutlineGithub size={40} /></a>
                    <a href={config.social.linkedin} className="pr-5 hover:text-black"><AiOutlineLinkedin size={40} /></a>
                </div>

            </div>
        </section>
    </>)
}






