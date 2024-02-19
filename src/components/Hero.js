import HeroImg from "../assets/hero.png"
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Im a Full-Stack Web Developer',
        social: {
            twitter: "",
            facebook: '',
            linkedin: 'https://www.linkedin.com/in/poovarasan-s-3a299b227/',
            gitup: "https://github.com/poovarasan11"


        }
    }

    return (<>
        <section className="flex flex-col md:flex-row px-5 py-32  bg-primary justify-center">
            <div className="md:w-1/2 flex flex-col">
                <h1 className="w-1/2 text-white text-6xl font-hero-font">Hi,<br /> Im Poovarasan Subramani,
                    <p className="text-2xl  ">{config.subtitle} </p>
                </h1>
                <div className="flex py-15">
                    <a href="#" className="pr-5 hover:text-white"><AiOutlineFacebook size={40} /></a>
                    <a href="#" className="pr-5 hover:text-white"><AiOutlineTwitter size={40} /></a>
                    <a href={config.social.gitup} className="pr-5 hover:text-white"><AiOutlineGithub size={40} /></a>
                    <a href={config.social.linkedin} className="pr-5 hover:text-white"><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>
            <img className="md:w-1/3" src={HeroImg} />
        </section >
    </>)
}
