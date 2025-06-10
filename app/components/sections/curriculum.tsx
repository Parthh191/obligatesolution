import Image from 'next/image';

const topics = [
	{
		title: 'Web Development Fundamentals',
		description: 'HTML5, CSS3, JavaScript ES6+, and modern web standards',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
		gradient: 'from-orange-500 to-yellow-500',
	},
	{
		title: 'Frontend Frameworks',
		description: 'React, Next.js, Vue.js, and state management',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
		gradient: 'from-blue-500 to-cyan-500',
	},
	{
		title: 'Backend Development',
		description: 'Node.js, Express, databases, and API design',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
		gradient: 'from-green-500 to-emerald-500',
	},
	{
		title: 'Cloud & DevOps',
		description: 'AWS, Docker, CI/CD, and deployment strategies',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',
		gradient: 'from-blue-600 to-indigo-600',
	},
	{
		title: 'Data Structures & Algorithms',
		description: 'Problem-solving skills and optimization techniques',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
		gradient: 'from-yellow-500 to-orange-500',
	},
	{
		title: 'System Design',
		description: 'Architecture patterns and scalable systems',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg',
		gradient: 'from-purple-500 to-pink-500',
	},
];

export function Curriculum() {
	return (
		<section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gray-950">
			{/* Enhanced background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/90 to-gray-900/80" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 blur-[150px] rounded-full animate-pulse" />
			<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full animate-pulse" />

			<div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 sm:mb-6 filter drop-shadow-lg">
						What You&apos;ll Learn
					</h2>
					<p className="text-base sm:text-lg lg:text-xl text-gray-300/90 mb-4">
						Comprehensive curriculum designed by industry experts
					</p>
				</div>

				<div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
					{topics.map((topic, index) => (
						<div
							key={topic.title}
							className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-800/50 
                            transition-all duration-500 hover:-translate-y-1 card-gradient animate-floating"
							style={{
								background: `linear-gradient(135deg, 
									rgba(17, 17, 17, 0.95) 0%,
									rgba(35, 35, 35, 0.85) 100%)`,
                                animationDelay: `${index * 200}ms`
							}}
						>
							{/* Dynamic gradient overlay with improved colors */}
							<div
								className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
								style={{
									background: `linear-gradient(135deg, 
										${topic.title.includes('Web') ? 'rgba(255, 94, 7, 0.1), rgba(255, 186, 0, 0.1)' : 
										topic.title.includes('Frontend') ? 'rgba(56, 189, 248, 0.1), rgba(49, 196, 141, 0.1)' :
										topic.title.includes('Backend') ? 'rgba(134, 239, 172, 0.1), rgba(59, 130, 246, 0.1)' :
										topic.title.includes('Cloud') ? 'rgba(167, 139, 250, 0.1), rgba(244, 114, 182, 0.1)' :
										topic.title.includes('Data') ? 'rgba(251, 146, 60, 0.1), rgba(147, 51, 234, 0.1)' :
										'rgba(236, 72, 153, 0.1), rgba(67, 56, 202, 0.1)'})`
								}}
							/>

							{/* Enhanced animated border gradient */}
							<div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-gray-500/10 to-transparent 
                                group-hover:via-indigo-500/40 transition-all duration-500">
								<div className="absolute inset-0 rounded-2xl backdrop-blur-3xl" />
							</div>

							<div className="relative">
								<div
									className="p-2 sm:p-3 rounded-lg sm:rounded-xl w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 flex items-center justify-center mb-4 sm:mb-6 
                                    transform group-hover:scale-110 transition-all duration-500 shadow-lg 
                                    group-hover:shadow-2xl"
									style={{
										background: `linear-gradient(135deg, 
											${topic.title.includes('Web') ? 'rgba(255, 94, 7, 0.9), rgba(255, 186, 0, 0.9)' : 
											topic.title.includes('Frontend') ? 'rgba(56, 189, 248, 0.9), rgba(49, 196, 141, 0.9)' :
											topic.title.includes('Backend') ? 'rgba(134, 239, 172, 0.9), rgba(59, 130, 246, 0.9)' :
											topic.title.includes('Cloud') ? 'rgba(167, 139, 250, 0.9), rgba(244, 114, 182, 0.9)' :
											topic.title.includes('Data') ? 'rgba(251, 146, 60, 0.9), rgba(147, 51, 234, 0.9)' :
											'rgba(236, 72, 153, 0.9), rgba(67, 56, 202, 0.9)'})`
									}}
								>
									<Image
										src={topic.icon}
										width={36}
										height={36}
										alt={topic.title}
										className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 group-hover:rotate-3 transition-transform duration-300 drop-shadow-lg"
									/>
								</div>

								<h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 bg-clip-text text-transparent 
                                    bg-gradient-to-r group-hover:bg-gradient-to-r transition-all duration-300"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, 
                                            ${topic.title.includes('Web') ? 'rgb(255, 94, 7), rgb(255, 186, 0)' : 
                                            topic.title.includes('Frontend') ? 'rgb(56, 189, 248), rgb(49, 196, 141)' :
                                            topic.title.includes('Backend') ? 'rgb(134, 239, 172), rgb(59, 130, 246)' :
                                            topic.title.includes('Cloud') ? 'rgb(167, 139, 250), rgb(244, 114, 182)' :
                                            topic.title.includes('Data') ? 'rgb(251, 146, 60), rgb(147, 51, 234)' :
                                            'rgb(236, 72, 153), rgb(67, 56, 202)'})`
                                    }}>
									{topic.title}
								</h3>

								<p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors 
                                    duration-300 leading-relaxed relative z-10">
									{topic.description}
								</p>

								{/* Enhanced shimmering line effect */}
								<div className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full 
                                    transition-all duration-700 ease-out"
									style={{
										background: `linear-gradient(to right, 
											${topic.title.includes('Web') ? 'rgba(255, 94, 7, 0.6), rgba(255, 186, 0, 0.6)' : 
											topic.title.includes('Frontend') ? 'rgba(56, 189, 248, 0.6), rgba(49, 196, 141, 0.6)' :
											topic.title.includes('Backend') ? 'rgba(134, 239, 172, 0.6), rgba(59, 130, 246, 0.6)' :
											topic.title.includes('Cloud') ? 'rgba(167, 139, 250, 0.6), rgba(244, 114, 182, 0.6)' :
											topic.title.includes('Data') ? 'rgba(251, 146, 60, 0.6), rgba(147, 51, 234, 0.6)' :
											'rgba(236, 72, 153, 0.6), rgba(67, 56, 202, 0.6)'})`
									}}
								/>
							</div>

							{/* Enhanced corner accent */}
							<div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
								style={{
									background: `linear-gradient(135deg, 
										${topic.title.includes('Web') ? 'rgba(255, 94, 7, 0.2), rgba(255, 186, 0, 0.2)' : 
										topic.title.includes('Frontend') ? 'rgba(56, 189, 248, 0.2), rgba(49, 196, 141, 0.2)' :
										topic.title.includes('Backend') ? 'rgba(134, 239, 172, 0.2), rgba(59, 130, 246, 0.2)' :
										topic.title.includes('Cloud') ? 'rgba(167, 139, 250, 0.2), rgba(244, 114, 182, 0.2)' :
										topic.title.includes('Data') ? 'rgba(251, 146, 60, 0.2), rgba(147, 51, 234, 0.2)' :
										'rgba(236, 72, 153, 0.2), rgba(67, 56, 202, 0.2)'})`
								}}
							/>
						</div>
					))}

				</div>

				{/* Tech stack logos with permanent colors */}
				<div className="mt-12 sm:mt-16 lg:mt-24 flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 transition-all duration-700">
					{[
						'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
						'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
						'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
						'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
						'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
					].map((src, i) => (
						<Image
							key={i}
							src={src}
							width={48}
							height={48}
							alt=""
							className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 transform hover:scale-125 transition-transform duration-500 
                            hover:drop-shadow-lg hover:drop-shadow-indigo-500/20"
							style={{
								filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.2))'
							}}
						/>
					))}
				</div>
			</div>
		</section>
	);
}