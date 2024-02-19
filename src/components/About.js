import AboutImg from "../assets/about.png";

export default function About() {
    const config = {
        line1: "Hi, My Name is Poovarasan Subramani. I am a Full Stack Web Developer. I built beautiful websites with React.js and Backend Node.js.",
        line2: "I am proficient in Frontend skills like JavaScript, React.js, Redux, Axios, Tailwindcss and HTML.",
        line3: "I am proficient in Backend skills like JavaScript, Node.js, Redis, OAuth, NPM, Mongoose and DataBase MongoDb.",

    }

    return (<>
        <section className="flex flex-col md:flex-row bg-secondary px-5 " id="about">
            <div className="py-5 md:w-1/2">
                <img src={AboutImg} />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white ">
                    <h1 className="text-4xl border-b-4 border-primary mb-5 w-[175px] font-bold">About Me</h1>
                    <p className="text-1xl pb-5 ">{config.line1}</p>
                    <p className="text-1xl pb-5">{config.line2} </p>
                    <p className="text-1xl pb-5">{config.line3}</p>

                </div>
            </div>
        </section>
    </>)
}


