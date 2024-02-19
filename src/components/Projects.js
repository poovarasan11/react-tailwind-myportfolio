import WebsiteImg from "../assets/ecommerce-websites.jpg"
import WebsiteImg1 from "../assets/food-ecommerce.jpg"
import WebsiteImg2 from "../assets/website-blog.jpg"
export default function Projects(params) {

    const config = {
        projects: [
            {
                image: WebsiteImg,
                description: 'A Ecommerce Website. Build with MERN Stack.',
                link: 'https://github.com/poovarasan11'
            },
            {
                image: WebsiteImg1,
                description: 'Food Ecommerce Website. Build with MERN Stack.',
                link: 'https://github.com/poovarasan11'
            },
            {
                image: WebsiteImg2,
                description: 'Basic Blog website. Build with MERN Stack.',
                link: 'https://github.com/poovarasan11'
            }

        ]
    }

    return (<>
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
            <div className="w-full ">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my Projects. I have bulid the MERN stack.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map((project) => (
                        // <a href={project.link}>
                        <div className="relative">
                            <img className="h-[200px] w-[500px]" src={project.image} />
                            <div className="project-desc">
                                <p className="text-center px-5 py-5">{project.description}</p>
                                <div className="flex justify-center ">
                                    <a className="btn" target='_blank' href={project.link}>View project</a>
                                </div>
                            </div>
                        </div>
                        // </a>
                    ))}

                </div>
            </div>
        </section>
    </>)
}

