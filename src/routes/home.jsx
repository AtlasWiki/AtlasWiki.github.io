import {useState, useEffect} from 'react';

export function Home(){
    const [text, setText] = useState();
    const titles = ['Web Developer', 'Security Researcher', 'Security Hobbyist', 'Cybersecurity Student']
    const ascii32to64 = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./0123456789:;<=>?@"
    const [paused, setPaused] = useState(false);
    const [correctIndex, setCorrectIndex] = useState(0);
    const [color, setColor] = useState();
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    useEffect(() => {
        if (!paused) {
            let incorrectIndex = 0;
            let rounds = 0;
            let obfuscatedWord = ''; 

            const interval = setInterval(async () => {
                setColor('text-red-800')
                let titleLength = titles[incorrectIndex].length;
                for (let i = 0; i < titleLength; i++) {
                    obfuscatedWord += ascii32to64[Math.floor(Math.random() * ascii32to64.length)];
                }

                setText(obfuscatedWord);
                obfuscatedWord = '';
                incorrectIndex = (incorrectIndex + 1) % titles.length;
                rounds += incorrectIndex === 0 ? 1 : 0;

                if ((rounds + 1) % 40 === 0) {
                    setPaused(true);
                    const newCorrectIndex = (correctIndex + 1) % titles.length;
                    setCorrectIndex(newCorrectIndex);
                    setText(titles[newCorrectIndex]);
                    setColor('text-gray-600')
                    await sleep(1000);
                    setPaused(false);
                }
            }, 1);

            return () => clearInterval(interval);
        }
    }, [paused, correctIndex]);

    const [prevScrollPos, setPrevScrollPos] = useState();
    const [showComponentEffect, setComponentEffect] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currScrollPos = window.pageYOffset;
            setComponentEffect(prevScrollPos > currScrollPos);
            setPrevScrollPos(window.pageYOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos])

    return(
        <div className="w-full">
            <div className="bg-gradient-to-r from-stone-400 to-slate-500 overflow-hidden">
                {/* <nav className="bg-gradient-to-r from-stone-400 to-slate-500 p-10 flex flex-auto justify-end gap-10 font-semibold">
                    <a>Home</a>
                    <a>Contact</a>
                    <a>About</a>
                </nav> */}
                <div className="flex flex-col gap-12 text-center items-center mt-40 md:mt-60 justify-center bg-gradient-to-r from-stone-400 to-slate-500 pb-40 md:pb-72">
                    <h1 className='text-5xl md:text-9xl font-sans font-normal'>Nathan Wong</h1>
                    <div>
                        <h2 className={`font-mono text-2xl ${color}`}>{'<'}{text}{'>'}</h2>
                        {/* <h2 className="font-mono text-md text-gray-600">{'<'}Cybersecurity Enthusiast{'>'}</h2> */}
                    </div>
                    <div className="flex gap-5">
                        <a href="mailto:nathanwong3421@gmail.com" className="border-2 border-black px-10 py-2 text-lg text-gray-600 font-semibold hover:bg-gray-500/20">Contact</a>
                        <button className="bg-black px-10 py-2 text-lg text-gray-400 font-semibold hover:opacity-80" onClick={() => document.location = "https://www.linkedin.com/in/nathan-w-76ba78202/"}>Linkedin</button>
                    </div>
                    <a className="" href="https://github.com/AtlasWiki/">
                        <svg className="transition-all duration-1000 hover:size-52" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="black" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                    </a>
                </div>
               
            </div>
            <div className={`w-full `}>
                <section className={`w-full mt-20 mx-auto p-5 pt-40 transition-transform duration-500 ${showComponentEffect ? 'md:translate-y-0' : 'md:-translate-y-32' }`}>
                    {/* <h1 className="text-6xl mb-4">Skills</h1> */}
                    <div className="md:grid md:grid-cols-3 gap-10">
                        <div className="flex flex-col p-1 pb-10">
                            <div className="w-full flex gap-2">
                                <div className="flex items-center justify-center">
                                    <svg className="transition-all duration-1000 hover:size-28" xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 24 24"><g fill="none" stroke="#334155" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/><path strokeLinecap="round" d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"/></g></svg>
                                </div>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl mb-4">Programming & Coding</h1>
                                </div>
                            </div>
                            <p className="leading-9 transition-transform duration-1000 hover:translate-y-5">In my time of learning web development, web security, and bug bounty.
                                I have utilized some programming and coding languages such as HTML, CSS, Python, Javascript, and Typescript
                                to build web applications, patch vulnerabilites, proactively/reactively mitigate vulnernabilities, program custom scripting tools for red-teaming activities, and perform code review.
                                I constantly maintain my tools, incorporate new functionality, or even apply custom scripts to solve problems as an attempt
                                to hone my problem solving and programming skills. 
                            </p>
                        </div>
                        <div className="flex flex-col p-1 pb-10">
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center">
                                    <svg className="transition-all duration-1000 hover:size-28" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24"><path fill="#334155" d="M19.108 12.376q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5q-.279.285-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659q.089-.261.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63M4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.5 20.5 0 0 0-.422 2.678A21 21 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452m3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178m0 3.94a7.2 7.2 0 0 1-2.64.094a1.77 1.77 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.5 20.5 0 0 0 2.107 1.7a21 21 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a19 19 0 0 1 1.739-.635a18 18 0 0 1 .306 1.811M9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.5 20.5 0 0 0-2.526.97a20 20 0 0 0-2.52-.981q.087-.3.188-.596m-.4 1.424a18 18 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823m-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18 18 0 0 1-1.744.665a19 19 0 0 1-.322-1.853Zm5.456 3.146a7.2 7.2 0 0 1-1.238 2.333a1.77 1.77 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20 20 0 0 0 2.53-1.01a21 21 0 0 0 2.547.979q-.072.249-.155.494m.362-1.324a19 19 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18 18 0 0 1-.295 1.838m.447-4.743q0 .911-.057 1.82q-.741.502-1.554.972q-.81.467-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24 24 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831m.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20 20 0 0 0-2.144-1.688a20 20 0 0 0-.405-2.649q.31-.076.608-.135m-.13 3.885a18 18 0 0 1 1.462 1.188a18 18 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208m3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20 20 0 0 0 .387-2.682a20 20 0 0 0 2.137-1.715q.177.183.336.364a7.2 7.2 0 0 1 1.403 2.238a1.77 1.77 0 0 1 .054 1.403m-8.819-6.141a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654"/></svg>
                                </div>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl mb-4">Web Technologies</h1>
                                </div>
                            </div>
                            <p className="leading-9 transition-transform duration-1000 hover:translate-y-5">
                                From my prior work experience and projects, I have incorporated and worked with frameworks such as Vitejs, Nextjs, Reactjs, Tailwindcss, Express, Nestjs.
                                I've created a github CI/CD system in order to collaborate with my team using an organizational system in place.
                                I am familiar with bash, git-bash, vscode, PostgreSQL, TypeORM, JWT, best security practices, session management, cryptography, and authentication.
                                Collaborated with my team and Incorporated OWASP TOP 10 techniques, performed security testing and custom API testing/development.
                            </p>
                        </div>
                        <div className="flex flex-col p-1 pb-10">
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center">
                                    <svg className="transition-all duration-1000 hover:size-28" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 50 50"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path stroke="#334155" d="M35.417 25v10.417zm-8.334 10.417V31.25zM6.25 31.25l5.896-5.896zm10.417-16.667a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"/><path stroke="#334155" d="M16.667 6.25h25a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-25a2.083 2.083 0 0 1-2.084-2.083v-6.25"/></g></svg>
                                </div>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl mb-4">Ethical Hacking & Research</h1>
                                </div>
                            </div>
                            <p className="leading-9 transition-transform duration-1000 hover:translate-y-5">
                                When it comes to learning cybersecurity, I keep up with reading blogs, PoCs, hacktivities, CVEs, and trends.
                                During my practical learning, I challenge myself to hunt on bug bounty programs for vulnerabitilies and escalate it to creative exploitation.
                                Sometimes I collaborate with others, learn from them, and offer valuable insights.
                            </p>
                        </div>
                        <div className="flex flex-col p-1 pb-10">
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center">
                                    <svg className="transition-all duration-1000 hover:size-28" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 14 14"><g fill="none" stroke="#334155" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 2.5h-7v5h7zm-3.5 0v5M8.5.5l1.5 2l1.5-2M.5 11l2.444 2.036a2 2 0 0 0 1.28.463h6.442c.46 0 .834-.373.834-.833c0-.92-.746-1.667-1.667-1.667H5.354"/><path d="m3.5 10l.75.75a1.06 1.06 0 0 0 1.5-1.5L4.586 8.085A2 2 0 0 0 3.17 7.5H.5"/></g></svg>
                                </div>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl mb-4">Contribution</h1>
                                </div>
                            </div>
                            <p className="leading-9 transition-transform duration-1000 hover:translate-y-5">
                                During my spare time, I have released a few of my tools as well as blog posts to the security community.
                                In my journey, I have offered advice and collaborated with others in support of their own tool development.
                            </p>
                        </div>
                        <div className="flex flex-col p-1 pb-10">
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center">
                                    <svg className="transition-all duration-1000 hover:size-28" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24"><g fill="none" stroke="#334155" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M6.818 22v-2.857C6.52 16.166 3 14.572 3 10c0-4.57 2.727-8.056 8.182-8c3.927.042 7.636 2.286 7.636 6.858L21 12.286c0 2.286-2.182 2.286-2.182 2.286s.546 5.714-4.364 5.714V22"/><path d="M11 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path strokeDasharray=".3 2" d="M11 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></g></svg>
                                </div>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl mb-4">CTF & Learning</h1>
                                </div>
                            </div>
                            <p className="leading-9 transition-transform duration-1000 hover:translate-y-5">While I do learn from hunting bugs in bug bounty programs, I also find other approaches to hone my skills and knowledge.
                                To train my creativity and practical skills, I participate in cybersecurity CTF (Capture The Flag) challenges as well as doing practical labs.
                                To hone my programming and exploitation skills, I create labs and tools of my own for my own testing environment. Another measure I take is analyzing
                                and reverse engineering other tools to improve my skills.
                            </p>
                        </div>
                        <div className={`flex flex-col p-1 pb-10 `}>
                            <div className="flex gap-2">
                                <div className="flex items-center justify-center">
                                    <svg className="transition-all duration-1000 hover:size-28" xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24"><g fill="none" stroke="#334155" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="5" cy="6" r="3"/><path d="M5 9v12M15 9l-3-3l3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/></g></svg>
                                </div>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl mb-4">Projects</h1>
                                </div>
                            </div>
                            <p className="leading-9 transition-transform duration-1000 hover:translate-y-5">
                               I have projects relating to web development and security. The first one is called "Chatogram"
                               which is a modern chatting web application with best security practices. For offensive security related tools,
                               I have created and released kaiser-webhooks, js-parse, meowpi, and js-parse bookmarks. They can be seen in my github pins
                               here: <a className="text-blue-500 underline hover:no-underline" href="https://github.com/AtlasWiki">Github Profile</a>
                            </p>
                        </div>
                    </div>
                </section>
                <section className={`mt-10 pt-10 py-80 bg-gradient-to-r from-stone-400 to-slate-500 overflow-hidden transition-transform duration-500 `}>
                    <div className="w-3/4">
                        <div className={`flex flex-col gap-2 ml-10 transition-transform duration-500 pb-2 ${showComponentEffect ? 'md:translate-y-0' : 'md:translate-x-12'} ${showComponentEffect ? 'md:translate-y-0' : 'md:translate-y-24'}`}>
                            <h1 className="text-4xl">About Me</h1>
                            <p className="transition-transform duration-1000 hover:translate-y-5 leading-8 text-lg mb-4">Currently I am a fullstack web developer and cybersecurity student driven in learning about the security landscape.
                                In my freetime, I hunt for vulnerabilities on bug bounty programs and collaborate with others while keeping up with security trends.
                                To keep my learning up-to-date, I partake in contributing to the community, programming web applications, testing environments, labs, and scripts. During my learning, 
                                I tend to explore different frameworks and web technologies, and continue to reverse engineer / review code from others.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
