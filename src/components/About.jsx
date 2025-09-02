import { React,useState } from 'react'
const About = () => {
   const [activeSection, setActiveSection] = useState('skills');

  return (
    <div name="About" className="max-w-screen-2xl container mx-auto p-5 md:px-20 md:pb-18 bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-[#d3d3d3]">
        <h1 className='font-bold text-3xl mb-4'>About</h1>
        <div className='flex justify-center '>
          <div className='h-20 w-3xl mt-5 '> 
            <p className=''>Hi, I'm Noorjahan, a passionate Web Developer with a background in ECE, 
            turning ideas into interactive digital experiences. 
            I blend creativity with code to craft clean, user-focused websites.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center' >
          <div className='md:mt-4 mt-20 space-x-8'>
            <button onClick={() => setActiveSection('education')}  className={`md:px-9 md:py-4.5 px-4 py-2.5 rounded-xl ${activeSection === 'education' ? 'bg-white text-black' : ' border-1'}`}>
              Education
            </button>
            <button onClick={() => setActiveSection('skills')}  className={`md:px-14 md:py-4.5 px-9 py-2.5 rounded-xl ${activeSection === 'skills' ? 'bg-white text-black' : ' border-1'}`}>
              Skills</button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='mt-10 md:mt-18 md:h-70 h-80 w-2xl bg-gradient-to-b from-[#0c0c1d] to-[#001b3a] rounded-2xl flex  items-center justify-center '>
            {activeSection === 'education' && (
              <div>
                <div>
                  <p className='md:text-xl tracking-wide text-lg'> <span className='text-red-300 md:text-xl tracking-wide text-lg'>2019 - 2023 </span>B.Tech (ECE)</p>
                  <p className='md:text-xl tracking-wide text-lg'>NIET, Greater Noida</p>
                </div>
                <div className='mt-3 mb-3'>
                  <p className='md:text-xl tracking-wide text-lg' > <span className='text-red-300 '>2017 - 2019 </span>12th </p>
                  <p className='md:text-xl tracking-wide text-lg'>S.R.K.Goenka College,Sitamarhi,Bihar</p>
                </div>
              </div>
            )}
            
            {activeSection === 'skills' && (
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="text-red-300">Languages:</span> JavaScript, Python, C</li>
                <li><span className="text-red-300">Frontend Development:</span> HTML, CSS, React.js, Bootstrap, Tailwind CSS</li>
                <li><span className="text-red-300">Backend Development:</span> Node.js, Express</li>
                <li><span className="text-red-300">Database:</span> MongoDB, MySQL</li>
                <li><span className="text-red-300">Tools:</span> Git, VS Code</li>
              </ul>
           </div>
          )}
          </div>
        </div>

        <br/>
        {/* <h1 className='text-green-600 font-semibold text-xl'>Education and Training</h1> */}
        
    </div>
  )
}

export default About