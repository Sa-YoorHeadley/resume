import data from './data.js'
import pdf from "./assets/Sa-Yoor Headley's Resume.pdf"

function App() {

  return (
    <div className="App relative px-2 py-12 md:px-12 h-full bg-gray-100 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <header id='header'>
        {/* Title */}
        <div className='flex flex-col justify-center items-center relative'>
          <h1 className='text-3xl sm:text-4xl text-center font-extrabold uppercase tracking-wider self-center'>{data.name}</h1>
        </div>
        {/* CTA */}
        <div className='w-full flex justify-around items-center flex-wrap text-lg text-gray-500 font-semibold mt-4 sm:justify-center sm:space-x-4'>
          <a href={data.email} target="_blank" rel='noreferrer' className='flex items-center px-4 hover:text-black focus:text-black hover:underline'>Email</a>
          <a href={data.websites.portfolio} target="_blank" rel='noreferrer' className='flex items-center px-4 hover:text-black focus:text-black hover:underline'>Portfolio</a>
          <a href={data.websites.github} target="_blank" rel='noreferrer' className='flex items-center px-4 hover:text-black focus:text-black hover:underline'>Github</a>
          <a href={data.websites.linkedIn} target="_blank" rel='noreferrer' className='flex items-center px-4 hover:text-black focus:text-black hover:underline'>LinkedIn</a>
          <a href={pdf} download className='flex items-center px-4 hover:text-black focus:text-black hover:underline'>Download</a>
        </div>
      </header>

      <main className='mt-8 flex flex-col justify-start items-center md:justify-center md:items-start md:flex-row '>
      {/* Left Section */}
      <section className='w-full py-6 md:w-1/4 text-center md:text-left'>
        {/* Programming Languages and Frameworks */}
        <article>
        {/* Title */}
          <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Programming Languages and Frameworks</h2>
          <div className='flex justify-center flex-wrap md:flex-col text-sm'>
            {/* Frontend */}
            <div className='flex flex-col w-24 mx-2 mt-4 md:w-full'>
              <h3 className='text-lg font-semibold'>Frontend: </h3>
              <ul>
                {data.programmingLanguagesFrameworks.frontend.map(item => (<li className='md:list-disc md:list-inside md:indent-2' key={item}>{item}</li>))}
              </ul>
            </div>

            {/* Backend */}
            <div className='flex flex-col w-24 mx-2 mt-4 md:w-full'>
              <h3 className='text-lg font-semibold'>Backend: </h3>
              <ul>
                {data.programmingLanguagesFrameworks.backend.map(item => (<li className='md:list-disc md:list-inside md:indent-2' key={item}>{item}</li>))}
              </ul>
            </div>

            {/* Database */}
            <div className='flex flex-col w-24 mx-2 mt-4 md:w-full'>
              <h3 className='text-lg font-semibold'>Database: </h3>
              <ul>
                {data.programmingLanguagesFrameworks.database.map(item => (<li className='md:list-disc md:list-inside md:indent-2' key={item}>{item}</li>))}
              </ul>
            </div>

            {/* Other */}
            <div className='flex flex-col w-24 mx-2 mt-4 md:w-full'>
              <h3 className='text-lg font-semibold'>Other: </h3>
              <ul>
                {data.programmingLanguagesFrameworks.other.map(item => (<li className='md:list-disc md:list-inside md:indent-2' key={item}>{item}</li>))}
              </ul>
            </div>
          </div>
        </article>

        {/* Tools */}
        <article className='mt-8 mb-4 text-sm'>
        <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Tools</h2>
          <ul className='flex flex-col mt-4'>
            {data.tools.map(item => (<li className='md:list-disc md:list-inside md:indent-2' key={item}>{item}</li>))}
          </ul>
        </article>

        {/* Skills */}
        <article className='mt-8 mb-4 text-sm'>
        <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Skills</h2>
          <ul className='flex flex-col mt-4'>
            {data.skills.map(item => (<li className='md:list-disc md:list-inside md:indent-2' key={item}>{item}</li>))}
          </ul>
        </article>
      </section>

      {/* Right Section */}
      <section className='w-full md:w-3/4 py-6 px-4 text-center text-sm md:text-left'>
        {/* Profile */}
        <article className=''>
          <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Profile</h2>
          <p className='mt-2 md:w-3/4'>{data.profile}</p>
        </article>


        {/* Employment History */}
        <div className='mt-4' id='employment-history'>
          <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Employment History</h2>
          {data.employment.map((job, index) => 
            (
              <article className={`mt-2 text-sm md:w-3/4 ${index !== 0 && 'border-t border-gray-300 pt-1'}`}>
                {/* Title, Employer and Location */}
                <h3 className='text-lg font-semibold'>{job.title}, {job.employer} - {job.location}</h3>

                {/* Start and End Dates */}
                <h4 className='text-md font-semibold'>{job.duration.startDate} to {job.duration.endDate}</h4>

                {/* Worked On */}
                {job.workedOn && 
                  <ul className='mt-5'>
                    {job.workedOn.map(item => (<li className='font-medium md:list-disc md:list-inside md:indent-1' key={item}>{item}</li>))}
                  </ul>
                }

                {/* Tools and Tech Stacks Used */}
                <p className='mt-3 text-sm'>Tools and/or Tech Stack Used: {job.toolsUsed.map((item, index, toolsUsed) => index !== toolsUsed.length -1 ? `${item} | ` : `${item}.`)}</p>

                {/* Responsibilities */}
                <ul className='mt-3 mb-9'>
                  {job.responsibilities.map(responsibility => (<li className='mb-2 text-left list-disc list-inside md:indent-8' key={responsibility}>{responsibility}</li>))}
                </ul>
              </article>
          ))}
        </div>

        {/* Education */}
        <div className='mt-2' id='education'>
          <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Education</h2>
          {data.education.map((course, index) => 
            (
              <article className={`mt-2 text-sm md:w-3/4 ${index !== 0 && 'border-t border-gray-300 pt-1'}`}>
                {/* Title, Institute and Location */}
                <h3 className='text-lg font-semibold'>{course.name}, {course.institute} - {course.location}</h3>

                {/* Year */}
                <h4 className='text-md font-semibold'>{course.year}</h4>

                {/* Merits */}
                <p className='mt-4 underline'>Merits:</p>
                <ul className='flex flex-col items-center md:items-start'>
                  {course.merits.map(merit => (<li className='my-1 text-left list-disc list-inside md:indent-8' key={merit}>{merit}</li>))}
                </ul>

                {/* Grades */}
                <p className='mt-4 underline'>Grades: </p>
                <ul className='flex flex-col items-center md:items-start mt-3 mb-9'>
                  {course.subjects.map(subject => (
                    <li key={subject} className="my-1 w-full sm:w-1/2  flex justify-between text-left">
                      <p>{subject.name}</p>
                      <p className='flex justify-left w-4'>{subject.grade}</p>
                    </li>
                  ))}
                </ul>

              </article>
          ))}
        </div>

        {/* Certifications */}
        <div className='mt-2' id='certifications'>
          <h2 className='mb-4 text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Certifications</h2>
          {data.certificates.map((course, index) => 
            (
              <article className={`mt-2 text-sm md:w-3/4`}>
                {/* Title, Institute */}
                <ul>
                  <li className='mb-5 flex flex-col md:text-left md:mb-3'><span className='font-bold'>{course.name}</span> {course.institute}</li>
                </ul>
              </article>
          ))}
        </div>

        {/* Internships */}
        <div className='mt-8'>
          <h2 className='text-xl font-bold underline decoration-gray-300 decoration-1 underline-offset-4'>Internships</h2>
          {data.internships.map((internship, index) => 
            (
              <article className={`mt-2 text-sm md:w-3/4 ${index !== 0 && 'border-t border-gray-300 pt-1'}`}>
                {/* Title, Employer and Location */}
                <h3 className='text-lg font-semibold'>{internship.title}, {internship.employer} - {internship.location}</h3>

                {/* Tools and Tech Stacks Used */}
                <p  className='mt-3 text-sm'>Tools and/or Tech Stack Used: {internship.toolsUsed.map(item => `${item}`)}</p>

                {/* Responsibilities */}
                <ul className='mt-3 mb-9'>
                  {internship.responsibilities.map(responsibility => (<li className='mb-2 text-left list-disc list-inside md:indent-8' key={responsibility}>{responsibility}</li>))}
                </ul>
              </article>
          ))}
        </div>

      </section>
    </main>

    <footer className='w-screen flex flex-col justify-center items-center -mb-12 p-4 text-xs bg-gray-200'>
      <h3 className='text-lg font-semibold'>Sa-Yoor Headley</h3>
      <div className='flex gap-16'>
        <ul className='flex flex-col my-1'>
          <li><a href={data.email} target="_blank" rel='noreferrer' className='my-2 hover:text-black focus:text-black hover:underline'>Email</a></li>
          <li><a href={data.websites.portfolio} target="_blank" rel='noreferrer' className='my-2 hover:text-black focus:text-black hover:underline'>Portfolio</a></li>
          <li><a href={data.websites.github} target="_blank" rel='noreferrer' className='my-2 hover:text-black focus:text-black hover:underline'>Github</a></li>
          <li><a href={data.websites.linkedIn} target="_blank" rel='noreferrer' className='my-2 hover:text-black focus:text-black hover:underline'>LinkedIn</a></li>
        </ul>
        <ul className='flex flex-col my-1 text-right'>
        <li><a href='#header' className='my-2 hover:text-black focus:text-black hover:underline'>Home</a></li>
          <li><a href='#employment-history' className='my-2 hover:text-black focus:text-black hover:underline'>Employment History</a></li>
          <li><a href='#education' className='my-2 hover:text-black focus:text-black hover:underline'>Education</a></li>
          <li><a href='#certifications' className='my-2 hover:text-black focus:text-black hover:underline'>Certifications</a></li>
        </ul>
      </div>
      <small className=' mt-4 font-thin text-gray-500'>Copyrights © 2022, All rights reserved</small>
    </footer>

    </div>
  );
}

export default App;
